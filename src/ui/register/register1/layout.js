/** @format */

import React from "react";
import logo from "../../../assets/img/logo.png";
import profile from "../../../assets/img/user.png";

const RegisterScreen1 = () => {
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
                        <a
                          className="font-weight-semi-bold done cursor-pointer nav-link"
                          href="jss"
                        >
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
                        <a
                          className="font-weight-semi-bold active nav-link"
                          href="jss"
                        >
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
                        <a
                          className="font-weight-semi-bold nav-link"
                          href="jss"
                        >
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
                    <div className="d-flex flex-center pb-3 d-block  text-center mb-2 media">
                      <div className="avatar avatar-4xl mb-2">
                        <img className="rounded-circle " src={profile} alt="" />
                      </div>
                      <div className="ml-md-4 media-body">
                        <div
                          tabindex="0"
                          className="p-3 border-dashed border-2x border-300 bg-light rounded-soft text-center cursor-pointer"
                        >
                          <input
                            accept="image/*"
                            type="file"
                            autocomplete="off"
                            tabindex="-1"
                            style={{ display: "none" }}
                          />
                          <div className=" fs-0 mx-auto d-inline-flex align-items-center media">
                            <img
                              src="./cloud-upload.7ef49c61.svg"
                              alt=""
                              width="25"
                              className="mr-2"
                            />
                            <div className="media">
                              <p className="fs-0 mb-0 text-700">
                                Upload your profile picture
                              </p>
                            </div>
                          </div>
                          <p className="mb-0 w-75 mx-auto text-500">
                            Upload a 300x300 jpg image with a maximum size of
                            400KB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="selectGender" className="">
                        Gender
                      </label>
                      <select
                        name="selectGender"
                        id="selectGender"
                        className="custom-select"
                      >
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="name" className="">
                        Phone
                      </label>
                      <input
                        name="phoneNumber"
                        id="name"
                        placeholder="Phone"
                        type="number"
                        className="input-spin-none form-control"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="">Date of Birth</label>
                      <div className="rdt">
                        <input
                          type="text"
                          className="form-control dateofBirth"
                          name="birthDate"
                          placeholder="DD/MM/YYYY"
                          value=""
                        />
                        {/* <!-- <div className="rdtPicker">
                                            <div className="rdtDays">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="rdtPrev"><span>‹</span></th>
                                                            <th className="rdtSwitch" colspan="5" data-value="10">November
                                                                2021</th>
                                                            <th className="rdtNext"><span>›</span></th>
                                                        </tr>
                                                        <tr>
                                                            <th className="dow">Su</th>
                                                            <th className="dow">Mo</th>
                                                            <th className="dow">Tu</th>
                                                            <th className="dow">We</th>
                                                            <th className="dow">Th</th>
                                                            <th className="dow">Fr</th>
                                                            <th className="dow">Sa</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td data-value="31" className="rdtDay rdtOld">31</td>
                                                            <td data-value="1" className="rdtDay">1</td>
                                                            <td data-value="2" className="rdtDay">2</td>
                                                            <td data-value="3" className="rdtDay">3</td>
                                                            <td data-value="4" className="rdtDay">4</td>
                                                            <td data-value="5" className="rdtDay">5</td>
                                                            <td data-value="6" className="rdtDay">6</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="7" className="rdtDay">7</td>
                                                            <td data-value="8" className="rdtDay">8</td>
                                                            <td data-value="9" className="rdtDay">9</td>
                                                            <td data-value="10" className="rdtDay">10</td>
                                                            <td data-value="11" className="rdtDay">11</td>
                                                            <td data-value="12" className="rdtDay">12</td>
                                                            <td data-value="13" className="rdtDay">13</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="14" className="rdtDay">14</td>
                                                            <td data-value="15" className="rdtDay">15</td>
                                                            <td data-value="16" className="rdtDay">16</td>
                                                            <td data-value="17" className="rdtDay">17</td>
                                                            <td data-value="18" className="rdtDay rdtToday">18</td>
                                                            <td data-value="19" className="rdtDay">19</td>
                                                            <td data-value="20" className="rdtDay">20</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="21" className="rdtDay">21</td>
                                                            <td data-value="22" className="rdtDay">22</td>
                                                            <td data-value="23" className="rdtDay">23</td>
                                                            <td data-value="24" className="rdtDay">24</td>
                                                            <td data-value="25" className="rdtDay">25</td>
                                                            <td data-value="26" className="rdtDay">26</td>
                                                            <td data-value="27" className="rdtDay">27</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="28" className="rdtDay">28</td>
                                                            <td data-value="29" className="rdtDay">29</td>
                                                            <td data-value="30" className="rdtDay">30</td>
                                                            <td data-value="1" className="rdtDay rdtNew">1</td>
                                                            <td data-value="2" className="rdtDay rdtNew">2</td>
                                                            <td data-value="3" className="rdtDay rdtNew">3</td>
                                                            <td data-value="4" className="rdtDay rdtNew">4</td>
                                                        </tr>
                                                        <tr>
                                                            <td data-value="5" className="rdtDay rdtNew">5</td>
                                                            <td data-value="6" className="rdtDay rdtNew">6</td>
                                                            <td data-value="7" className="rdtDay rdtNew">7</td>
                                                            <td data-value="8" className="rdtDay rdtNew">8</td>
                                                            <td data-value="9" className="rdtDay rdtNew">9</td>
                                                            <td data-value="10" className="rdtDay rdtNew">10</td>
                                                            <td data-value="11" className="rdtDay rdtNew">11</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> --> */}
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="address" className="">
                        Address
                      </label>
                      <textarea
                        name="address"
                        id="address"
                        rows="4"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="px-md-6 bg-light  d-flex card-footer">
                    <button
                      type="button"
                      className="px-0 font-weight-semi-bold btn btn-link"
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
                        style={{ transformOrigin: " 0.3125em 0.5625em" }}
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

export default RegisterScreen1;
