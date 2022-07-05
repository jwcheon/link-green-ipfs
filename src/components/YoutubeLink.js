function YoutubeLink({ text }) {
    return (
      <div className="flex flex-col justify-center items-center mt-2 mb-4 max-w-sm space-y-2">
        <div className="font-semibold text-sm">{ text }</div>
        <iframe
          src={`https://www.youtube.com/embed/k1EQC7tdh70`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
  
  export default YoutubeLink;
  