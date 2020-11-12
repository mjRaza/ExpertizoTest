import { Typography, Button, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ProgressBar } from "./ProgressBar";
import { Progress } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  questionItems: {
    backgroundColor: "#f1eeeede",
    width: "350px",
    height: "50px",
    color: "gray",
    marginRight: "4%",
    marginTop: "1%",
    border: " 1px solid #80808042",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "70%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    overflowWrap: "anywhere",
  },
}));

export const Question = ({
  question,
  questionNumber,
  answers,
  correctAnswer,
  updateQuestionNumber,
  updateScore,
  difficulty,
  score,
}) => {
  const classes = useStyles();
  const [showMsg, setShowMsg] = React.useState("Correct");
  const [selectedAnser, setSelectedAnser] = React.useState("");
  const [value, setValue] = React.useState(1);

  React.useEffect(() => {
    if (difficulty == "hard") {
      setValue(3);
    } else if (difficulty == "medium") {
      setValue(2);
    } else {
      setValue(1);
    }
  }, [questionNumber]);

  const checkAnswer = (e) => {
    setSelectedAnser(e.currentTarget.value);

    if (e.currentTarget.value === correctAnswer) {
      setShowMsg("Correct!");
      updateScore();
    } else {
      setShowMsg("Sorry!");
    }

  };
  return (
    <div style={{ marginLeft: "10%" }}>
      <div style={{ width: "70%" }}>
        <Progress color="danger" value={questionNumber} />
      </div>

      <div>
        <Typography variant="h5">Question {questionNumber} of 20</Typography>
        <Typography variant="subtitle1">Entertainment: Board Games</Typography>
        <Rating name="read-only" value={value} readOnly />
      </div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div style={{ flexDirection: "row" }}>
            <Typography
              variant="h6"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {decodeURI(question)}
            </Typography>
          </div>

          <div
            style={{
              widh: "50%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {answers.map((ans, indx) => (
              <Button
                disable={selectedAnser}
                className={classes.questionItems}
                key={indx}
                value={ans}
                onClick={(e) => {
                  checkAnswer(e);
                }}
              >
                <Typography variant="h6">{decodeURI(ans)}</Typography>
              </Button>
            ))}
          </div>

          <div>
            <div>
              {selectedAnser && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {showMsg}
                  </Typography>
                  <Button
                    style={{
                      backgroundColor: "#f1eeeede",
                      width: "350px",
                      height: "50px",
                      color: "gray",
                    }}
                    onClick={(e) => {
                      setSelectedAnser("");
                      updateQuestionNumber();
                    }}
                  >
                    <Typography variant="h6">Next Question</Typography>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Paper>
      </Grid>
      <ProgressBar score={score} questionNumber={questionNumber} />
    </div>
  );
};
