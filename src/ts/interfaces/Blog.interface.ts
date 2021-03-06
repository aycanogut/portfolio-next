export interface IBlogProps {
  posts: {
    feed: {}
    items: []
    status: string
  }
}

export interface IPostProps {
  thumbnail: string
  title: string
  link: string
  categories: any
  pubDate: string
}
