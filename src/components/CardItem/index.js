import './index.css'
// Write your code here.
const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  const containerClassName = `card-details ${className}`

  return (
    <li className={containerClassName}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image-card">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
