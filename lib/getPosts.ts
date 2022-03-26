import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface IPost {
  title: string
  date: string
  image?: string
  iframe?: string
  post: string
  tags: string[]
}

const postsDirectory = path.join(process.cwd(), 'public/posts')

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.filter(fileName => fileName.endsWith(".md")).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult
    }
  })

  let out: any = {}

  for(let post of allPostsData) {
    // Process fileContents
    if(!post.data.hidden) {
      out[post.id] = {
        title: post.data.title,
        date: post.data.date,
        post: post.content,
        tags: post.data.tags
      }
    }
  }

  return out
}
