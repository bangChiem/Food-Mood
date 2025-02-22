import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BootstrapCard = ({ title, text, image }) => {
  return (
    <Card style={{ width: "18rem", backgroundColor: "#1a1c20", color: "white", borderRadius: "10px" }}>
      {image && <Card.Img variant="top" src={image} style={{ maxHeight: "200px", objectFit: "cover" }}/>}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCard;
