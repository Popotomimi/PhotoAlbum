import axios from "axios";
import EnlargedPhoto from "./components/EnlargedPhoto";
import Footer from "./components/Footer";
import PhotoList from "./components/PhotoList";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { useEffect, useState } from "react";
import PhotoType from "./interfaces/PhotoType";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [enlargedPhoto, setEnlargedPhoto] = useState<PhotoType | null>(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query = "", category = "" }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = `${query} ${category}`;

      if (query && category) {
        searchQuery = `${query}, ${category}`;
      } else if (category) {
        searchQuery = category;
      }

      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id: apiKey,
            query: searchQuery,
          },
        }
      );

      setPhotos(response.data.results);

      return;
    }

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 20,
      },
    });

    setPhotos(response.data);
  };

  useEffect(() => {
    fetchData({ query, category });
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, category });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Searchbar
          setQuery={setQuery}
          setCategory={setCategory}
          setActivateSearch={setActivateSearch}
        />
        <PhotoList photos={photos} setEnlargedPhoto={setEnlargedPhoto} />
        {enlargedPhoto && (
          <EnlargedPhoto
            photo={enlargedPhoto}
            setEnlargedPhoto={setEnlargedPhoto}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
