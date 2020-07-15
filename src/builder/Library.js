import React, { useRef, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import sections from "../sections/allSections";
import LibraryDraggable from "./LibraryDraggable";

//  Pick up and drag this component.
const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  const label = item.label;
  const Component = useRef(null);

  useEffect(() => {
    const a = sections.filter(x => x.label === label)[0].c;
    Component.current = a;
  }, [label]);

  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={provided.draggableProps.style}
      className={`${snapshot.isDragging ? "dragging" : ""}`}
    >
      {Component.current !== null && <Component.current />}
    </div>
  );
};

// container box around the tailwind component while stationary
function Copyable(props) {
  const { items } = props;
  return (
    <Droppable
      renderClone={getRenderItem(props.items, props.className)}
      droppableId={props.droppableId}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className={props.className}>
          <LibraryDraggable
            items={items}
            snapshot={snapshot}
            provided={provided}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function Library(props) {
  return (
    <Copyable
      droppableId="LIBRARY"
      className="library border py-sm library-grid"
      items={props.items}
      handleSave={props.handleSave}
    />
  );
}
export default Library;
