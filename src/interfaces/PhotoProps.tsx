import PhotoType from "./PhotoType";

interface PhotoProps {
  dados: PhotoType;
  setEnlargedPhoto: (photo: PhotoType) => void;
}

export default PhotoProps;
