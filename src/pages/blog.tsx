import React, { FC, useEffect, useState } from 'react'
import { Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import { IBlogProps, IPostProps } from '../ts/interfaces/Blog.interface'

const Blog: FC<IBlogProps> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <Layout>
      <Title order={1} mb={30}>
        Blog Posts
      </Title>
      <Article
        thumbnail="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"
        title="Front End Resources"
        categories={['Web Development', 'Design', 'HTML', 'CSS', 'JavaScript']}
        link="https://www.github.com/aycanogut/front-end-resources"
      />
      {isLoading ? (
        <CustomLoader />
      ) : (
        posts.items.map((post: IPostProps) => (
          <Article
            key={post.title}
            thumbnail={post.thumbnail}
            title={post.title}
            categories={post.categories}
            link={post.link}
          />
        ))
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut'
  )
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
