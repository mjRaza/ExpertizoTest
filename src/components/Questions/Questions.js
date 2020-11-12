import React from "react";
import { Question } from "./Question/Question";
import data from "../../questions.json";
import { Typography, Button } from "@material-ui/core";
const TOTALQUESTIONS = 20;
export const Questions = () => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [answer, setAnswer] = React.useState();
  const [score, setScore] = React.useState(0);
  const [QuizStart, setQuizStart] = React.useState(false);

  const getAnswers = () => {
    return [
      data[questionNumber].correct_answer,
      ...data[questionNumber].incorrect_answers,
    ].sort(() => Math.random() - 0.5);
  };

  React.useEffect(() => {
    setAnswer(getAnswers());
  }, []);

  const startQuiz = async () => {
    setQuestionNumber(0);
    setScore(0);
    setQuizStart(true);
  };

  const updateQuestionNumber = () => {
    setQuestionNumber((prev) => prev + 1);
  };
  const updateScore = () => {
    setScore((prev) => prev + 1);
  };
  return (
    <div>
      <div
        style={{
          marginTop: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {TOTALQUESTIONS === questionNumber ? (
          <>
            <Typography variant="h1" component="h2">
              Game Over
            </Typography>
            <Typography variant="h2" component="h2">
              Total Score : {score} / {TOTALQUESTIONS}
            </Typography>
            <Button variant="contained" color="primary" onClick={startQuiz}>
              <Typography variant="h6" component="h2">
                Restart
              </Typography>
            </Button>
          </>
        ) : (
          <Question
            question={data[questionNumber].question}
            correctAnswer={data[questionNumber].correct_answer}
            questionNumber={questionNumber}
            answers={getAnswers()}
            updateQuestionNumber={updateQuestionNumber}
            updateScore={updateScore}
            difficulty={data[questionNumber].difficulty}
            score={score}
          />
        )}
      </div>
    </div>
  );
};
