import { PlayArrow } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import secondsToMMSS from '../../utils/secondsToMMSS'
import style from './Track.module.scss'

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track
  const formattedDuration = secondsToMMSS(duration)
  return (
    <div className={style.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={style.preview} src={preview} alt="123" />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  )
}
//12
export default Track
