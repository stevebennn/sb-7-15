import React from "react";
import { Link } from "react-router-dom";
import { EyeSvg, DeleteSvg, EditSvg } from "./svg";
import { tags } from "../../sections/allSections";

// =============================================
export const FilterTags = ({ filter, setFilter }) => {
  return (
    <div className="flex my-sm items-start text-sm text-primary">
      <p className="ml-sm mr-sm font-bold whitespace-no-wrap">SECTION TYPES:</p>
      <div className="flex flex-wrap">
        {tags.map(tag => (
          <button
            key={tag}
            className={`border-b-4 border-transparent ${filter === tag &&
              "border-black"} mr-2 cursor-pointer`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

// =============================================
export const HoverLinks = ({ label, deleteMe, id, edit }) => {
  return (
    <div className="flex absolute top-4 left-4 z-20">
      {label && (
        <Link to={`sections/${label}`}>
          <EyeSvg />
        </Link>
      )}
      {deleteMe && (
        <div onClick={e => deleteMe(e, id)}>
          <DeleteSvg />
        </div>
      )}
      {edit && (
        <Link to={`sections/${label}`}>
          <EditSvg />
        </Link>
      )}
    </div>
  );
};
