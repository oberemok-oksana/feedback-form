import "./App.css";

function App() {
  return (
    <>
      <main className="main-section">
        <h1 className="title">Reach out to us</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Your name*"
            name="user-name"
            className="form__input"
          />
          <input
            type="email"
            placeholder="Your e-mail*"
            name="user-email"
            className="form__input"
          />
          <textarea
            className="form__textarea"
            name="user-text"
            id="user-text"
            cols="30"
            rows="10"
            placeholder="Your message*"
          ></textarea>
          <button type="submit" className="form__btn">
            Send message
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
