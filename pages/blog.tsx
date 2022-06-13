import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import StyledMarkdown from '../components/StyledMarkdown';
import { getPosts, IPost } from '../lib/getMarkdown';
import textProcessor from '../lib/TextProcessor';

const Blog: NextPage = (props: any) => {

  let posts: [string, IPost][] = Object.entries(props.posts)
  
  return (
    <>
      <Head>
        <title>Lino Le Van</title>
        <meta name="description" content="A list of my blog posts" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Header />
        <div className="flex justify-center items-center py-28 px-6">
          <div>
            {
              posts.sort((a, b)=>new Date(b[1].date).getTime() - new Date(a[1].date).getTime()).map(([key, post], index)=>(
                <div key={key} className={`flex gap-x-10 py-3 ${index < posts.length - 1 ? "border-b-slate-200 border-b" : ""}`}>
                  <p className=' text-slate-400 w-10'>{post.date}</p>
                  <div className='max-w-md'>
                    <h1 className='text-2xl text-emerald-500'><a href={`/blog/${key}`}>{post.title}</a></h1>
                    <h2 className='text-md text-emerald-700'>{post.tags.map(tag=>`#${tag}`).join(" ")}</h2>
                    <StyledMarkdown>{post.post.split("\n")[0]}</StyledMarkdown>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts
    },
  }
}