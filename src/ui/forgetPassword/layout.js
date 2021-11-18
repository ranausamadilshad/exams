/** @format */

import React from "react";
import top from "../../assets/img/top.png";
import bottom from "../../assets/img/bottom.png";
import background from "../../assets/img/form-background.png";

const ForgetPasswordScreen = () => {
  return (
    <>
      <main className="main" id="main">
        <section className="py-0">
          <div className="container">
            <div className="min-vh-100 flex-center no-gutters row">
              <div className="col-xxl-5 py-3 col-lg-8">
                <img
                  className="bg-auth-circle-shape"
                  src={top}
                  alt="sbsb"
                  width="250"
                />
                <img
                  className="bg-auth-circle-shape-2"
                  src={bottom}
                  alt="nsns"
                  width="150"
                />
                <div className="overflow-hidden z-index-1 card">
                  <div className="p-0 card-body">
                    <div className="h-100 no-gutters row">
                      <div className="text-white text-center bg-card-gradient col-md-5">
                        <div className="position-relative p-4 pt-md-5 pb-md-7">
                          <div
                            className="bg-holder bg-auth-card-shape"
                            style={{ backgroundImage: `url(${background})` }}
                          ></div>
                          <div className="z-index-1 position-relative">
                            <a
                              className="text-white mb-4 text-sans-serif font-weight-extra-bold fs-4 d-inline-block"
                              href="/shhs"
                            >
                              falcon
                            </a>
                            <p className="text-100">
                              With the power of Falcon, you can now focus only
                              on functionaries for your digital products, while
                              leaving the UI design on us!
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 mb-4 mt-md-4 mb-md-5">
                          <p className="mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300">
                            Read our
                            <a className="text-underline text-300" href="#shhs">
                              terms
                            </a>{" "}
                            and{" "}
                            <a
                              className="text-underline text-300"
                              href="#!sbbs"
                            >
                              conditions{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-md-7">
                        <div className="p-4 p-md-5 flex-grow-1">
                          <h4 className="mb-0"> Forgot your password?</h4>
                          <p className="mb-0">
                            Enter your email and we'll send you a reset link.
                          </p>
                          <form className="mt-4">
                            <div className="form-group">
                              <input
                                placeholder="Email address"
                                type="email"
                                className="form-control form-control"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <button className="btn btn-primary btn-block ">
                                Send reset link
                              </button>
                            </div>
                            <a className="fs--1 text-600" href="#!">
                              I can't recover my account using this page
                              <span className="d-inline-block ml-1">→</span>
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgetPasswordScreen;
