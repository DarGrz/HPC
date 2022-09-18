import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Button } from "react-bootstrap";
import img1 from "./img1.jpg";
function App() {
  return (
    <div className="App">
      {" "}
           
      <Container className="p-4">
        {" "}
           {" "}
        <Col md="4">
          {" "}
             {" "}
          <Card>
            {" "}
                <Card.Img variant="top" src={img1} />
            <Card.Body>
              {" "}
               <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae molestie magna. Vivamus sed molestie enim, eu convallis
                mauris. Aliquam pharetra velit ac enim maximus, a commodo augue
                hendrerit. Phasellus at aliquam est    {" "}
              </Card.Text>{" "}
                    <Button variant="primary">Read More</Button>    {" "}
            </Card.Body>{" "}
             
          </Card>{" "}
               {" "}
        </Col>{" "}
         
      </Container>{" "}
           {" "}
    </div>
  );
}
export default App;
