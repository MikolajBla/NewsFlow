function ImageContainer({ children, imageUrl, featured }) {
  return (
    <div
      className={`relative overflow-hidden ${featured ? "h-80" : "h-48"} mask-b-from-20% mask-b-to-100%`}
    >
      <img
        src={imageUrl}
        className="h-full w-full bg-[url(https://www.historic-newspapers.com/cdn/shop/files/OriginalNewspapers_1280x720_6005ac41-c8a6-4854-a28a-7389b5f24470.jpg)] bg-cover object-cover transition-transform duration-500 content-none group-hover:scale-105"
      />

      <div className="absolute inset-0" />

      {children}
    </div>
  );
}

export default ImageContainer;
