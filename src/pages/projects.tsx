import { useState, useEffect } from 'react'
import { Title } from '@mantine/core'
import { projects } from '../helpers/projectsDummyData'
import Layout from '../components/Layout/Layout'
import Project from '../components/Project/Project'

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <Layout>
      <Title order={1} mb={30}>
        Projects
      </Title>
      {projects.map((project) => (
        <Project
          id={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          stack={project.stack}
          github={project.github}
          vercel={project.vercel}
        />
      ))}
    </Layout>
  )
}

export default Projects
