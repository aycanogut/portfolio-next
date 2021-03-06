import { Container, Group, ActionIcon, Footer } from '@mantine/core'
import {
  BrandGithub,
  BrandLinkedin,
  BrandMedium,
  BrandTwitter,
} from 'tabler-icons-react'
import useStyles from './CustomFooter.styles'

const CustomFooter = () => {
  const { classes } = useStyles()

  return (
    <Footer className={classes.footer} height="">
      <Container className={classes.inner}>
        <Group className={classes.links} position="center" noWrap>
          <a
            href="https://www.github.com/aycanogut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandGithub size={32} aria-label="Github Icon" />
            </ActionIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/aycanogut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandLinkedin size={32} aria-label="LinkedIn Icon" />
            </ActionIcon>
          </a>
          <a
            href="https://medium.com/@aycanogut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandMedium size={32} aria-label="Medium Icon" />
            </ActionIcon>
          </a>
          <a
            href="https://twitter.com/bleedeleventh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandTwitter size={32} aria-label="Twitter Icon" />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </Footer>
  )
}

export default CustomFooter
