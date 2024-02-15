import React from "react";
import math from "../assets/Math1.jpg";
import ipa from "../assets/microscope.png";
import bi from "../assets/open-book.png";
const MenuMapel = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h2>
          <span>Mata </span>Pelajaran
        </h2>
        <div className="container3">
          <div className="mapel1">
            <div className="gambar">
              <img src={math} alt="" />
            </div>
            <div className="text">
              <h2>Matematika</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate rerum et tempore corrupti dolore saepe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuMapel;
