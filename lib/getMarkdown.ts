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

export interface IUpdate {
  content: string
  date: string
}

const postsDirectory = path.join(process.cwd(), 'public/posts')
const updatesDirectory = path.join(process.cwd(), 'public/updates')

export function getUpdates() {
  const fileNames = fs.readdirSync(updatesDirectory)
  const allUpdatesData = fileNames.filter(fileName => fileName.endsWith(".md")).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(updatesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult
    }
  })

  return allUpdatesData.map(post => ({
    content: post.content,
    date: post.data.date,
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}


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
