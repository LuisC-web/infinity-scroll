type GifObject = {
  bg_color: string;
  composite: string | null;
  content_description: string;
  content_rating: string;
  created: number;
  flags: string[];
  h1_title: string;
  hasaudio: boolean;
  hascaption: boolean;
  id: string;
  itemurl: string;
  media: Array<{ [key: string]: any }>; // Ajusta según la estructura de `media`
  shares: number;
  source_id: string;
  tags: string[];
  title: string;
  url: string;
};

const llamadaApi = async (search = "random", pos = 0) => {
  const URL = `https://g.tenor.com/v1/search?q=${search}&key=LIVDSRZULELA&limit=10&pos=${pos}`;
  console.log(pos);

  const response: GifObject[] = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.results);
  console.log(response);

  return response;
};
export default llamadaApi;
