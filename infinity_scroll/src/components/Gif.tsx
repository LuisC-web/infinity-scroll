const Gif = ({ url }: { url: string }) => {
  return (
    <div className="container-img">
      <img src={url} loading="lazy"></img>
    </div>
  );
};

export default Gif;
