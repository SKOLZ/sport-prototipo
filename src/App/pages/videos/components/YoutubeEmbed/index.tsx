type YoutubeEmbedProps = {
  embedId: string;
  width: number;
  height: number;
};

const YoutubeEmbed = ({ embedId, width, height }: YoutubeEmbedProps) => (
  <div>
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&showinfo=0&rel=0`}
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
