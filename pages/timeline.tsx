import type { NextPage } from 'next'
import Head from 'next/head'
import { Chrono } from "react-chrono"

import Header from '../components/Header'
import StyledMarkdown from '../components/StyledMarkdown'
import { getPosts, getUpdates, IPost, IUpdate } from '../lib/getMarkdown'

interface ITilmelineElement {
  content: string
  date: string
}

const Home: NextPage<{updates: IUpdate[], posts: Record<string,IPost>}> = ({updates, posts}) => {

  let items: ITilmelineElement[] = [
    ...updates.map((update)=>(
      {
        date: update.date,
        content: update.content
      }
    )),
    ...Object.entries(posts).map(([id,post])=>(
      {
        date: post.date,
        content: `I wrote blog article "[${post.title}](/blog/${id}))"`
      }
    ))
  ].sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <>
      <Head>
        <title>Lino Le Van</title>
        <meta name="description" content="My portfolio site for my personal projects" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Header />
        <div className="pt-28 w-full h-screen">
          <Chrono mode="VERTICAL">
            {
              items.map((element, i)=>(
                <div key={i} className="flex flex-col gap-4 text-center">
                  <h1 className="text-2xl">{element.date}</h1>
                  <StyledMarkdown>{element.content}</StyledMarkdown>
                </div>
              ))
            }
          </Chrono>
        </div>
      </main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const updates = getUpdates()
  const posts = getPosts()

  return {
    props: {
      updates,
      posts

    },
  }
}