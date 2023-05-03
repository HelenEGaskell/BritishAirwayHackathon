import checkin from "../../assets/images/Fram11.svg";
import "./Checkin.scss";

const Checkin = () => {
  return (
    <div className="checkin">
      <img className="checkin__image" src={checkin} alt="checkin" />
      <div className="checkin__text-box">
        <h2 className="checkin__header">Dedicated check-in desks</h2>
        <ul className="checkin__ul">
          <li className="checkin__li">
            Your own dedicated Club World check-in desk at most airports
          </li>
          <li className="checkin__li">Fast Track security</li>
          <li className="checkin__li">Priority boarding</li>
        </ul>
      </div>
    </div>
  );
};

export default Checkin;
