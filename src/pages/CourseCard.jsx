import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import data from "../data"
import { useNavigate } from "react-router-dom";



const CourseCard = () => {
const navigate=useNavigate()


  
  return (
    <Container>
      <Row className="g-3 text-center">
        {data.map((a) => {
          const{id,name,img,text}=a
       

          return (
            <Col
              className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title className="text-danger">{name} </Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button 
onClick={()=>navigate(`/courses/${name}`)}
variant="primary">DETAILS</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
