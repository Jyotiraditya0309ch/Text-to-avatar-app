import axios from "axios";
import React, { useState } from "react";
import AvatarPreview from "./components/AvatarPreview";
import TextInput from "./components/TextInput";

const App = () => {
  const [description, setDescription] = useState("");
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextSubmit = async (inputDescription) => {
    setIsLoading(true);
    setDescription(inputDescription);

    // Make API call to Text-to-Avatar API
    try {
      const response = await axios.post("https://api.text-to-avatar.com", {
        description: inputDescription,
      });
      setAvatarSrc(response.data.avatarUrl);
    } catch (error) {
      console.error("Error generating avatar:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Text-to-Avatar Application</h1>
      <TextInput onTextSubmit={handleTextSubmit} />
      <AvatarPreview avatarSrc={avatarSrc} isLoading={isLoading} />
    </div>
  );
};

export default App;
