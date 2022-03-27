import { ReactNode } from "react"
import ReactMarkdown from "react-markdown"

function StyledMarkdown({children}: {children: string}) {
  return (
    <ReactMarkdown className='flex flex-col gap-5' components={{
      a({node, children, href, ...props}) {
        return <a href={href} target="_blank" rel="noreferrer" className='bg-opacity-30 text-emerald-600 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-30'>{children}</a>
      },
      li({node, children, ordered, index, ...props}) {
        if(ordered) {
          return <li>{index+1}. {children}</li>
        } else {
          return <li>- {children}</li>
        }
      },
      ul({node, children, ...props}) {
        return <ul className="ml-4">{children}</ul>
      },
      ol({node, children, ...props}) {
        return <ol className="ml-4">{children}</ol>
      },
      h1({node, children, ...props}) {
        return <h1 className="text-4xl">{children}</h1>
      },
      h2({node, children, ...props}) {
        return <h2 className="text-3xl">{children}</h2>
      },
      blockquote({node, children, ...props}) {
        return <blockquote className="border-l pl-4 italic">{children}</blockquote>
      },
      code({node, children, ...props}) { 
        return <code className="bg-slate-100 p-1 rounded shadow">{children}</code>
      },
      pre({node, children, ...props}) {
        let raw = (children?.[0] as any)?.props?.children?.[0]
        return <pre className="bg-slate-100 p-1 rounded shadow overflow-auto">{raw?raw:children}</pre>
      },
      img({node, children, src, alt, ...props}) {
        // className="h-full w-full object-contain"
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src?.includes("https")?src:("/posts"+src)} alt={alt}  />
      },
    }}>
      {children}
    </ReactMarkdown>
  )
}

export default StyledMarkdown