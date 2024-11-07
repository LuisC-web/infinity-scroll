import { useEffect, useRef, useState } from "react";
import "./App.css";
import llamadaApi from "./helpers/llamadaApi";
import { v4 as uuidv4 } from "uuid";
import Gif from "./components/Gif";
function App() {
  const [urls, setUrls] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [search, setSearch] = useState("random");

  const getData = () => {
    llamadaApi(search, pos).then((data) => {
      const url = data.map((gif) => gif.media[0].gif.url);
      setUrls((prevurl) => [...prevurl, ...url]);
    });
  };
  const referencia = useRef(null);
  useEffect(() => {
    getData();
  }, [pos, search]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (pos < 50) setPos((prevPos) => prevPos + 10);
        }
      },
      { threshold: 1.0 }
    );

    if (referencia.current) {
      observer.observe(referencia.current);
    }

    return () => {
      if (referencia.current) {
        observer.unobserve(referencia.current);
      }
    };
  }, [referencia]);
  const setearSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearch(e.target.value);
      setPos(0);
      setUrls([]);
    }, 1000);
  };

  return (
    <>
      <section className="container">
        <h1>GIF</h1>
        <label htmlFor="searf5f5f5ch">Buscar Gif</label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setearSearch(e)}
        />
        <div className="gif">
          {urls.map((url) => (
            <Gif key={uuidv4()} url={url} />
          ))}
        </div>

        {pos < 50 && (
          <p ref={referencia} style={{ textAlign: "center" }}>
            Cargando elementos...
          </p>
        )}
      </section>
    </>
  );
}

export default App;
