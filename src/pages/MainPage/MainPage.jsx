import tracksList from '../../assets/tracksList.js'
import Track from '../../components/Track/Track.jsx'
import style from './MainPage.module.scss'
const MainPage = () => {
  return (
    <div className={style.search}>
      <div>Поиск треков </div>
      <div className={style.list}>
        {tracksList.map((track) => (
          <Track
            key={track.id}
            src={track.src}
            preview={track.preview}
            duration={track.duration}
            title={track.title}
            artists={track.artists}
          />
        ))}
      </div>
    </div>
  )
}
export default MainPage
