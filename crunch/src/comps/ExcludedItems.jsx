import xOut from "../assets/x_out.svg";
import logo from "../assets/main_site_logo.svg";
import "../css/ExclusionItems.css";
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
      <div id="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div id="main-desc-container">
        <p id="main-desc">Just Recipes...</p> <p id="main-desc2"> No Bs.</p>
      </div>

      <div id="pref-item-descr">Select allerges</div>
      <div id="pref-container">
        <div
          className="pref-item"
          onClick={() => {
            setWantsNuts((wantsNuts) => !wantsNuts);
          }}
        >
          <h3 className="click_able">nuts</h3>
          <XImg num={wantsNuts} />
        </div>
        <div
          className="pref-item"
          onClick={() => {
            setWantsDairy((wantsDairy) => !wantsDairy);
          }}
        >
          <h3 className="click_able">dairy</h3>
          <XImg num={wantsDairy} />
        </div>
        <div
          className="pref-item"
          onClick={() => {
            setWantsMeat((wantsMeat) => !wantsMeat);
          }}
        >
          <h3 className="click_able">meat</h3>
          <XImg num={wantsMeat} />
        </div>
      </div>
    </>
  );
}
