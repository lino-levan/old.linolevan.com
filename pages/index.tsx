import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import { DefaultHeader } from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Lino Le Van</title>
        <meta name="description" content="My portfolio site for my personal projects" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <DefaultHeader />
      <main className="main">
        <div className="section">
          <div>
            <iframe src="https://lino-levan.github.io/smoll-physics/" width="400" height="400" scrolling="no" style={{boxSizing:"border-box",display:"inline-block",overflow:"hidden", border:0, margin:0, padding:0, position: "relative", maxWidth:"100%", boxShadow: "0px 0px 32px rgba(0,0,0,0.1);"}}></iframe>
          </div>
          <div />
          <div>
            <div className="header">
              <h1 className={styles.wave}>👋</h1>
              <h1>Hi there</h1>
            </div>
            <p>
              I&apos;m Lino Le Van, an independent developer who contributes to open source projects in my free time.
            </p>
            <p className="list">
              ☁️ I&apos;m currently focusing on Pintform and Thoughtlesspack as my personal projects<br />
              🦀 I&apos;m also learning Rust to build speedy applications<br />
              👥 I&apos;m having fun contributing to Minicraft<br />
              💻 Ask me about flash preservation!<br />
              😄 Pronouns: He/Him<br />
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
