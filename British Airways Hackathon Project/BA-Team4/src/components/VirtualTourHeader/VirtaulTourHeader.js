import "./VirtualTourHeader.scss";
import logo from "../../assets/logo/BAlogo.svg";

const VirtualTourHeader = () => {
  return (
    <article className="virtual-tour-header">
      <div className="virtual-tour-header__stat">
        <h1 className="virtual-tour-header__header">Departure</h1>
        <p className="virtual-tour-header__text">15 days</p>
      </div>
      <div className="virtual-tour-header__stat">
        <h1 className="virtual-tour-header__header">CurrentPoints</h1>
        <p className="virtual-tour-header__text">30 000</p>
        <img className="virtual-tour-header__logo" src={logo} alt="logo" />
      </div>
      <div className="virtual-tour-header__stat">
        <h1 className="virtual-tour-header__header">Scheduled</h1>
        <p className="virtual-tour-header__text">10:15</p>
      </div>
    </article>
  );
};

export default VirtualTourHeader;
