const Form = () => (
    <div className="container card p-3 background-black">
        <form>
    <div className="field">
      <label className="label text-white center">Email:</label>
      <div className="control">
        <input className="input" type="email" placeholder="Email" />
      </div>
    </div>
    <div className="field">
      <label className="label text-white center">Subject:</label>
      <div className="control">
        <input className="input" type="text" placeholder="Subject" />
      </div>
    </div>
    <div className="field">
      <label className="label text-white center">Message:</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
    <div className="buttons mt-4">
        <div className="button is-medium form-buttons">Clean</div>
        <button className="button button-primary is-medium form-buttons">Send</button>
    </div>
  </form>
    </div>
)

export default Form;