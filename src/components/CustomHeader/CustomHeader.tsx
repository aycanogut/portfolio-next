import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'
import { ICustomHeaderProps } from '../../ts/interfaces/CustomHeader.interface'
import useStyles, { HEADER_HEIGHT } from './CustomHeader.styles'

const CustomHeader = ({ links }: ICustomHeaderProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()
  const router = useRouter()

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      <a
        tabIndex={0}
        role="link"
        className={cx(
          classes.link,
          router.pathname === link.link ? classes.linkActive : ''
        )}
        onClick={() => {
          setActive(link.link)
          toggleOpened(false)
        }}
        onKeyDown={undefined}
      >
        {link.label}
      </a>
    </Link>
  ))

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="md"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <ColorSchemeToggle />
      </Container>
    </Header>
  )
}

export default CustomHeader
