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
    ))
  ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <Head>
        <title>Lino Le Van</title>
        <meta name="description" content="A timeline of all my updates" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Header />
        <div className="pt-28 w-full h-screen">
          <Chrono mode="VERTICAL" hideControls={true} theme={{
            primary: 'rgb(229, 231, 235)',
            secondary: 'rgba(110, 231, 183)',
            cardBgColor: 'white',
            cardForeColor: 'white',
            titleColor: 'black',
            titleColorActive: 'black',
          }}>
            {
              items.map((element, i)=>(
                <div key={i} className="flex flex-col gap-4 text-center cursor-pointer w-full h-48">
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

  return {
    props: {
      updates
    },
  }
}