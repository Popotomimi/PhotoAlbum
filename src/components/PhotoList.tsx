import Photo from "./Photo";
import PhotoListProps from "../interfaces/PhotoListProps";

const PhotoList: React.FC<PhotoListProps> = ({ photos, setEnlargedPhoto }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          dados={photo}
          setEnlargedPhoto={setEnlargedPhoto}
        />
      ))}
    </div>
  );
};

export default PhotoList;
