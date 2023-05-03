import VirtualTourHeader from "../../components/VirtualTourHeader/VirtaulTourHeader";
import DutyFree from "../../components/DutyFree/DutyFree";
import "./VirtualTour.scss";
import Button from "../../components/UpgradeNow/UpgradeNow";

import Checkin from "../../components/Checkin/Checkin";
import Swap from "../../components/Swap/Swap";
import Lounge from "../../components/Lounge/Lounge";

import { useState } from "react";

const VirtualTour = () => {
  const [section, setSection] = useState("Checkin");

  const swap = () => {
    if (section === "Checkin") {
      setSection("DutyFree");
    }
    if (section === "DutyFree") {
      setSection("Swap");
    }
  };

  if (section === "DutyFree") {
    return (
      <>
        <VirtualTourHeader />
        <DutyFree />
        <div className="virtual-tour__box">
          <Swap swap={swap} />
          <Button />
        </div>
      </>
    );
  }

  if (section === "Checkin") {
    return (
      <>
        {/* <VirtualTourHeader /> */}
        <Checkin />
        <Swap swap={swap} />
        <Button />
      </>
    );
  }

  if (section === "Swap") {
    return (
      <>
        <VirtualTourHeader />
        <Lounge />
        <Swap swap={swap} />
        <Button />
      </>
    );
  }

  return <></>;
};

export default VirtualTour;
