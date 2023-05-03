import "./Dining.scss";
import logo from "../../assets/logo/BAlogo.svg";
import food from "../../assets/images/food.png";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Dining = () => {
  return (
    <>
      <Header />
      <main>
        <section className="dining">
          <img src={logo} alt="" />
        </section>
        <section className="dining__main">
          <img className="dining__image" src={food} alt="" />
          <div>
            <h2 className="dining__title">Club World </h2>
          </div>
          <div>
            <h3 className="dining__sub-title">Delicious global cuisine</h3>
            <p className="dining__info">
              You can choose your main course, served with starter, dessert and
              cheese. Our signature afternoon tea features on some routes.
              During your flight we serve you with snacks and a choice of hot
              and cold drinks, wines and spirits.
            </p>
          </div>
          <Link to="/virtualexperience" className="dining__button">
            <p className="dining__button-text">Explore further</p>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Dining;
