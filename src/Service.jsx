import React from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div class="container">
          <div class="row gy-5">
            <div class="col-md">
              <div class="p-5">
                <h1>
                  Watch Top Sitcoms on
                  <strong className="brand-name"> Neflix</strong>
                </h1>
                <h2 className="my-3">Netflix and Chill!</h2>
                <div className="mt-3">
                  <NavLink to="/netflix" className="btn-get-started">
                    Watch Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="p-5">
                <h1>
                  Watch Top Sitcoms on
                  <strong className="brand-name"> Prime</strong>
                </h1>
                <h2 className="my-3">Watch Sitcoms Online here!</h2>
                <div className="mt-3">
                  <NavLink to="/prime" className="btn-get-started">
                    Watch Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
