import React from "react";
import { Button } from "reactstrap";
import { Progress } from "reactstrap";






export const ProgressBar = ({ score, questionNumber }) => {
  return (
    <div style={{ width: "70%", marginTop: "3%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6>Score:{(score/20) * 100}%</h6>
        <h6>Max Score:{Math.abs((score - 20 + questionNumber) / 20) * 100}%</h6>
      </div>
      <Progress multi value={2 * 5}>
        <Progress bar color="warning" value={(score / 20) * 100} />
        <Progress bar color="black" value={(score / 20) * 100} />
        <Progress
          bar
          color="danger"
          value={Math.abs((score - 20 + questionNumber) / 20) * 100}
        />
      </Progress>
    </div>
  );
};
