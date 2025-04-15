import PhotoType from "./PhotoType";

interface EnlargedPhotoProps {
  photo: PhotoType;
  setEnlargedPhoto: (photo: PhotoType | null) => void;
}

export default EnlargedPhotoProps;
