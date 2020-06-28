import Form from '../components/Form'
const Contact = () => {
  return (
    <section className="section">
      <div className="container-fluid">
        <h1>
          <hr/>
          Contact
        </h1>
        <div className="columns mt-5">
          <div className="column">
          <Form/>
          </div>
          <div className="column">
            <img className="image 32x32 mobile-hidden" src="./contacto.png" alt="contact"/>
          </div>
        </div> 
      </div>
    </section>
  );
};
export default Contact;