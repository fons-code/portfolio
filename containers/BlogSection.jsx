import BlogCard from '../components/Blog-card'
import { getPosts } from "../api/posts";

const BlogSection = (props) => {
  console.log(props)
  return (
    <div className="blog-section">
      <h2 className="blog-section__title">Saludos!! Bienvenido al blog.</h2>
      <div className="blog-section__subtitle">
        <p>
          Disfruto mucho aprendiendo sobre las cosas que me apasionan todos los
          dias y en este espacio compartire articulos sobre tecnologia,
          videojuegos, diseno y mas!
        </p>
        <p>
          Si te interesa la programacion estas en buen lugar! espero que el
          contenido te sea de ayuda
        </p>
      </div>

      <h2 className="blog-section__title"><hr className="center"/>Ultimos posts</h2>
      <div className="container">
          <div className="column">
          {props.posts.map((post)=>{
            return(
              <a><BlogCard 
                  key={post.id} 
                  title={post.title}
                  image={post.feature_image}
              /></a>
            )
          })} 
          </div>
      </div>          
    </div>
  );
};

BlogSection.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default BlogSection;
