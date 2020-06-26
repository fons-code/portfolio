const Card = props => {
  const {title,badges,img} = props
  return(
  <div className="skillcard">
    <div className="skillcard-image">
      <img src={img} alt={title} />
    </div>
    <div className="skillcard-content">
      <h3>{title}</h3>
      <div className="skillcard-badge-container">
        {badges.map((badge) => (
            <div className="skillcard-badge">
                <span>{badge}</span>
            </div>
        ))}
      </div>
    </div>
  </div>
);}

export default Card;
