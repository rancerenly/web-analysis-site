import { useState } from "react";
import { Card, Container, Pagination } from "react-bootstrap";
import { reviews } from "./constants";
import { Review } from "./types";

function ReviewCard(): JSX.Element {
  const reviewCount = reviews.length;
  const [review, setReview] = useState<Review>(reviews[0]);

  const handleReviewChange = (newId: number) => {
    if (newId >= 1 && newId <= reviewCount) {
      setReview(reviews[newId - 1]);
    }
  };

  return (
    <Card className="text-center border-0">
      <Card.Header as="h1" className="border-0" style={{ background: "none" }}>
        Отзывы выпускников
      </Card.Header>
      <Card.Body>
        <Card.Text
          className="fs-4 p-1 border rounded overflow-scroll bg-body-tertiary"
          style={{ height: "200px" }}
        >
          {review.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-0" style={{ background: "none" }}>
        <Container className="d-flex justify-content-between align-items-center p-0">
          <Card.Text className="fs-4 m-0">
            {review.name + ", выпускник " + review.year}
          </Card.Text>
          <Pagination className="m-0" size="lg">
            <Pagination.Prev
              onClick={() => handleReviewChange(review.id - 1)}
            />
            {reviews.map((r) => (
              <Pagination.Item
                active={r.id === review.id}
                onClick={() => handleReviewChange(r.id)}
              >
                {r.id}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handleReviewChange(review.id + 1)}
            />
          </Pagination>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default ReviewCard;
