import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AfterNavLink = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/add-opening-stock">Add Opening Stock</Nav.Link>
            <Nav.Link href="/add-purchase">Add Purchase</Nav.Link>
            <Nav.Link href="/add-sales">Add Sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AfterNavLink;
