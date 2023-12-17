import style from './MainPage.module.scss'
import tracksList from '../../assets/tracksList.js'
const MainPage = () => {
	return <div className={style.search}>
		<div>Поиск треков </div>
		<div className={style.list}>
			{tracksList.map((track) => <div>{JSON.stringify(track)}</div> )}
		</div>
	</div>
}
export default MainPage
