import React from "react";
const BadgesButtons = ({
  questionState,
  questionsArray,
  questionElement,
  questionAnswer,
  handleQuestionBadgeClick,
  handleQuestionLinkClick,
  opt,
  msg,
}) => (
  <>
    <div
      className={`chat-questions-wrapper badgeClass question-hide-${
        questionState || false
      } question-move-${questionState || false}`}
    >
      <div className='question-box-wrapper'>
        {questionsArray?.map((question, indx) => {
          const x = indx + 1;
          return (
            <button
              className='chat-question'
              key={x}
              id={indx}
              onClick={event => handleQuestionLinkClick(event)}
            >
              {question[0]}
            </button>
          );
        })}
      </div>
      <div className='chat-box-wrapper'>
        {questionElement || null}
        {questionAnswer || null}
      </div>
    </div>

    <div className={`AskMeWrapper badgeClass question-move-${questionState}`}>
      <div
        href='#'
        rel='noopener noreferrer'
        target={"_blank"}
        className={"desktop-only"}
        onClick={e => handleQuestionBadgeClick(e)}
      >
        {opt.badgesQuestion}
      </div>
      <div
        href='#'
        rel='noopener noreferrer'
        target={"_blank"}
        className={"mobile-only"}
        onClick={e => handleQuestionBadgeClick(e)}
      >
        {opt.badgesQuestion}
      </div>
    </div>
    {opt.badgesWhats ? (
      <div className={`whatsMeWrapper badgeClass whats-move-${questionState}`}>
        <a
          href={msg}
          rel='noopener noreferrer'
          target={"_blank"}
          className={"badge-whats desktop-only"}
        >
          {opt.badgesWhats}
        </a>
        <a
          href={msg}
          rel='noopener noreferrer'
          target={"_blank"}
          className={"badge-whats mobile-only"}
        >
          {opt.badgesWhats}
        </a>
      </div>
    ) : null}
  </>
);

export default BadgesButtons;
