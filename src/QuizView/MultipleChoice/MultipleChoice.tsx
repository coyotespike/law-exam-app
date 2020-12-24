import React, { SyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

import Drawer from "../../Drawer";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function QuizQuestion({
  options,
  prompt,
}: {
  options: string[];
  prompt: string;
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [error, setError] = React.useState(false);

  const handleChange = (event: SyntheticEvent) => {
    // See https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget

    const target = event.target as HTMLTextAreaElement;
    setValue(target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!value) {
      setHelperText("Please select an option.");
      setError(true);
    } else {
      setHelperText("");
      setError(false);
    }
  };

  return (
    <>
      <Drawer />
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error}>
          <FormLabel component="legend">{prompt}</FormLabel>
          <RadioGroup value={value} onChange={handleChange}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>

          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </>
  );
}
