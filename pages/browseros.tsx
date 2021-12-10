import { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import Footer from "../components/Footer"
import { DefaultHeader } from "../components/Header"

const Elemental: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Browser OS</title>
        <meta name="description" content="An in-browser operating system" />
      </Head>

      <DefaultHeader />
      <main className="main">
        <div className="section">
          <div>
              <Image src='/images/browseros.png' width="2880" height="1800" alt="Browser OS"/>
          </div>
          <div />
          <div>
            <div className="header">
              <h1>Browser OS</h1>
            </div>
            <p>
              A demonstration of how powerful modern browsers have become. Probably works best with chrome.
            </p>
            <p className="list">
              Github: <a href="https://github.com/lino-levan/browserOS">https://github.com/lino-levan/browserOS</a><br />
              Demo: <a href="https://lino-levan.github.io/browserOS/">https://lino-levan.github.io/browserOS/</a><br />
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Elemental
