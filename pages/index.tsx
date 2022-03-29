import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
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
        <div className="gap-3 py-28 flex justify-center flex-wrap">
          <div className="flex justify-center content-center">
            <div className="rounded-xl px-4 py-4 bg-gradient-to-tr from-teal-100 to-teal-50 w-96 h-min">
              <div className="flex mb-4 text-4xl">
                <h1 className="animate-wiggle pr-4">👋</h1>
                <h1>Hi there</h1>
              </div>
              <p>
                I&apos;m Lino Le Van, an independent developer who contributes to open source projects in my free time.
              </p>
              <p>
                ☁️ I&apos;m currently focusing on Pintform and Thoughtlesspack as my personal projects<br />
                🦀 I&apos;m also learning Rust to build speedy applications<br />
                👥 I&apos;m having fun contributing to Minicraft<br />
                💻 Ask me about flash preservation!<br />
                😄 Pronouns: He/Him<br />
              </p>
            </div>
          </div>
          <div className="flex justify-center content-center">
            <iframe src="https://lino-levan.github.io/smoll-physics/" width="400" height="400" scrolling="no" className="rounded-xl px-4 py-4 bg-teal-50"/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
