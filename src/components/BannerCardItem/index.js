import './index.css'
// Write your code here.
const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  //   console.log(key) // undefined

  return (
    <div className="card-details-container">
      <li className={className}>
        <h1 className="card-heading"> {headerText} </h1>
        <p className="card-description"> {description} </p>
        <button>Show More</button>
      </li>
    </div>
  )
}
export default BannerCard
