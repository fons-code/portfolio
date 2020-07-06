import { getPosts } from "../api/posts";
import Navbar from "../components/Navbar";
import BlogSection from '../containers/BlogSection'
import Footer from '../components/Footer'

const Blog = (props) => {
  return (
    <>
      <Navbar />
      <BlogSection posts={props.posts}/>
      <Footer/>
    </>
  );
};

Blog.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts };
  };

export default Blog;
