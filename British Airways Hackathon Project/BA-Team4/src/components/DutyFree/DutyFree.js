import { useState } from "react";
import logo from "../../assets/logo/BAlogo2.svg";
import fortnum from "../../assets/logo/fortnummason.svg";
import john from "../../assets/logo/johlewis.svg";
import paul from "../../assets/logo/paulsmith.svg";
import "./DutyFree.scss";

const DutyFree = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  if (modal === true) {
    return (
      <>
        <article className="duty-free">
          <div className="duty-free__dot-box">
            <div onClick={modalHandler} className="duty-free__dot"></div>
            <div onClick={modalHandler} className="duty-free__dot"></div>
            <div onClick={modalHandler} className="duty-free__dot"></div>
          </div>
        </article>
        <div className="duty-free__modal">
          <article className="duty-free__modal-article">
            <div className="duty-free__brand">
              <img className="duty-free__brand-image" src={paul} alt="" />
            </div>
            <div className="duty-free__points">
              <img className="duty-free__logo" src={logo} alt="logo2" />
              <p className="duty-free__points-text"> 2 points per £1 spent</p>
            </div>
            <div className="duty-free__line-to duty-free__line-to--1"></div>
          </article>
          <article className="duty-free__modal-article">
            <div className="duty-free__brand">
              <img className="duty-free__brand-image" src={fortnum} alt="" />
            </div>
            <div className="duty-free__points">
              <img className="duty-free__logo" src={logo} alt="logo2" />
              <p className="duty-free__points-text"> 3 points per £1 spent</p>
            </div>
            <div className="duty-free__line-to duty-free__line-to--2"></div>
          </article>
          <article className="duty-free__modal-article">
            <div className="duty-free__brand">
              <img className="duty-free__brand-image" src={john} alt="" />
            </div>
            <div className="duty-free__points">
              <img className="duty-free__logo" src={logo} alt="logo2" />
              <p className="duty-free__points-text">5 points per £1 spent</p>
            </div>
            <div className="duty-free__line-to duty-free__line-to--3"></div>
          </article>
        </div>
      </>
    );
  }

  return (
    <article className="duty-free">
      <div className="duty-free__dot-box">
        <div onClick={modalHandler} className="duty-free__dot"></div>
        <div onClick={modalHandler} className="duty-free__dot"></div>
        <div onClick={modalHandler} className="duty-free__dot"></div>
      </div>
    </article>
  );
};

export default DutyFree;
