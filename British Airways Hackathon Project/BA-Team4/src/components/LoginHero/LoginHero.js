import { Link } from "react-router-dom";
import "./LoginHero.scss";

const LoginHero = ({ changeName, name, submitForm }) => {
  return (
    <div class="login-hero">
      <h1 className="login-hero__header">My account</h1>
      <form onSubmit={submitForm} className="login-hero__form">
        <input
          onChange={(e) => changeName(e.target.value)}
          placeholder="Name"
          className="login-hero__input"
          type="text"
          value={name}
        />
        <input
          placeholder="Password"
          className="login-hero__input"
          type="password"
        />
        <div className="login-hero__div">
          <p className="login-hero__checkbox-text">Stay signed in</p>
        </div>
        <Link to="/booking" className="login-hero__div">
          <button type="submit" class="login-hero__button">
            Log in
          </button>
        </Link>
      </form>
      <div className="login-hero__div">
        <p className="login-hero__text">Forgotten Password</p>
      </div>
      <div className="login-hero__register">
        <p className="login-hero__register__text">Register</p>
      </div>
    </div>
  );
};

export default LoginHero;
