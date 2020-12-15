import React, { useContext, useState } from "react";
import { RootContext } from "./Context";
import MultipleChoice from "./MultipleChoice";
import Essay from "./OpenEndedQuestion";

import Button from "@material-ui/core/Button";

export default function Quiz() {
  const questions = useContext(RootContext);

  const [index, setIndex] = useState(0);

  const question = questions[index];
  // why does TS think that question.options will sometimes be undefined?

  const handleClick = () =>
    index < questions.length - 1 ? setIndex(index + 1) : null;

  return (
    <>
      {question.category === "OpenAnswer" ? (
        <Essay />
      ) : (
        <MultipleChoice
          options={question.options || ["True", "False"]}
          prompt={question.prompt}
        />
      )}
      <Button onClick={handleClick} variant="outlined" color="primary">
        Next Question
      </Button>
    </>
  );
}
