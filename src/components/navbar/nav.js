import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Inventory</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="opening-stock-table">Opening Stock</Nav.Link>
            <Nav.Link href="purchase-table">Purchase</Nav.Link>
            <Nav.Link href="sales-table">Sales</Nav.Link>
            <Nav.Link href="closing-stock-table">Closing Stock</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
