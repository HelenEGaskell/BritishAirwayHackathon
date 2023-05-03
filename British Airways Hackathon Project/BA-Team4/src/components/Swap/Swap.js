import "./Swap.scss";

const Swap = ({ swap }) => {
  return (
    <div onClick={swap} className="swap">
      <div className="swap__button"></div>
      <div className="swap__button"></div>
      <div className="swap__button"></div>
    </div>
  );
};

export default Swap;
