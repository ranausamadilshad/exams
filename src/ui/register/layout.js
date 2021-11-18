/** @format */

import React from "react";
import logo from "../../assets/img/logo.png";

const RegisterScreen = () => {
  return (
    <>
      <main className="main" id="main">
        <section className="py-0">
          <div className="container">
            <div className="flex-center min-vh-100 py-6 row">
              <div className="col-xxl-5 col-sm-10 col-lg-7">
                <a className="text-decoration-none" href="/">
                  <div className="d-flex flex-center font-weight-extra-bold fs-5 mb-4">
                    <img className="mr-2" src={logo} alt="Logo" width="58" />
                    <span className="text-sans-serif">falcon</span>
                  </div>
                </a>
                <form className="theme-wizard card">
                  <div className="bg-light card-header">
                    <ul className="justify-content-center nav">
                      <li className="nav-item">
                        <a className="font-weight-semi-bold active nav-link">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="lock"
                                className="svg-inline--fa fa-lock fa-w-14 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs--1">
                            Account
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="font-weight-semi-bold nav-link">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user"
                                className="svg-inline--fa fa-user fa-w-14 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs--1">
                            Personal
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="font-weight-semi-bold nav-link">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-up"
                                className="svg-inline--fa fa-thumbs-up fa-w-16 "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"
                                ></path>
                              </svg>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs--1">
                            Done
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="fs--1 font-weight-normal px-md-6 pt-4 pb-3 card-body">
                    <div className="form-group">
                      <label for="name" className="">
                        Name*
                      </label>
                      <input
                        name="name"
                        id="name"
                        placeholder="Name"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <label for="email" className="">
                        Email*
                      </label>
                      <input
                        name="email"
                        id="email"
                        placeholder="Email"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label for="password" className="">
                            Password*
                          </label>
                          <input
                            name="password"
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="form-control"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label for="confirmPassword" className="">
                            Confirm Password*
                          </label>
                          <input
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            className="form-control"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          name="agreeToTerms"
                          id="agreeToTerms"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          className="custom-control-label"
                          for="agreeToTerms"
                        >
                          I accept the <a href="#!">terms</a> and{" "}
                          <a href="#!"> privacy policy</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-md-6 bg-light  d-flex card-footer">
                    <button
                      type="button"
                      className="px-0 font-weight-semi-bold d-none btn btn-link"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-left"
                        className="svg-inline--fa fa-chevron-left fa-w-10 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={{ transformOrigin: " 0.3125em 0.5625em" }}
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
                      Prev
                    </button>
                    <button
                      type="submit"
                      className="ml-auto px-5 btn btn-primary"
                    >
                      Next
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right fa-w-10 ml-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={{ transformOrigin: "0.3125em 0.5625em" }}
                      >
                        <g transform="translate(160 256)">
                          <g transform="translate(0, 32)  scale(0.75, 0.75)  rotate(0 0 0)">
                            <path
                              fill="currentColor"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                              transform="translate(-160 -256)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterScreen;

