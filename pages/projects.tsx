import { NextPage } from "next"
import { GoLink, GoMarkGithub } from "react-icons/go";
import Head from "next/head"
import Image from 'next/image'
import Header from "../components/Header"

// https://hypercolor.dev

function generateParts(text: string) {
  const linked: any = {
    "Lancerhacks": "https://lancerhacks.com",
    "ML5.js": "https://ml5js.org",
    "@Oleks": "https://github.com/OlexG",
  }

  let out = []

  for(let word of text.split(" ")) {
    if(linked.hasOwnProperty(word)) {
      out.push(<a href={linked[word]} target="_blank" rel="noreferrer" className="inline bg-opacity-30 text-emerald-600 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-30">{`${word} `}</a>)
    } else {
      out.push(<p className="inline">{`${word} `}</p>)
    }
  }
  return out
}

interface IProject {
  name: string
  description: string
  image: string
  github?: string
  demo?: string
  gradient: string
}

const Elemental: NextPage = () => {

  const projects: IProject[] = [
    {
      name: "Pintform",
      description: "The world's first form service that works for you. Make beautiful forms quickly, with all of the power and flexibility you'll ever need.",
      image: "/screenshots/pintform.png",
      demo: "https://pintform.com",
      gradient: "from-yellow-200 via-gray-50 to-teal-100"
    },
    {
      name: "Smoll Physics",
      description: "A small, unstable physics engine built to test my physics ability.",
      image: "/screenshots/smoll_physics.png",
      github: "https://github.com/lino-levan/smoll-physics",
      demo: "https://lino-levan.github.io/smoll-physics",
      gradient: "from-indigo-200 via-red-200 to-yellow-100"
    },
    {
      name: "Dungeon Crawler",
      description: "A quote unquote game, that is really just a demo for a physics engine.",
      image: "/screenshots/dungeon_crawler.png",
      github: "https://github.com/lino-levan/dungeonCrawler",
      demo: "http://dungeon.linolevan.com:8080",
      gradient: "from-rose-200 via-fuchsia-300 to-indigo-200"
    },
    {
      name: "Dinosaur Game ML",
      description: "A small ML5.js demo to show off the power of ML on the web.",
      image: "/screenshots/dinosaur_game_ml.png",
      github: "https://github.com/lino-levan/dinosaurGameML",
      demo: "https://lino-levan.github.io/dinosaurGameML/",
      gradient: "from-red-200 via-red-300 to-yellow-200"
    },
    {
      name: "Browser OS",
      description: "A demonstration of how powerful modern browsers have become. Probably works best with chrome.",
      image: "/screenshots/browser_os.png",
      github: "https://github.com/lino-levan/browserOS",
      demo: "https://lino-levan.github.io/browserOS/",
      gradient: "from-yellow-100 to-red-100"
    },
    {
      name: "Ultimate Connect Four",
      description: "A small multiplayer connect 4 game that was made for Lancerhacks",
      image: "/screenshots/ultimate_connect_four.png",
      github: "https://github.com/lino-levan/ultimate-connect-four",
      gradient: "from-green-200 via-blue-400 to-purple-500"
    },
    {
      name: "Elemental 5",
      description: "The continuation of Elemental 3 by Carykh and Elemental 4 by Dave. A solid demonstration of the idea of a fullstack project. An amazing demo project to check someone's skill. Video explaining history of the game coming soon.",
      image: "/screenshots/elemental.png",
      demo: "https://dev.elemental5.net",
      gradient: "from-yellow-200 via-emerald-200 to-yellow-200"
    },
    {
      name: "Emoji Maker",
      description: "Make your own custom tweemoji style emojis!",
      image: "/screenshots/emoji_maker.png",
      github: "https://github.com/lino-levan/emojiMaker",
      demo: "https://lino-levan.github.io/emojiMaker/",
      gradient: "from-green-300 via-yellow-300 to-pink-300"
    },
    {
      name: "Geoms.io",
      description: "My first io-style game! Made with @Oleks",
      image: "/screenshots/geoms.png",
      demo: "http://geoms.linolevan.com:42069",
      gradient: "from-red-200 via-gray-300 to-blue-300"
    },
  ]


  return (
    <div>
      <Head>
        <title>Smaller Projects</title>
        <meta name="description" content="A list of my smaller projects" />
      </Head>

      <Header />
      <main className="py-28 flex flex-col items-center max-w-full">
        {
          projects.map((project)=> (
            <div key={project.name} className={`rounded-xl mt-6 p-6 bg-gradient-to-tr max-w-2xl shadow-lg ${project.gradient}`}>
              <div className="p-2">
                <Image src={project.image} width={2880} height={1800} alt={project.name} className="rounded-md"/>
              </div>
              <div>
                <h1 className="text-2xl">
                  {project.name}
                  {
                    project.demo?
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <GoLink className="inline-block ml-2 cursor-pointer opacity-30 hover:opacity-90"/>
                    </a>
                    : null
                  }
                  {
                    project.github?
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GoMarkGithub className="inline-block ml-2 cursor-pointer opacity-30 hover:opacity-90"/>
                    </a>
                    : null
                  }
                </h1>
                <p>{generateParts(project.description)}</p>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}

export default Elemental