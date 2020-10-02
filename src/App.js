import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";
import Header from "./components/Header/Header";
import SigninAndSignup from "./pages/SinginAndSignup/SigninAndSignup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }

      // this.setState({ currentUser: user });
      // console.log(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
