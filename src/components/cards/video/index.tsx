import { Card } from "react-bootstrap";

function VideoCard(): JSX.Element {
  return (
    <Card className="text-center border-0">
      <Card.Header as="h1" className="border-0" style={{ background: "none" }}>
        День открытых дверей
      </Card.Header>
      <Card.Body>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://vk.com/video_ext.php?oid=-54201931&id=456239698"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            allowFullScreen
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
