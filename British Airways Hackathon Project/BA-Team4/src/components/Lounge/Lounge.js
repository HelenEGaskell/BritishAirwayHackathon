import "../Checkin/Checkin.scss";
import lounge from "../../assets/images/LOUNGE.svg";

const Lounge = () => {
  return (
    <div className="checkin">
      <img className="checkin__image" src={lounge} alt="checkin" />
      <div className="checkin__text-box">
        <h2 className="checkin__header">Exclusive Lounge Access</h2>
        <ul className="checkin__ul">
          <li className="checkin__li">
            Elegant and exclusive departure lounges are available.
          </li>
          <li className="checkin__li">The lounges are stylish and spacious</li>
          <li className="checkin__li">
            Quality wines, drinks, and food are provided.
          </li>
          <li className="checkin__li">
            Business facilities are available for those who need to work on the
            go.
          </li>
          <li className="checkin__li">Collect 5 Avios per £1/€1/$1 spent</li>
        </ul>
      </div>
    </div>
  );
};

export default Lounge;
