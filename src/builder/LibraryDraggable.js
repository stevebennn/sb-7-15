import React from "react";
import { Draggable } from "react-beautiful-dnd";
import sections from "../sections/allSections";
import { HoverLinks } from "./assets";

const PageItem = ({ deleteMe, id, label, Component, isDragging }) => {
  const [hovState, setHovState] = React.useState(false);
  // onClick={e => deleteMe(e, id)}
  return (
    <div
      onMouseOver={() => setHovState(true)}
      onMouseLeave={() => setHovState(false)}
      className={`relative zoom trellis-shadow ${isDragging ? "" : ""}`}
    >
      {hovState && <HoverLinks label={label} />}
      <Component />
    </div>
  );
};

const LibraryDraggable = ({ items, snapshot }) => {
  const [drag, setDrag] = React.useState(null);

  React.useEffect(() => {
    setDrag(
      items.map((item, index) => {
        const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
        const Component = sections.filter(x => x.label === item.label)[0].c;
        return (
          <React.Fragment key={item.id}>
            {/* The component copy which fills the library space of the component you grab and drag away */}
            {shouldRenderClone ? (
              <div className="w-full zoom trellis-shadow">
                <Component />
              </div>
            ) : (
              <Draggable draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${snapshot.isDragging ? "" : "not-dragging"} `}
                  >
                    <PageItem label={item.label} Component={Component} />
                  </div>
                )}
              </Draggable>
            )}
          </React.Fragment>
        );
      })
    );
  }, [items, snapshot]);
  return drag;
};

export default LibraryDraggable;
