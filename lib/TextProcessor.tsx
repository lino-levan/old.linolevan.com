const linked: any = {
  "Lancerhacks": "https://lancerhacks.com",
  "ML5.js": "https://ml5js.org",
  "@Oleks": "https://github.com/OlexG",
  "@Gated": "https://gated.com",
  "@Madkudu": "https://madkudu.com",
}

const URLRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

// Solo chunks are pieces of a line that are chunked seperately because they are rendered using a custom element
function isSoloChunk(word: string) {
  return linked.hasOwnProperty(word) || word === "\n" || URLRegex.test(word)
}

function textProcessor(text: string) {
  let chunks = []

  // Step 1: get text chunks
  for(let lines of text.split("\n")) {
    for(let word of lines.split(" ")) {
      if(isSoloChunk(word)) {
        chunks.push(word)
      } else {
        if(chunks.length === 0) {
          chunks.push(word + " ")
        } else {
          if(isSoloChunk(chunks[chunks.length-1])) {
            chunks.push(" " + word + " ")
          } else {
            chunks[chunks.length-1] += word + " "
          }
        }
      }
    }

    chunks.push("\n")
  }

  let out = []

  // Step 2: make the text chunks into react elements
  for(let [i, chunk] of Object.entries(chunks)) {
    if(linked.hasOwnProperty(chunk)) {
      out.push(<a key={i} href={linked[chunk]} target="_blank" rel="noreferrer" className="inline bg-opacity-30 text-emerald-600 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-30">{`${chunk}`}</a>)
    } else if(URLRegex.test(chunk)) {
      out.push(<a key={i} href={chunk} target="_blank" rel="noreferrer" className="inline bg-opacity-30 text-emerald-600 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-30">{`${chunk}`}</a>)
    } else if(chunk === "\n") {
      out.push(<br key={i}/>)
    } else {
      out.push(<span key={i} className="inline">{`${chunk} `}</span>)
    }
  }

  return out
}

export default textProcessor