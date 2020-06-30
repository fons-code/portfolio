const BlogCard = ({title,image}) =>{
    return(
      <div className="blog__card card center round">
      <img className="blog-card__image" src={image} alt=""/>
      <div className="blog-card__content">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, sunt nihil. Esse libero inventore velit.</p>  
      </div>    
      </div>
    )
}
export default BlogCard;