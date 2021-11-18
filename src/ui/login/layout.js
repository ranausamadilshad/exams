/** @format */

import React from "react";
import background from "../../assets/img/form-background.png";
import top from "../../assets/img/top.png";
import bottom from "../../assets/img/bottom.png";

const LoginScreen = () => {
  return (
    <>
      <main className="main" id="main">
        <section className="py-0">
          <div className="container-fluid">
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
                          <p>
                            Don't have an account?
                            <br />
                            <a className="text-white text-underline" href="#!">
                              Get started!
                            </a>
                          </p>
                          <p className="mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300">
                            Read our
                            <a className="text-underline text-300" href="#!">
                              terms
                            </a>{" "}
                            and{" "}
                            <a
                              className="text-underline text-300"
                              href="/login#!"
                            >
                              conditions{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center col-md-7">
                        <div className="p-4 p-md-5 flex-grow-1">
                          <h3>Account Login</h3>
                          <form className="">
                            <div className="form-group">
                              <label className="">Email address</label>
                              <input
                                placeholder=""
                                type="email"
                                className="form-control"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label className="">Password</label>
                              <input
                                placeholder=""
                                type="password"
                                className="form-control"
                                value=""
                              />
                            </div>
                            <div className="justify-content-between align-items-center row">
                              <div className="col-auto">
                                <div className="custom-checkbox custom-control">
                                  <input
                                    id="customCheckRemember"
                                    type="checkbox"
                                    className="custom-control-input"
                                    checked=""
                                  />
                                  <label
                                    className="custom-control-label"
                                    for="customCheckRemember"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <div className="col-auto">
                                <a
                                  className="fs--1"
                                  href="/authentication/card/forget-password"
                                >
                                  Forget Password?
                                </a>
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                disabled=""
                                className="mt-3 btn btn-primary btn-block disabled"
                              >
                                Log in
                              </button>
                            </div>
                            <div className="w-100 position-relative text-center mt-4">
                              <hr className="text-300" />
                              <div className="position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap">
                                or log in with
                              </div>
                            </div>
                            <div className="mb-0 form-group">
                              <div className="no-gutters row">
                                <div className="pr-sm-1 col-sm-6">
                                  <button
                                    to="#!"
                                    className="mt-2 btn btn-outline-google-plus btn-sm btn-block"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fab"
                                      data-icon="google-plus-g"
                                      className="svg-inline--fa fa-google-plus-g fa-w-20 mr-2"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 512"
                                      style={{
                                        transformOrigin: "0.625em 0.5em",
                                      }}
                                    >
                                      <g transform="translate(320 256)">
                                        <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                                            transform="translate(-320 -256)"
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>{" "}
                                    google
                                  </button>
                                </div>
                                <div className="pl-sm-1 col-sm-6">
                                  <button
                                    to="#!"
                                    className="mt-2 btn btn-outline-facebook btn-sm btn-block"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fab"
                                      data-icon="facebook-square"
                                      className="svg-inline--fa fa-facebook-square fa-w-14 mr-2"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      style={{
                                        transformOrigin: "0.4375em0.5em",
                                      }}
                                    >
                                      <g transform="translate(224 256)">
                                        <g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                                            transform="translate(-224 -256)"
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>{" "}
                                    facebook
                                  </button>
                                </div>
                              </div>
                            </div>
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
        <div className="Toastify"></div>
      </main>
    </>
  );
};

export default LoginScreen;
