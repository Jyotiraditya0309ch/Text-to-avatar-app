
import React from "react";

const AvatarPreview = ({ avatarSrc, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading avatar...</p>
      ) : (
        avatarSrc && <img src={avatarSrc} alt="Generated Avatar" width="300" />
      )}
    </div>
  );
};

export default AvatarPreview;