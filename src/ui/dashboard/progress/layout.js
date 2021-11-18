/** @format */

import React from "react";
import pic from "../../../assets/img/comp 11.png";
import pic2 from "../../../assets/img/progress.png";

const ProgressScreen = () => {
  return (
    <>
      <div class="progress_section">
        <div class="custom_container">
          <div class="progress_boxes">
            <div class="progress_single_box">
              <div class="progress_single_box_data">
                <div class="progress_content">
                  <figure>
                    <img src={pic2} alt="s" />
                  </figure>
                  <div class="progress_content_title">
                    <h4>Total Questions</h4>
                    <small>Answer</small>
                  </div>
                </div>
                <div class="progress_circle">
                  <div class="circle-wrap">
                    <div class="circle">
                      <div class="mask full">
                        <div class="fill"></div>
                      </div>
                      <div class="mask half">
                        <div class="fill"></div>
                      </div>
                      <div class="inside-circle"> 75% </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="progress_single_box">
              <div class="progress_single_box_data">
                <div class="progress_content">
                  <figure>
                    <img src={pic2} alt="sj" />
                  </figure>
                  <div class="progress_content_title">
                    <h4>Total Test</h4>
                    <small>Taken</small>
                  </div>
                </div>
                <div class="progress_circle">
                  <div class="circle-wrap">
                    <div class="circle">
                      <div class="mask full">
                        <div class="fill"></div>
                      </div>
                      <div class="mask half">
                        <div class="fill"></div>
                      </div>
                      <div class="inside-circle"> 75% </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="progress_single_box">
              <div class="progress_single_box_data">
                <div class="progress_content">
                  <figure>
                    <img src={pic2} alt="sj" />
                  </figure>
                  <div class="progress_content_title">
                    <h4>Average per</h4>
                    <small>Test</small>
                  </div>
                </div>
                <div class="progress_circle">
                  <div class="circle-wrap">
                    <div class="circle">
                      <div class="mask full">
                        <div class="fill"></div>
                      </div>
                      <div class="mask half">
                        <div class="fill"></div>
                      </div>
                      <div class="inside-circle"> 75% </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- progress section end --> */}

      {/* // <!-- section three start --> */}

      <section class="section_three">
        <div class="custom_container">
          <div class="section_three_main">
            <div class="section_three_child">
              <div class="section_three_child_btn_part">
                <div class="single_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                      fill="black"
                    ></path>
                  </svg>
                  <p>Test</p>
                </div>
                <div class="single_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                      fill="black"
                    ></path>
                    <path
                      d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                      fill="black"
                    ></path>
                  </svg>
                  <p>Reports</p>
                </div>

                <div class="single_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                      fill="black"
                    ></path>
                    <path
                      d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                      fill="black"
                    ></path>
                  </svg>
                  <p>Questions</p>
                </div>
                <div class="single_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                      fill="black"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                      fill="black"
                    ></path>
                  </svg>
                  <p>Profile</p>
                </div>
              </div>
            </div>
            <div class="section_three_child">
              <div class="question_slider">
                <div class="question_img_slider_main">
                  <div class="question_slider_title">
                    <h3>Have you seen a question? </h3>
                    <small>
                      Let us know and we will add it into the question bank
                    </small>
                    <div class="report_btn">
                      <a href="#1">Report</a>
                    </div>
                  </div>

                  <div class="question_img_slider">
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          class=""
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                          class=""
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                          class="active"
                        ></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item">
                          <img
                            class="d-block w-100"
                            src={pic}
                            alt="First slide"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            class="d-block w-100"
                            src={pic}
                            alt="Second slide"
                          />
                        </div>
                        <div class="carousel-item active">
                          <img
                            class="d-block w-100"
                            src={pic}
                            alt="Third slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  class="slide_next_btn carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control" aria-hidden="true">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section three end --> */}

      {/* <!-- calender and graph section start --> */}
      <div class="body_main">
        <section class="calender_section">
          <div class="custom_container">
            <div class="calender_and_graph_main">
              <div class="calender_main"></div>
            </div>
          </div>
        </section>

        {/* <!-- calender and graph section end --> */}

        {/* <!-- my subject section start --> */}

        <section class="my_subject_section">
          <div class="custom_container">
            <div class="my_subject_heading">
              <h4>My Subjects</h4>
            </div>
            <div class="my_subject_list">
              <div class="my_subject_single_list">
                <div class="my_subject_logo">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                        fill="#FDBF00"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                        fill="#FF641A"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="my_subject_single_list_data">
                  <h3>PowerPlant Electrics & Systems</h3>
                  <div class="progress_status_bar_section">
                    <div class="progress_status_bar_heading">
                      <small>Progress</small>
                      <small>70%</small>
                    </div>
                    <div class="progress_status">
                      <span style={{ width: "80%" }}>
                        <span class="progress_bar"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="my_subject_single_list">
                <div class="my_subject_logo">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                        fill="#FDBF00"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                        fill="#FF641A"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="my_subject_single_list_data">
                  <h3>PowerPlant Electrics & Systems</h3>
                  <div class="progress_status_bar_section">
                    <div class="progress_status_bar_heading">
                      <small>Progress</small>
                      <small>70%</small>
                    </div>
                    <div class="progress_status">
                      <span style={{ width: "80%" }}>
                        <span class="progress_bar"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="my_subject_single_list">
                <div class="my_subject_logo">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z"
                        fill="#FDBF00"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z"
                        fill="#FF641A"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="my_subject_single_list_data">
                  <h3>PowerPlant Electrics & Systems</h3>
                  <div class="progress_status_bar_section">
                    <div class="progress_status_bar_heading">
                      <small>Progress</small>
                      <small>100%</small>
                    </div>
                    <div class="progress_status">
                      <span style={{ width: "80%" }}>
                        <span
                          class="progress_bar"
                          style={{ backgroundColor: "#5BEF27" }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- my subject section end --> */}

        {/* <!-- saved test section start  --> */}
        <div class="saved_test_section">
          <div class="custom_container">
            <div class="saved_test_main">
              <div class="saved_test_heading">
                <h4>Saved test</h4>
                <small>Last saved 5 test</small>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th id="tabel_id">
                        <span class="tabel_id"></span>
                      </th>
                      <th class="row_min_with">Subject</th>
                      <th class="row_min_with_two">save on</th>
                      <th class="row_min_with_two">Questions</th>
                      <th class="row_min_with">status</th>
                      <th class="saved_test_action row_min_with">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="tabel_id">
                        <span class="tabel_id"></span>
                      </td>
                      <td>
                        <div class="subject_section">
                          <div class="subject_img">
                            <i class="fas fa-user-alt"></i>
                          </div>
                          <h5>050 - Meteorology</h5>
                        </div>
                      </td>
                      <td class="saved_test_date">12/12/21</td>
                      <td class="saved_test_question">70</td>
                      <td>
                        <div class="saved_test_progress_status_bar">
                          <div class="saved_test_progress_status_bar_heading">
                            <small>70%</small>
                            <small>Progress</small>
                          </div>
                          <div class="progress_status">
                            <span style={{ width: "80%" }}>
                              <span class="progress_bar"></span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="saved_test_action">
                        <div class="saved_test_action_main">
                          <a class="toogle_switch" href="#sb">
                            <label class="switch">
                              <input type="checkbox" />
                              <span class="slider round"></span>
                            </label>

                            <label class="switch">
                              <input type="checkbox" checked />
                              <span class="slider round"></span>
                            </label>
                          </a>
                          <a href="#sbs">
                            <i class="far fa-edit"></i>
                          </a>
                          <a href="#sbsb">
                            <i class="fas fa-trash"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td id="tabel_id">
                        <span class="tabel_id"></span>
                      </td>
                      <td>
                        <div class="subject_section">
                          <div class="subject_img">
                            <i class="fas fa-user-alt"></i>
                          </div>
                          <h5>050 - Meteorology</h5>
                        </div>
                      </td>
                      <td class="saved_test_date">12/12/21</td>
                      <td class="saved_test_question">70</td>
                      <td>
                        <div class="saved_test_progress_status_bar">
                          <div class="saved_test_progress_status_bar_heading">
                            <small>70%</small>
                            <small>Progress</small>
                          </div>
                          <div class="progress_status">
                            <span style={{ width: "80%" }}>
                              <span class="progress_bar"></span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="saved_test_action">
                        <div class="saved_test_action_main">
                          <a class="toogle_switch" href="#sbs">
                            <label class="switch">
                              <input type="checkbox" />
                              <span class="slider round"></span>
                            </label>

                            <label class="switch">
                              <input type="checkbox" checked />
                              <span class="slider round"></span>
                            </label>
                          </a>
                          <a href="#bssb">
                            <i class="far fa-edit"></i>
                          </a>
                          <a href="#sbsb">
                            <i class="fas fa-trash"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td id="tabel_id">
                        <span class="tabel_id"></span>
                      </td>
                      <td>
                        <div class="subject_section">
                          <div class="subject_img">
                            <i class="fas fa-user-alt"></i>
                          </div>
                          <h5>050 - Meteorology</h5>
                        </div>
                      </td>
                      <td class="saved_test_date">12/12/21</td>
                      <td class="saved_test_question">70</td>
                      <td>
                        <div class="saved_test_progress_status_bar">
                          <div class="saved_test_progress_status_bar_heading">
                            <small>70%</small>
                            <small>Progress</small>
                          </div>
                          <div class="progress_status">
                            <span style={{ width: "80%" }}>
                              <span class="progress_bar"></span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="saved_test_action">
                        <div class="saved_test_action_main">
                          <a class="toogle_switch" href="#bsbs">
                            <label class="switch">
                              <input type="checkbox" />
                              <span class="slider round"></span>
                            </label>

                            <label class="switch">
                              <input type="checkbox" checked />
                              <span class="slider round"></span>
                            </label>
                          </a>
                          <a href="jxmd">
                            <i class="far fa-edit"></i>
                          </a>
                          <a href="#jdjj">
                            <i class="fas fa-trash"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressScreen;
