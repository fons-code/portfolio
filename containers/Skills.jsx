import Card from '../components/Card'
import '../assets/styles/containers/Skills.module.scss'

const Skills = () => (
    <section className="skills">
      <div className="background">
        <p className="bg-text">Skills</p>
      </div>
      <div className="content">
        <hr />
        <h1>Skills</h1>
        <div className="skills__cards-container">
          <Card 
            title='Frontend' 
            badges = {['ReactJS', 'NextJS']}
            img='/frontend-icon.svg'
          />
          <Card 
            title='UI design' 
            badges = {['Figma', 'AdobeXD']}
            img='/design-icon.svg'
          />
          <Card 
            title='Backend' 
            badges = {['NodeJS', 'Express']}
            img='/backend-icon.svg'
          />
          <Card 
            title='Databases' 
            badges = {['MongoDB', 'MySQL']}
            img='/database-icon.svg'
          />
        </div>  
      </div>
    </section>
)
export default Skills;