import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Creazione interface per importare le props dall'esterno
interface ClassComponentProps {
  title: string;
  color?: string;
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={3} className="bg-secondary">
              <h2 className="mt-5">News</h2>
            </Col>
            <Col xs={12} md={9}>
              <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClassComponent;
