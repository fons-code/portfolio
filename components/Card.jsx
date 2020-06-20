import '../assets/styles/components/Card.module.scss'

const Card = props => {
  const {title,badges,img} = props
  return(
  <div className="card">
    <div className="card-image">
      <img src={img} alt={title} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <div className="card-badge-container">
        {badges.map((badge) => (
            <div className="card-badge">
                <span>{badge}</span>
            </div>
        ))}
      </div>
    </div>
  </div>
);}

export default Card;
