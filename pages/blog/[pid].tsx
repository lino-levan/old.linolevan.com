import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../../components/Header'
import StyledMarkdown from '../../components/StyledMarkdown'
import { getPosts, IPost } from '../../lib/getPosts'

const Post: NextPage = (props: any) => {
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
            <h1 className="text-4xl">{post.title}</h1>
            <p>{post.date}</p>
            <StyledMarkdown>{post.post}</StyledMarkdown>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 px-6">
          <div className="max-w-4xl">
            <a href="mailto:lino.levan@gmail.com?subject=SUBSCRIBING_REQUEST&body=To subscribe, just press send!" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Subcribe to the Blog</a>
          </div>
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