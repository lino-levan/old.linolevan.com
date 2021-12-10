import { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import Footer from "../components/Footer"
import { DefaultHeader } from "../components/Header"

const Elemental: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Elemental</title>
        <meta name="description" content="A continuation of carykh's game" />
      </Head>

      <DefaultHeader />
      <main className="main">
        <div className="section">
          <div>
              <Image src='/images/elemental.png' width="1000" height="568" alt="Browser OS"/>
          </div>
          <div />
          <div>
            <div className="header">
              <h1>Elemental 5</h1>
            </div>
            <p>
              The continuation of Elemental 3 by Carykh and Elemental 4 by Dave. A solid demonstration of the idea of a fullstack project. An amazing demo project to check someone&apos;s skill. Video explaining history of the game coming soon.
            </p>
            <p className="list">
              You can check out the game here: <a href="https://dev.elemental5.net">https://dev.elemental5.net</a><br />
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Elemental
