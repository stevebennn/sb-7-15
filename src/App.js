import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import StyleGuide from "./pages/StyleGuide";
import Sections from "./sections";
import Builder from "./builder";
import Test from "./pages/Test";
import { builder, home, sections, styleguide } from "./builder/assets";
// import Iso from "./iso";

const Nav = withRouter(({ location }) => {
  const links = ["home", "sections", "styleguide", "builder"];
  const images = { home, sections, styleguide, builder };
  const path = location.pathname.slice(1);

  return (
    <div>
      <div className="bg-black h-screen sticky top-0 overflow-y-scroll">
        <div className="p-4 text-yellow-500 text-lg">
          <p>STARTING</p>
          <p>BLOCK</p>
        </div>
        <ul className="text-center">
          {links.map(link => {
            return (
              <Link to={`/${link}`} key={link}>
                <li
                  className={`p-4 border-t border-gray-600 w-full ${
                    path === link
                      ? "text-gray-100 bg-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  <img className="mx-auto" src={images[link]} alt={link} />
                  {link}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* <Nav /> */}
        <div className="w-full ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/styleguide" component={StyleGuide} />
            <Route exact path="/builder" component={Builder} />
            <Route exact path="/sections" component={Sections} />
            <Route exact path="/sections/:id" component={Sections} />
            <Route exact path="/test" component={Test} />
            {/* <Route exact path="/iso" component={Iso} />
          <Route exact path="/iso/:id" component={Iso} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      Home
      {/* <iframe
        src="https://codesandbox.io/embed/react-tailwind-gabe-fork-nvw22?codemirror=1&fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: "0",
          borderRadius: " 4px",
          overflow: "hidden"
        }}
        title="react-tailwind-gabe-fork"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      /> */}
    </div>
  );
};

export default App;
