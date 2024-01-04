import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editBtnHandler() {
    // setIsEditing(isEditing?false:true); // This would work but it's unnecessarily complex
    // setIsEditing(!isEditing); //This is shorter however not accurate. We need to pass a function when updating a state based on the previous state value

    setIsEditing((editing) => !editing);
    console.log(playerName);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function changeHandler(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={changeHandler}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/*  {isEditing ? <input /> : <span className="player-name">{name}</span>} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editBtnHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
