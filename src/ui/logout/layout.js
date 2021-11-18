/** @format */

import React from "react";
import rocket from "../../assets/img/rocket.png";
import top from "../../assets/img/top.png";
import bottom from "../../assets/img/bottom.png";
import background from "../../assets/img/form-background.png";

const LogoutScreen = () => {
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
                  alt=""
                  width="250"
                />
                <img
                  className="bg-auth-circle-shape-2"
                  src={bottom}
                  alt=""
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
                              href="/"
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
                            <a className="text-underline text-300" href="#">
                              terms
                            </a>{" "}
                            and{" "}
                            <a className="text-underline text-300" href="#!">
                              conditions{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-md-7">
                        <div className="p-4 p-md-5 flex-grow-1">
                          <div className="text-center">
                            <img
                              className="d-block mx-auto mb-4"
                              src={rocket}
                              alt="shield"
                              width="70"
                            />
                            <h3>See you again!</h3>
                            <p>
                              Thanks for using Falcon. You are{" "}
                              <br className="d-none d-sm-block" />
                              now successfully signed out.
                            </p>
                            <a className="mt-3 btn btn-primary btn-sm" href="#">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="chevron-left"
                                className="svg-inline--fa fa-chevron-left fa-w-10 mr-1"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                style={{ transformOrigin: "0.3125em 0.5625em" }}
                              >
                                <g transform="translate(160 256)">
                                  <g transform="translate(0, 32)  scale(0.75, 0.75)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                                      transform="translate(-160 -256)"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              Return to Login
                            </a>
                          </div>
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

export default LogoutScreen;
