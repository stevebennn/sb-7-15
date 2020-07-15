import React from "react";
import CallToAction from "./CallToAction";
import HeroV1 from "./HeroV1";
import CallToActionV5 from "./CallToActionV5";
import { Link } from "react-router-dom";
const components = {
  CallToAction,
  HeroV1,
  CallToActionV5
};

const Sections = ({ match, location }) => {
  const componentId = match ? match.params.id : "";
  const SpecificComponent = components[componentId];

  if (SpecificComponent) {
    return <SpecificComponent />;
  }
  const allComponents = Object.entries(components);
  return (
    <div className="relative w-full max-w-6xl m-auto bg-gray-200  å shadow-lg">
      <h1 className="ml-6 py-4 text-4xl">Sections</h1>
      <ul>
        {allComponents.map(el => {
          return (
            <div key={el} className="p-6 border">
              <Link className="" to={`/sections/${el[0]}`}>
                {el[0]}
              </Link>
              <Preview component={el[1]} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Sections;

const Preview = ({ component }) => {
  const Component = component;
  return <Component />;
};
