import BannerCard from './components/BannerCardItem/index'
import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="list-container">
    {/* <BannerCard
      text={bannerCardsList[0].headerText}
      description={bannerCardsList[0].description}
      className={bannerCardsList[0].className}
    /> */}
    <ul>
      {bannerCardsList.map(eachItem => (
        <BannerCard bannerDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  </div>
)

export default App
