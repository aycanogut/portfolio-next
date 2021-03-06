// https://github.com/leerob/leerob.io/blob/main/pages/api/top-tracks.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { getTopTracks } from '../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items
    .slice(0, 10)
    .map(
      (track: { artists: any[]; external_urls_spotify: any; name: any }) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls_spotify,
        title: track.name,
      })
    )

  res.setHeader(
    'Cache-Control',
    'public, s-maxage-86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks })
}
