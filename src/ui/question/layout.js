/** @format */

import React from "react";

const QuestionScreen = () => {
  return (
    <>
      <div class="body_main">
        <div className="test_question_section">
          <div className="custom_container">
            <div className="test_questions">
              <div className="test_questions_left">
                <div className="test_questions_left_nav">
                  <small>Question 1 / 84</small>
                  <small>N 70865</small>
                  <div className="question_timer">
                    <i className="far fa-clock"></i>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
                <div className="test_questions_btn">
                  <div className="test_questions_btn_child">
                    <button className="question_btn_active">
                      <i className="fas fa-question-circle"></i>{" "}
                      <small>Question</small>
                    </button>
                    <button>
                      <i className="fas fa-brain"></i>
                      <small>Explanation</small>
                    </button>
                  </div>
                  <div className="test_questions_btn_child">
                    <button>
                      <i className="fas fa-comments"></i>
                      <small>Comments</small>
                    </button>
                    <button>
                      <i className="far fa-clipboard"></i>
                      <small>Notes</small>
                    </button>
                  </div>
                </div>

                <div className="multiple_choice_questions_section">
                  <p>
                    Aircraft struck by lightning may sometimes get
                    considerarable damage and at least temporarily the
                    manoeuvring of the arircraft will be made more difficult.
                    Which one of the following statements is correct?
                  </p>
                  <div className="multiple_choice_questions">
                    <strong>A</strong>
                    <small>
                      An aircraft has in the atmosphere the same qualities as a
                      “ Faraday’s cage” which means that struck of lightning
                      seldom occurs. But if it happens, the result will be an
                      occasional engine failure. the crew may get a shock.
                    </small>
                  </div>
                  <div className="multiple_choice_questions">
                    <strong>B</strong>
                    <small>
                      An aircraft has in the atmosphere the same qualities as a
                      “ Faraday’s cage” which means that struck of lightning
                      seldom occurs. But if it happens, the result will be an
                      occasional engine failure. the crew may get a shock.
                    </small>
                  </div>
                  <div className="multiple_choice_questions">
                    <strong>C</strong>
                    <small>
                      An aircraft has in the atmosphere the same qualities as a
                      “ Faraday’s cage” which means that struck of lightning
                      seldom occurs. But if it happens, the result will be an
                      occasional engine failure. the crew may get a shock.
                    </small>
                  </div>
                  <div className="multiple_choice_questions">
                    <strong>D</strong>
                    <small>
                      An aircraft has in the atmosphere the same qualities as a
                      “ Faraday’s cage” which means that struck of lightning
                      seldom occurs. But if it happens, the result will be an
                      occasional engine failure. the crew may get a shock.
                    </small>
                  </div>
                </div>
              </div>
              <div className="test_questions_right">
                <div className="test_question_handler_and_list">
                  <div className="save_cancle_test_btn">
                    <button className="save_test_btn">Save test</button>
                    <button className="cancel_test_btn">Cancel test</button>
                  </div>
                  <div className="finish_test_btn">
                    <button className="finish_test_btn">FINISH TEST</button>
                  </div>

                  <div className="test_question_list_number">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                    <button>11</button>
                    <button>12</button>
                    <button>13</button>
                    <button>14</button>
                    <button>15</button>
                    <button>16</button>
                    <button>17</button>
                    <button>18</button>
                    <button>19</button>
                    <button>20</button>
                    <button>21</button>
                    <button>22</button>
                    <button>23</button>
                    <button>24</button>
                    <button>25</button>
                    <button>26</button>
                    <button>27</button>
                    <button>28</button>
                    <button>29</button>
                    <button>30</button>
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

export default QuestionScreen;
