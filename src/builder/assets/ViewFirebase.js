import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/FirebaseContext";

// ============================================== //
// ============================================== //
// UTILS
// ============================================== //

const compareSaveAndSelected = () => {
  const saveName = JSON.parse(localStorage.getItem("savename"));
  const selected = JSON.parse(localStorage.getItem("selected"));

  if (saveName === selected) {
    return true;
  } else return false;
};

const renderConfirm = saveName => {
  let bool = compareSaveAndSelected();
  if (!bool) {
    return true;
  }
  if (bool) {
    var response = window.confirm(
      `You are about to override file:\n${saveName}`
    );
  }
  if (response) {
    return response;
  }
};

const formatFirebaseItems = firebaseItems => {
  const items = firebaseItems
    ? Object.entries(firebaseItems).map(([key, value]) => [key, value])
    : [];
  return items;
};

// ============================================== //
// ============================================== //
// INPUT
// ============================================== //

const Inputs = ({ items, selected, setSelected }) => {
  const firebase = useFirebase();
  const [saveName, setSaveName] = useState("");

  useEffect(() => {
    if (selected !== undefined) {
      localStorage.setItem("savename", JSON.stringify(selected));
      setSaveName(selected);
    }
  }, [selected]);

  const saveToFirebase = e => {
    e.preventDefault();
    let confirmed = renderConfirm(saveName);
    const itemsWithoutComponents = items.map(i => {
      return {
        id: i.id,
        label: i.label,
        tag: i.tag
      };
    });

    if (confirmed) {
      firebase.items().update({ [saveName]: itemsWithoutComponents });
    }
  };

  const changeHandler = e => {
    localStorage.setItem("savename", JSON.stringify(e));
    setSaveName(e);
  };

  return (
    <div className="flex">
      <input
        type="text"
        name="name"
        value={saveName}
        className=" flex-grow mr-4 p-2"
        placeholder="..."
        onChange={e => changeHandler(e.target.value)}
      />
      <button
        className="cursor-pointer border border-black px-2 py-1"
        onClick={e => saveToFirebase(e)}
      >
        save
      </button>
    </div>
  );
};

// ============================================== //
// ============================================== //
// SELECTER
// ============================================== //

const Selecter = ({ selected, setSelected, fbState }) => {
  if (fbState.length === 0) {
    return null;
  }

  const changeHandler = e => {
    localStorage.setItem("selected", JSON.stringify(e));
    setSelected(e);
  };
  return (
    <select
      className="w-full p-2"
      onChange={e => changeHandler(e.target.value)}
      value={selected}
    >
      <option>select to load</option>
      {fbState.map((el, index) => {
        return <option key={index * 200}>{el[0]}</option>;
      })}
    </select>
  );
};

// ============================================== //
// ============================================== //
// EXPORT VIEWFIREBASE
// ============================================== //

const ViewFirebase = ({ items, setItems }) => {
  const firebase = useFirebase();
  const [selected, setSelected] = React.useState(() => {
    const localStore = JSON.parse(localStorage.getItem("selected"));
    if (localStore === null) {
      return [];
    } else return localStore;
  });
  const [fbState, setFbState] = useState([]);

  useEffect(() => {
    // grab items from firebase and format them before setting state
    firebase.items().on("value", snapshot => {
      const data = snapshot.val();
      const formatedData = formatFirebaseItems(data);
      setFbState(formatedData);

      // from firebase...
      // find the selected layout and grab its component list
      // and set our local items (aka 'the compilted list') to match it
      let local = formatedData.filter(el => {
        let b = "";
        if (el[0] === selected) return (b = el[1]);
        return b;
      });
      local[0] !== undefined && setItems(local[0][1]);
    });
  }, [firebase, selected, setItems]);

  return (
    <div className=" p-2">
      <Inputs items={items} selected={selected} setSelected={setSelected} />
      <Selecter
        fbState={fbState}
        setSelected={setSelected}
        selected={selected}
      />
    </div>
  );
};

export default ViewFirebase;
