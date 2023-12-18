import { Input } from '@mui/material'
import { useState } from 'react'
import tracksList from '../../assets/tracksList.js'
import Track from '../../components/Track/Track.jsx'
import style from './MainPage.module.scss'
const runSearch = (query) => {
  if (!query) {
    return tracksList
  }
}

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList)
  const handleChange = (event) => {
    // Получаю при вводе в инпут результат в log.
    console.log(event.target.value)
  }

  return (
    <div className={style.search}>
      <Input className={style.input} placeholder="Track search" onChange={handleChange} />
      <div className={style.list}>
        {tracks.map(
          (
            track, //Мапим компоненту трек.
          ) => (
            <Track
              key={track.id}
              src={track.src}
              preview={track.preview}
              duration={track.duration}
              title={track.title}
              artists={track.artists}
            />
          ),
        )}
      </div>
    </div>
  )
}
export default MainPage
