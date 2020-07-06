import PortfolioItem from '../components/PortfolioItem'

const Projects = () => (
    <section className="projects container is-fluid">
        <h1><hr/>Lastest projects</h1>
        <div className="projects-container mt-5 p-5 columns">
            <div className="project-card column">
            <PortfolioItem/>                
            </div>
            <div className="project-card column">
            <PortfolioItem/>    
            </div>
        </div>
    </section>
)
export default Projects;