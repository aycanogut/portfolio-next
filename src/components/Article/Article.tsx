import React, { FC } from 'react'
import {
  Card,
  Text,
  Group,
  Badge,
  Anchor,
  useMantineTheme,
} from '@mantine/core'

import CustomImage from '../CustomImage/CustomImage'

import useStyles from './Article.styles'

interface IArticleProps {
  thumbnail: string
  title: string
  link: string
  categories: [string, string, string, string, string]
}

const Article: FC<IArticleProps> = ({ thumbnail, title, link, categories }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const badges = categories.map((category: any, i) => (
    <Badge color={theme.colorScheme === 'dark' ? 'dark' : 'gray'} key={i}>
      {category}
    </Badge>
  ))

  return (
    <Card withBorder radius="md" p="xl" my={30} className={classes.card}>
      <Anchor className={classes.anchor} href={link} target="_blank">
        <Group className={classes.group}>
          <Card.Section>
            <CustomImage
              src={thumbnail}
              alt={title}
              width={200}
              height={100}
              objectFit="cover"
            />
          </Card.Section>
          <Text size="xl" weight={700} align="center" className={classes.text}>
            {title}
          </Text>
        </Group>
      </Anchor>
      <Card.Section>
        <Group spacing={10} m={20} className={classes.group}>
          {badges}
        </Group>
      </Card.Section>
    </Card>
  )
}

export default Article
