/** @format */

import React from "react";

const TestSettingScreen = () => {
  return (
    <>
      <div class="body_main">
        <div className="test_setting_section">
          <div className="custom_container">
            <div className="test_setting">
              <div className="test_setting_left">
                <div className="test_type_box">
                  <div className="test_type_box_heading">
                    <h5>Test Type:</h5>
                  </div>
                  <div className="test_type_box_setting">
                    <small>Study Mode</small>
                    <div className="setting_on_of_btn">
                      <a className="setting_info" href="jdjd">
                        <i className="fas fa-info"></i>
                      </a>
                      <a className="setting_toogle_btn" href="jdjd">
                        <label className="setting_switch">
                          <input type="checkbox" />
                          <span className="test_setting_slider test_setting_round"></span>
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="test_type_box_setting">
                    <small>Study Mode</small>
                    <div className="setting_on_of_btn">
                      <a className="setting_info" href="jdjd">
                        <i className="fas fa-info"></i>
                      </a>
                      <a className="setting_toogle_btn" href="jdjd">
                        <label className="setting_switch">
                          <input type="checkbox" />
                          <span className="test_setting_slider test_setting_round"></span>
                        </label>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="select_subject_box">
                  <h5>Select Subject:</h5>
                  <div className="select_subject_field">
                    <select>
                      <option>022 - Instrumentation</option>
                    </select>
                  </div>
                </div>

                <div className="question_prefrence_box">
                  <h5>MY QUESTION PREFERENCES</h5>
                  <div className="question_prefrence_setting">
                    <div className="test_type_box_setting">
                      <small>Previously unseen</small>
                      <div className="setting_on_of_btn">
                        <a className="setting_info" href="jdjd">
                          <i className="fas fa-info"></i>
                        </a>
                        <a className="setting_toogle_btn" href="jdjd">
                          <label className="setting_switch">
                            <input type="checkbox" />
                            <span className="test_setting_slider test_setting_round"></span>
                          </label>
                        </a>
                      </div>
                    </div>
                    <div className="test_type_box_setting">
                      <small>Follow my question flags</small>
                      <div className="setting_on_of_btn">
                        <a className="setting_info" href="jdjd">
                          <i className="fas fa-info"></i>
                        </a>
                        <a className="setting_toogle_btn" href="jdjd">
                          <label className="setting_switch">
                            <input type="checkbox" />
                            <span className="test_setting_slider test_setting_round"></span>
                          </label>
                        </a>
                      </div>
                    </div>
                    <div className="test_type_box_setting">
                      <small>Incorrectly answered</small>
                      <div className="setting_on_of_btn">
                        <a className="setting_info" href="jdjd">
                          <i className="fas fa-info"></i>
                        </a>
                        <a className="setting_toogle_btn" href="jdjd">
                          <label className="setting_switch">
                            <input type="checkbox" />
                            <span className="test_setting_slider test_setting_round"></span>
                          </label>
                        </a>
                      </div>
                    </div>
                    <div className="test_type_box_setting">
                      <small>Correct answers only</small>
                      <div className="setting_on_of_btn">
                        <a className="setting_info" href="jdjd">
                          <i className="fas fa-info"></i>
                        </a>
                        <a className="setting_toogle_btn" href="jdjd">
                          <label className="setting_switch">
                            <input type="checkbox" />
                            <span className="test_setting_slider test_setting_round"></span>
                          </label>
                        </a>
                      </div>
                    </div>
                    <div className="test_type_box_setting">
                      <small>Marked “for review”</small>
                      <div className="setting_on_of_btn">
                        <a className="setting_info" href="jdjd">
                          <i className="fas fa-info"></i>
                        </a>
                        <a className="setting_toogle_btn" href="jdjd">
                          <label className="setting_switch">
                            <input type="checkbox" />
                            <span className="test_setting_slider test_setting_round"></span>
                          </label>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test_type_box">
                  <div className="test_type_box_heading">
                    <h5>Type of questions</h5>
                  </div>
                  <div className="type_of_questions_btn">
                    <button className="all_question_btn active">
                      All questions
                    </button>
                    <button className="with_calulation_btn">
                      With calculation
                    </button>
                    <button className="without_calulation_btn">
                      Without calculation
                    </button>
                  </div>
                </div>

                <div className="question_range_selector_box">
                  <div className="question_range_selector">
                    <div className="select_range">
                      <div className="select_range_heading">
                        <div className="total_question_heading">
                          <small>Questions</small>
                          <p className="question_number_range">60</p>
                        </div>
                        <div className="available_question_heading">
                          <small>84 Available</small>
                        </div>
                      </div>

                      <div className="range-slider">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value="50"
                          className="range_slider_thumb"
                        />
                      </div>
                    </div>
                    <div className="start_test_btn">
                      <button>Start Test</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="test_setting_right">
                <div className="area_subarea_section">
                  <div className="area_subarea_heading">
                    <h6>AREAS & SUBAREAS</h6>
                    <h6>QUESTIONS (Trial)</h6>
                  </div>
                  <div className="question_setting_checkbox_list">
                    <div
                      className="accordion area_and_subarea_parent"
                      id="accordionExample"
                    >
                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <input type="checkbox" />
                          <span>022-01 - Sensors and Instruments</span>
                        </a>

                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <input type="checkbox" />
                          <span>022-01 - Sensors and Instruments</span>
                        </a>

                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          <input type="checkbox" />
                          <span>
                            022-02 - Measurement of Air Data Parameters
                          </span>
                        </a>

                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          <input type="checkbox" />
                          <span>
                            022-02 - Measurement of Air Data Parameters
                          </span>
                        </a>

                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          <input type="checkbox" />
                          <span>
                            022-02 - Measurement of Air Data Parameters
                          </span>
                        </a>

                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item area_and_subarea_child">
                        <a
                          href="jdjd"
                          className="setting_check_box accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          <input type="checkbox" />
                          <span>
                            022-02 - Measurement of Air Data Parameters
                          </span>
                        </a>

                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="area_and_subarea_dropdown_body">
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                            <div className="question_with_number">
                              <div className="area_and_subarea_dropdown_question">
                                <input
                                  type="checkbox"
                                  className="yellow_checkbox"
                                />
                                <span> 022-06-01 - General</span>
                              </div>
                              <div className="area_and_subarea_dropdown_number">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSettingScreen;
