import React, { useState } from "react";
import BadgesButtons from "../components/BadgesButtons";
const BadgesContainer = ({ opt, questions }) => {
  const [questionState, setQuestionState] = useState(false);
  const [choosedQuestionState, setChoosedQuestionState] = useState(0);
  if (!questions) {
    return null;
  }
  function handleQuestionBadgeClick(e) {
    e.preventDefault();
    return setQuestionState(!questionState);
  }
  function handleQuestionLinkClick(e) {
    e.preventDefault();
    return setChoosedQuestionState(e.target.id);
  }
  let questionsArray = [];
  questions.forEach(q => {
    questionsArray.push(q.split(":"));
  });
  if (questionsArray.length === 0) {
    return null;
  }
  const choosenQuestion = questionsArray[choosedQuestionState][0];
  const choosenAnswer = questionsArray[choosedQuestionState][1];
  const questionElement = choosenQuestion ? (
    <div className='chat-question'>{choosenQuestion}</div>
  ) : (
    ""
  );
  const questionAnswer = choosenAnswer ? (
    <p className='chat-answer'>{choosenAnswer}</p>
  ) : (
    ""
  );
  return (
    <BadgesButtons
      questionState={questionState}
      questionsArray={questionsArray}
      questionElement={questionElement}
      questionAnswer={questionAnswer}
      handleQuestionBadgeClick={handleQuestionBadgeClick()}
      opt={opt.badgesQuestion}
      badgesWhats={opt.badgesWhats}
      msg={`https://web.whatsapp.com/send?phone=${phone}&text=${msg}`}
      handleQuestionLinkClick={handleQuestionLinkClick()}
    />
  );
};

export default BadgesContainer;
