import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const footer = () => {
  return (
    <MDBFooter
      bgColor="primary"
      className="text-white text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="12" md="12" className="mb-4 mb-md-0">
            <h5>Inventory</h5>
            <p>
              Inventory management refers to the process of storing, ordering,
              and selling of goods and services. One of the most
              critical aspects of inventory management is managing the flow of
              raw materials from their procurement to finished products.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-white" href="https://easeupnow.com/">
          EaseUp "Financial Consultants For Startups, Tech Company, Small &
          Medium Business"
        </a>
      </div>
    </MDBFooter>
  );
};
export default footer;
