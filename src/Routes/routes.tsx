import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ScreenLogin from "../pages/ScreenLogin";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/screenlogin" component={ScreenLogin} />
      {/* <Route path="/screenfinanceiro" component={ScreenLogin} /> */}
    </BrowserRouter>
  );
}

export default Routes;
