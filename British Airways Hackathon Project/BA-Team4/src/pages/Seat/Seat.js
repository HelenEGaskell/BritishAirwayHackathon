import "./Seat.scss";
import logo from "../../assets/logo/BAlogo.svg";
import Chair from "../../assets/images/Chair.svg";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Seat = () => {
  return (
    <>
      <Header />
      <main>
        <section className="seat">
          <img src={logo} alt="" />
        </section>
        <section className="seat__main">
          <img className="seat__image" src={Chair} alt="" />
          <div>
            <h2 className="seat__title">Club World </h2>
          </div>
          <div>
            <h3 className="seat__sub-title">A better night’s sleep</h3>
            <ul className="seat__info-box">
              <li className="seat__info">
                A spacious seat, which converts into a 183cm (6ft) fully flat
                bed
              </li>
              <li className="seat__info">
                Fully adjustable headrest and lumbar support
              </li>
              <li className="seat__info">
                12" flat screen noise-cancelling headphones to enjoy our
                in-flight entertainment
              </li>
              <li className="seat__info">
                Stylish bedding and amenity kits designed by The White Company
              </li>
            </ul>
          </div>
          <Link to="/dining" className="seat__button">
            <p className="seat__button-text">Explore further</p>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Seat;
