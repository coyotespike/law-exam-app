import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RootContext } from "../Context";
import MultipleChoice from "./MultipleChoice";
import Essay from "./OpenEndedQuestion";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Quiz() {
  const questions = useContext(RootContext);
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const question = questions[index];
  // why does TS think that question.options will sometimes be undefined?

  const handleClick = () =>
    index < questions.length - 1 ? setIndex(index + 1) : null;

  return (
    <>
      {question.category === "OpenAnswer" ? (
        <Essay prompt={question.prompt} />
      ) : (
        <MultipleChoice
          options={question.options || ["True", "False"]}
          prompt={question.prompt}
        />
      )}
      <Button
        onClick={handleClick}
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Next Question
      </Button>
    </>
  );
}
