import { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import Footer from "../components/Footer"
import { DefaultHeader } from "../components/Header"

const Elemental: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Smaller Projects</title>
        <meta name="description" content="A list of my smaller projects" />
      </Head>

      <DefaultHeader />
      <main className="main">
        <div className="section">
          <div>
              <Image src='/images/balls.gif' width="400" height="400" alt="Balls"/>
          </div>
          <div />
          <div>
            <div className="header">
              <h1>Smoll Physics</h1>
            </div>
            <p>
              A small, unstable physics engine built to test my physics ability.
            </p>
            <p className="list">
              Github: <a href="https://github.com/lino-levan/smoll-physics">https://github.com/lino-levan/smoll-physics</a><br />
              Demo: <a href="https://lino-levan.github.io/smoll-physics/">https://lino-levan.github.io/smoll-physics/</a><br />
            </p>
          </div>
        </div>
        <div className="section">
          <div>
            <div className="header">
              <h1>Dinosaur Game ML</h1>
            </div>
            <p>
              A small ML5.js demo to show off the power of ML on the web.
            </p>
            <p className="list">
              Github: <a href="https://github.com/lino-levan/dinosaurGameML">https://github.com/lino-levan/dinosaurGameML</a><br />
              Demo: <a href="https://lino-levan.github.io/dinosaurGameML/">https://lino-levan.github.io/dinosaurGameML/</a><br />
            </p>
          </div>
          <div />
          <div>
            <Image src='/images/ai_dino.png' width="400" height="400" alt="Dino"/>
          </div>
        </div>
        <div className="section">
          <div>
              <Image src='/images/ultimate_connect_four.png' width="1000" height="665" alt="Connect 4"/>
          </div>
          <div />
          <div>
            <div className="header">
              <h1>Ultimate Connect 4</h1>
            </div>
            <p>
              A small multiplayer connect 4 game that was made for <a href="https://lancerhacks.com">Lancerhacks</a>
            </p>
            <p className="list">
              Github: <a href="https://github.com/lino-levan/ultimate-connect-four">https://github.com/lino-levan/ultimate-connect-four</a><br />
              No live demo due to lack of server :(
            </p>
          </div>
        </div>
        <div className="section">
          <div>
            <div className="header">
              <h1>Emoji Maker</h1>
            </div>
            <p>
              Make your own custom tweemoji style emojis!
            </p>
            <p className="list">
              Github: <a href="https://github.com/lino-levan/emojiMaker">https://github.com/lino-levan/emojiMaker</a><br />
              Demo: <a href="https://lino-levan.github.io/emojiMaker/">https://lino-levan.github.io/emojiMaker/</a><br />
            </p>
          </div>
          <div />
          <div>
            <Image src='/images/emoji_maker.png' width="1012" height="848" alt="Connect 4"/>
          </div>
        </div>
        <div>
          <div className="header">
            <h1>And More... (This page is still being built)</h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Elemental
