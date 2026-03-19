function ImageContainer({ children, imageUrl, title, featured }) {
  return (
    <div
      className={`relative overflow-hidden pb-3 ${featured ? "h-80" : "h-48"} `}
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full bg-transparent object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-white to-transparent" />

      {children}
    </div>
  );
}

export default ImageContainer;
