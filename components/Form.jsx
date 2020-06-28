const Form = () => (
    <div className="container card p-3 background-black">
        <form>
    <div class="field">
      <label class="label text-white center">Email:</label>
      <div class="control">
        <input class="input" type="email" placeholder="Email" />
      </div>
    </div>
    <div class="field">
      <label class="label text-white center">Subject:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Subject" />
      </div>
    </div>
    <div class="field">
      <label class="label text-white center">Message:</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
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