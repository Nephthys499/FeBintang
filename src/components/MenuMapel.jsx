import React from "react";
import math from "../assets/think.png";
import ipa from "../assets/microscope.png";
import bi from "../assets/open-book.png";
const MenuMapel = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <h2>
          <span>Mata </span>Pelajaran
        </h2>
        <div class="container1">
          <div class="row">
            <img src={math} alt="" />
            <h3>Matematika</h3>
          </div>
          <div class="row">
            <img src={ipa} alt="" />
            <h3>IPA</h3>
          </div>
          <div class="row">
            <img src={bi} alt="" />
            <h3>Bahasa Indonesia</h3>
          </div>
          <div class="row">
            <h3>lorem</h3>
          </div>
          <div class="row">
            <h3>lorem</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuMapel;
