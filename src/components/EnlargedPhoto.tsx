import React from "react";
import EnlargedPhotoProps from "../interfaces/ElargedPhotoProps";

const EnlargedPhoto: React.FC<EnlargedPhotoProps> = ({
  photo,
  setEnlargedPhoto,
}) => {
  return (
    <div
      className="photo-enlarged-backdrop"
      onClick={() => setEnlargedPhoto(null)}>
      <div className="photo-enlarged-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  );
};

export default EnlargedPhoto;
