import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Directory from "../../components/Directory/Directory";
// import HomePageContainer from "./HomePageContainer";
// import "./HomePage.scss";
const useStyles = makeStyles({
  homepage: `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  `,
});
function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <Directory />
    </div>
  );
}
export default HomePage;
