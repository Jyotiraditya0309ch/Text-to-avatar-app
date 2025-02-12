

import React, { useState } from "react";

const TextInput = ({ onTextSubmit }) => {
  const [description, setDescription] = useState("");

  const handleTextChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    onTextSubmit(description);
  };

  return (
    <div>
      <textarea
        placeholder="Describe your avatar"
        value={description}
        onChange={handleTextChange}
      ></textarea>
      <button onClick={handleSubmit}>Generate Avatar</button>
    </div>
  );
};

export default TextInput;