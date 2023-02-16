import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <img
          src="../public/images/red_cartoon.svg"
          alt="yellow smile"
          className="yellow-smile-1"
        />
        <img
          src="../public/images/cloud-big.svg"
          alt="cloud"
          className="big-cloud-1"
        />
        <img
          src="../public/images/cloud-big.svg"
          alt="cloud"
          className="big-cloud-2"
        />
        <img
          src="../public/images/cloud-small.svg"
          alt="cloud"
          className="small-cloud-1"
        />
        <img
          src="../public/images/cloud-big.svg"
          alt="cloud"
          className="big-cloud-3"
        />
        <img src="../public/images/Mask.svg" alt="globe" className="globe" />
        <img
          src="../public/images/red_cartoon3.svg"
          alt="red smile"
          className="big-red-smile"
        />
        <img
          src="../public/images/goodie1.svg"
          alt="yellow smile"
          className="yellow-smile-2"
        />
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
            rows="6"
            placeholder="Your message*"
          ></textarea>
          <button type="submit" className="form__btn">
            Send message
          </button>
        </form>
      </main>
      <footer className="footer">
        <img
          src="../public/images/red_cartoon3.svg"
          alt="red smile"
          className="footer__big-red-smile"
        />
        <img
          src="../public/images/red_cartoon.svg"
          alt="yellow smile"
          className="footer___yellow-smile"
        />
        <img
          src="../public/images/green.svg"
          alt="green smile"
          className="footer__green-smile"
        />
        <ul className="social-media-list">
          <li>
            <a href="https://www.instagram.com/">
              <img src="/public/icons/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src="/public/icons/twitter.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src="/public/icons/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <img src="/public/icons/pinterest.svg" alt="pinterest" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
