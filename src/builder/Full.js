import React, { useState, useCallback, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Library from "./Library";
import Compiled from "./Compiled";
import { copy, reorder, FilterTags } from "./assets";
import sections from "../sections/allSections";

// Parent's only role is to trigger a rerender from callback function onDragEnd.
// If not included, the auto save doesnt work properly
const Parent = () => {
  const [trigger, setTrigger] = useState(false);
  console.log("renderere");
  return <BuilderThree setTrigger={setTrigger} />;
};

function BuilderThree({ setTrigger }) {
  // list of components for compiled side
  // uses initializer function to set its state to whats in localStorage or an empty array
  // the initializer only runs one time, on mount
  const [items, setItems] = useState(() => {
    const localStore = JSON.parse(localStorage.getItem("items"));
    if (localStore === null) {
      return [];
    } else return localStore;
  });

  // new component list which is just a filtered version of sections
  const [filteredItems, setFilteredItems] = useState([]);

  // Tags used to filter and set filteredItems
  const [filter, setFilter] = useState("All");

  // tags filter function
  useEffect(() => {
    if (filter === "All") {
      setFilteredItems(sections);
    } else if (filter !== "All") {
      const filtered = sections.filter(i => i.tag === filter);
      setFilteredItems(filtered);
    }
  }, [filter, setFilteredItems]);

  // Deletes item from compiled side
  const deleteMe = (e, id) => {
    e.preventDefault();
    const filteredList = items.filter(el => el.id !== id);
    setItems(filteredList);
    return;
  };

  // Deletes all
  const handleDelete = () => {
    setItems([]);
    return;
  };

  const onDragEnd = useCallback(
    result => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId: {
          setItems(state => reorder(state, source.index, destination.index));
          setTrigger(c => !c);
          break;
        }
        case "LIBRARY":
          setItems(state => copy(filteredItems, state, source, destination));
          setTrigger(c => !c);
          break;

        default:
          break;
      }
    },
    [setItems, filteredItems, setTrigger]
  );

  return (
    <div className="full builder-app">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex">
          <div className="w-full min-h-screen overflow-y-scroll overflox-x-hidden bg-gray-100 border-l border-gray-500">
            <Compiled
              items={items}
              setItems={setItems}
              deleteMe={deleteMe}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
export default Parent;
