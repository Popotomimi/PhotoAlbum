import PhotoProps from "../interfaces/PhotoProps";

const Photo: React.FC<PhotoProps> = ({ dados, setEnlargedPhoto }) => {
  return (
    <div className="photo" onClick={() => setEnlargedPhoto(dados)}>
      <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  );
};

export default Photo;
