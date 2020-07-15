import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import CompiledDraggable from "./CompiledDraggable";
import { ViewFirebase } from "./assets";

function Compiled({ items, deleteMe, handleDelete, setItems }) {
  // AUTO SAVE
  useEffect(() => {
    // console.log("setting localStorage to equal local state");
    localStorage.setItem("items", JSON.stringify(items));
  }, [items, deleteMe]);
  const [showFirebase, setShowFirebase] = useState(true);
  return (
    <div>
      <div
        style={{
          display: showFirebase ? "" : "none"
        }}
      >
        <ViewFirebase items={items} setItems={setItems} />
      </div>

      <Droppable droppableId="BAG">
        {(provided, snapshot) => {
          return (
            <div ref={provided.innerRef} className="p-4 pt-0 min-h-screen ">
              <CompiledDraggable
                items={items}
                deleteMe={deleteMe}
                handleDelete={handleDelete}
                setShowFirebase={setShowFirebase}
              />
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

export default Compiled;
