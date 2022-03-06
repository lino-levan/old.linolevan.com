import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { getPosts, IPost } from '../../lib/getPosts'
import textProcessor from '../../lib/TextProcessor'

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
        <title>Lino Le Van</title>
        <meta name="description" content="My portfolio site for my personal projects" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header />
        <div className="flex py-28 justify-center items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl">{post.title}</h1>
            <p>{post.date}</p>
            <p>{textProcessor(post.post)}</p>
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