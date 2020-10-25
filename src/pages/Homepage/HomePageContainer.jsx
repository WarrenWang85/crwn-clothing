import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  homepage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 80px",
  },
});
export default function HomePageContainer() {
  const classes = useStyles();
  return <div className={classes.homepage}></div>;
}
