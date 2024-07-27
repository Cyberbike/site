const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
