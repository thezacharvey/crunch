import xOut from "./assets/x_out.svg";

import "./css/ExclusionItems.css";
import { useState } from "react";

export default function ExclusionItems() {
  const exclusions = {
    nuts: false,
    dairy: false,
    meat: false,
  };

  return (
    <>
      <div id="pref-item-descr">Exclusion </div>
      <div id="pref-container">
        <div className="pref-item">
          nuts <img className="x-out" src={xOut} alt={"x out"} />{" "}
        </div>
        <div className="pref-item">
          dairy <img className="x-out" src={xOut} alt={"x out"} />
        </div>
        <div className="pref-item">
          meat
          <img className="x-out" src={xOut} alt={"x out"} />
        </div>
      </div>
    </>
  );
}
