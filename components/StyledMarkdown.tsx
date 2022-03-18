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
      }
    }}>
      {children}
    </ReactMarkdown>
  )
}

export default StyledMarkdown