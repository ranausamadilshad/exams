/** @format */

import React from "react";
import pic1 from "../../../assets/img/logo-demo9.svg";

const HeaderScreen = () => {
  return (
    <>
      <div class="body_main">
        <div class="responsive_nav_bar">
          <div class="custom_container">
            <div class="responsive_nav_bar_main">
              <div class="company_logo">
                {" "}
                <img src={pic1} alt="osls" />
              </div>
              <div class="hamburger_btn">
                <button
                  class="btn btn-icon btn-active-color-primary"
                  id="kt_aside_toggle"
                >
                  <span class="svg-icon svg-icon-2x me-n1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="header_and_progress_main">
          <header>
            <div class="custom_container">
              <div class="navigation">
                <div class="title">
                  <div class="welcome_text">
                    <h2>Welcome, (Name)</h2>
                  </div>
                  <div class="date_and_time">
                    <small>21 octuber 2021 - 16:30</small>
                  </div>
                </div>
                <div class="search_and_notofication">
                  <div class="search_field">
                    <form>
                      <div class="search_input">
                        <i class="fad fa-search"></i>
                        <input
                          type="text"
                          placeholder="Find Question By (ID)"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="header_notification">
                    <div class="notification">
                      <i class="fad fa-bell"></i>
                    </div>
                    <div class="notification">
                      <i class="fad fa-user"></i>
                    </div>
                    <div class="new_test_btn">
                      <button>New Test</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default HeaderScreen;
