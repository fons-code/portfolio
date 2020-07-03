import Card from "../components/Card";

const Skills = () => (
  <section className="container is-fluid mb-5">
    <div className="background mobile-hidden">
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
          key="1"
        />
        <Card
          title="UI design"
          badges={["Figma", "AdobeXD"]}
          img="/design-icon.svg"
          key="2"
        />
        </div>
        <div className="column">
        <Card
          title="Backend"
          badges={["NodeJS", "Express"]}
          img="/backend-icon.svg"
          key="3"
        />
        <Card
          title="Databases"
          badges={["MongoDB", "MySQL"]}
          img="/database-icon.svg"
          key="4"
        />
        </div> 
      </div>
    </div>
  </section>
);
export default Skills;
