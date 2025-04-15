interface PhotoType {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  description: string;
}

export default PhotoType;
