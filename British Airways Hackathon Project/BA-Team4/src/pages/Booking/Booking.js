import "./Booking.scss";
import singapore from "../../assets/images/singapore.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Booking = () => {
  return (
    <>
      <Header />
      <main className="booking">
        <img className="booking__img" src={singapore} alt="" />
        <h2 className="booking__title">
          Shannon, your next flight with us is to Singapore
        </h2>

        <section className="booking__button">
          <p className="booking__details">Your flight details</p>
        </section>
        <p className="booking__date">
          BA 0098 departing Tuesday 4 April from Heathrow &#40;London&#41;
          Terminal 5
        </p>
        <section className="booking__box">
          <div>
            <h3 className="booking__sub-title">Departure</h3>
            <p className="booking__sub-text">20 days</p>
          </div>
          <div>
            <h3 className="booking__sub-title">Scheduled</h3>
            <p className="booking__sub-text">10:15</p>
          </div>
          <div>
            <h3 className="booking__sub-title">Status</h3>
            <p className="booking__sub-text">--</p>
          </div>
        </section>
        <section className="booking__upgrade-box">
          <div className="booking__upgrade-wrap">
            <Link to="/seat" className="booking__button-upgrade">
              <p className="booking__upgrade">Upgrade</p>
            </Link>
            <div className="booking__notification"></div>
          </div>
          <div className="booking__seat-box">
            <h3 className="booking__title-seat">Seat</h3>
            <p className="booking__seat">--</p>
          </div>
        </section>
        <section className="booking__avios-box">
          <p className="booking__text">Avios points with upgrade</p>
          <p className="booking__avios">10,000</p>
        </section>
        <section className="booking__details-box">
          <a className="booking__what">
            See what 10,000 Avios points can give you
          </a>
        </section>
      </main>
    </>
  );
};

export default Booking;
