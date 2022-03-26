import { ReactNode } from "react"
import ReactMarkdown from "react-markdown"

function StyledMarkdown({children}: {children: string}) {
  return (
    <ReactMarkdown className='flex flex-col gap-5' components={{
      a({node, children, href, ...props}) {
        return <a href={href} target="_blank" rel="noreferrer" className='bg-opacity-30 text-emerald-600 bg-emerald-300 hover:bg-emerald-400 hover:bg-opacity-30'>{children}</a>
      },
      li({node, children, ...props}) {
        return <li>- {children}</li>
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
        return <pre className="bg-slate-100 p-1 rounded shadow">{raw?raw:children}</pre>
      },
    }}>
      {children}
    </ReactMarkdown>
  )
}

export default StyledMarkdown