import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Pond from '../components/Pond'
import StyledMarkdown from '../components/StyledMarkdown'

const Home: NextPage<{description: string}> = (props) => {
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

      <main className="h-screen overflow-hidden">
        <Header />
        <div className="gap-3 pt-28 flex justify-center flex-wrap">
          <div className="flex justify-center content-center">
            <div className="rounded-xl px-4 py-4 m-4 bg-gradient-to-tr from-teal-100 to-teal-50 max-w-xl h-min">
              <div className="flex mb-4 text-4xl">
                <h1 className="animate-wiggle pr-4">👋</h1>
                <h1>Hi there</h1>
              </div>
              <StyledMarkdown>
                {
                  props.description
                }
              </StyledMarkdown>
            </div>
          </div>
        </div>
        <Pond />
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const req = await fetch("https://raw.githubusercontent.com/lino-levan/lino-levan/main/README.md")
  const res = await req.text()

  return {
    props: {
      description: res.split("Hi there\n")[1].split("###")[0]
    },
  }
}