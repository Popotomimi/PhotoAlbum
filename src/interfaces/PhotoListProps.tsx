import PhotoType from "./PhotoType";

interface PhotoListProps {
  photos: PhotoType[];
  setEnlargedPhoto: (photo: PhotoType) => void;
}

export default PhotoListProps;
