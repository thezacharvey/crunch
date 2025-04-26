import xOut from "./assets/x_out.svg";

import "./css/ExclusionItems.css";
import { useState } from "react";

function XImg({ num }) {
  if (num == false) {
    return <></>;
  }
  return <img className="x-out" src={xOut} alt={"x out"} />;
}

export default function ExclusionItems() {
  const [wantsNuts, setWantsNuts] = useState(false);
  const [wantsDairy, setWantsDairy] = useState(false);
  const [wantsMeat, setWantsMeat] = useState(false);

  return (
    <>
      <div id="pref-item-descr">
        {" "}
        <h2>Click unwanted items</h2>{" "}
      </div>
      <div id="pref-container">
        <div
          className="pref-item"
          onClick={() => {
            setWantsNuts((wantsNuts) => !wantsNuts);
          }}
        >
          nuts
          <XImg num={wantsNuts} />
        </div>
        <div
          className="pref-item"
          onClick={() => {
            setWantsDairy((wantsDairy) => !wantsDairy);
          }}
        >
          dairy
          <XImg num={wantsDairy} />
        </div>
        <div
          className="pref-item"
          onClick={() => {
            setWantsMeat((wantsMeat) => !wantsMeat);
          }}
        >
          meat
          <XImg num={wantsMeat} />
        </div>
      </div>
    </>
  );
}
