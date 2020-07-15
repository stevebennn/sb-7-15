import React, { useEffect } from "react";
import sections from "../sections/allSections";
import { Link, useLocation } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { HoverLinks } from "./assets";

// ============================================== //
const TitleBar = ({
  items,
  toCompile,
  checkRef,
  handleDelete,
  hideExport,
  setShowFirebase
}) => {
  let { pathname } = useLocation();

  return (
    <div className="m-4">
      <h2 className="font-bold block mb-2">COMPILED PAGE LAYOUT:</h2>
      <div className="">
        {pathname === "/test" && (
          <Link
            to="/builder"
            className="bg-transparent cursor-pointer border border-black px-2 py-1"
          >
            Builder <span>&rarr;</span>
          </Link>
        )}
        {!hideExport && pathname !== "/test" && (
          <>
            <div className="flex w-full justify-evenly">
              <form
                action="https://codepen.io/pen/define"
                method="POST"
                target="_blank"
                className=""
              >
                <input
                  type="hidden"
                  name="data"
                  value={JSON.stringify(toCompile)}
                />
                <input
                  onClick={checkRef}
                  type="submit"
                  value="Export"
                  className="bg-transparent cursor-pointer border border-black px-2 py-1"
                />
              </form>
              <button
                to="/test"
                onClick={() => setShowFirebase(c => !c)}
                className="bg-transparent cursor-pointer border border-black px-2 py-1  "
              >
                Firebase
              </button>
              <Link
                to="/test"
                className="bg-transparent cursor-pointer border border-black px-2 py-1  "
              >
                Full
              </Link>
              <button
                className="
          bg-transparent cursor-pointer border border-gray-500 text-gray-500 px-2 py-1
          hover:text-red-500 hover:border-red-500 duration-100 ease-in "
                onClick={handleDelete}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================== //
const PageItem = ({ deleteMe, id, label, Component, isDragging }) => {
  const [hovState, setHovState] = React.useState(false);

  return (
    <div
      onMouseOver={() => setHovState(true)}
      onMouseLeave={() => setHovState(false)}
      className={`relative zoom ${
        isDragging ? "border shadow-2xl rounded-md" : ""
      }`}
    >
      {hovState && <HoverLinks label={label} deleteMe={deleteMe} id={id} />}
      <Component />
    </div>
  );
};

// ============================================== //
const CompiledDraggable = ({
  items,
  deleteMe,
  handleDelete,
  setShowFirebase
}) => {
  const [drag, setDrag] = React.useState(null);
  const allCompiledRef = React.useRef(null);
  const [toCompile, setToCompile] = React.useState({
    title: "Starting Block",
    html: "",
    css_external:
      "https://sk1rk.sse.codesandbox.io/build/static/css/main.1f6cdf38.chunk.css"
  });

  const checkRef = () => {
    if (allCompiledRef.current !== null) {
      let parents = Array.from(allCompiledRef.current.children);
      let rawData = [];

      parents.forEach(parent => {
        rawData.push(parent.children[0].innerHTML);
      });
      if (rawData.length > 0) {
        return setToCompile({ ...toCompile, html: rawData.join(" ") });
      }
    }
  };

  React.useEffect(() => {
    !items.length
      ? setDrag(
          <TitleBar
            toCompile={toCompile}
            checkRef={checkRef}
            handleDelete={handleDelete}
            hideExport
          />
        )
      : setDrag(
          <>
            <TitleBar
              toCompile={toCompile}
              checkRef={checkRef}
              handleDelete={handleDelete}
              items={items}
              setShowFirebase={setShowFirebase}
            />
            <div className="trellis-shadow" ref={allCompiledRef}>
              {items !== null &&
                items.map((item, index) => {
                  const Component = sections.filter(
                    x => x.label === item.label
                  )[0].c;
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <PageItem
                            deleteMe={deleteMe}
                            id={item.id}
                            label={item.label}
                            Component={Component}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
            </div>
          </>
        );
  }, [items, deleteMe, toCompile]);

  return drag;
};
export default CompiledDraggable;
