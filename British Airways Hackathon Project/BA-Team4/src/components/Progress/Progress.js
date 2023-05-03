import "./Progress.scss";

const Progress = () => {
  return (
    <article className="progress">
      <div className="progress__bar">
        <div className="progress__bar-progress">
          <div className="progress__bar-dot"></div>
        </div>
      </div>
      <div className="progress__text-box">
        <p className="progress__text progress__text--current">Current Points</p>
        <p className="progress__text progress__text--upgrade">Upgrade</p>
      </div>
    </article>
  );
};

export default Progress;
