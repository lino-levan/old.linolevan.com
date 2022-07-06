import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

import Header from '../../components/Header'
import StyledMarkdown from '../../components/StyledMarkdown'
import { getPosts, IPost } from '../../lib/getMarkdown'

const Post: NextPage = (props: any) => {
  const input = useRef(null)
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()
  const { pid } = router.query

  if(!pid || typeof pid !== 'string' || !props.posts.hasOwnProperty(pid)) {
    return <p>Unknown Post</p>
  }

  const post = props.posts[pid] as IPost

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.post.split("\n")[0]} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Header />
        <div className="flex pt-28 justify-center items-center px-6">
          <div className="max-w-4xl w-full">
            <div className="pb-4">
              <h1 className="text-4xl">{post.title}</h1>
              <p>{post.date}</p>
            </div>
            <StyledMarkdown>{post.post}</StyledMarkdown>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10 px-6">
          <div className="max-w-4xl w-full flex flex-col md:flex-row gap-4">
            {
              subscribed?
              <p className="bg-emerald-500 text-white font-bold py-2 px-4 rounded w-full">Success! Now check your email to confirm your subscription.</p>
              :
              <>
                <input ref={input} className="shadow px-2 py-2 rounded w-full" placeholder="example@example.com"></input>
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-full" onClick={()=>{
                  if(input.current) {
                    let cur = input.current as HTMLInputElement
                    if(cur.value.length > 0) {
                      fetch(`/api/subscribe?email=${cur.value}`)
                        .then((res)=>{
                          return res.json()
                        })
                        .then((res)=>{
                          if(res.error) {
                            setError("Failed to subscribe")
                          } else {
                            setSubscribed(true)
                            setError("")
                          }
                        })
                        .catch(()=>{
                          setError("Network Error")
                        })
                    } else {
                      setError("No Email Provided")
                    }
                  }
                }}>Subscribe to the Blog</button>
              </>
            }
            
          </div>
          <p className="text-red-600">{error}</p>
        </div>
      </main>
    </div>
  )
}

export default Post

export async function getStaticPaths() {
  const posts = getPosts()

  const paths = Object.keys(posts).map((key) => ({
    params: { pid: key },
  }))

  return { 
    paths,
    fallback: false 
  }
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts
    },
  }
}