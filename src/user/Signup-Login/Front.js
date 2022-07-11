import React from "react";
import "./Front.css";

function Front() {
  return (
    <>
      <div id="back">
        <div id="B2" className="p-3 box col-md-5 card">
          <div className="toplayer mt-5">
            <div className="box-header with-border">
              <div className="text-center mb-2 mt-5"></div>
            </div>
            <div className="box-body login-box-msg mt-5">
              <h2 className="but">
                <strong>AdvanceCare</strong>
              </h2>
              <h6 className="mb-3 but2">
                <strong>Health Now </strong>
                <strong> Pay Later</strong>
              </h6>
              <section id="introduction mt-5">
                <p>
                  <i className="fas fa-arrow-down"></i> Please click or tap
                </p>
              </section>
              <div className="row mt-5">
                <div className="col-12">
                  <a
                    className="d-grid gap-2 btn btn-lg btn-primary btn-block btn-flat"
                    href="/Signup"
                  >
                    Get started
                  </a>
                  <br />
                </div>
              </div>
              <p>
                "Health Now, Pay Later" service called AdvanceCare! Access to
                health care remains a significant challenge due to financial
                constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
