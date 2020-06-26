import Card from "../components/Card";

const Skills = () => (
  <section className="container is-fluid">
    <div className="background">
      <p className="bg-text">Skills</p>
    </div>
    <div className="content">
      
      <h1><hr/>Skills</h1>
      <div className="columns">
        <div className="column">
        <Card
          title="Frontend"
          badges={["ReactJS", "NextJS"]}
          img="/frontend-icon.svg"
        />
        <Card
          title="UI design"
          badges={["Figma", "AdobeXD"]}
          img="/design-icon.svg"
        />
        </div>
        <div className="column">
        <Card
          title="Backend"
          badges={["NodeJS", "Express"]}
          img="/backend-icon.svg"
        />
        <Card
          title="Databases"
          badges={["MongoDB", "MySQL"]}
          img="/database-icon.svg"
        />
        </div> 
      </div>
    </div>
  </section>
);
export default Skills;
