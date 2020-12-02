import React, { SyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function RadioButtonsGroup() {
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
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
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
  );
}
