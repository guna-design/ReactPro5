import React from "react";
import Form from "react-bootstrap/form";

function Salesinfo() {
  return (
    <>
      <div className="d-flex flex-column mt-5 ms-4">
        <h3
          className="mt-5 position-absolute"
          style={{ top: "5%", left: "25%" }}
        >
          Sales Information
        </h3>

        <div
          className="d-flex flex-row mt-5 gap-5 position-absolute"
          style={{ right: "80px", top: "10%" }}
        >
          <Form>
            <Form.Group className=" p-1">
              <Form.Label>Customer</Form.Label>

              <Form.Control type="text" placeholder="Enter Customer Name" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group className=" p-1">
              <Form.Label>Invoice Id</Form.Label>

              <Form.Control type="text" placeholder="Enter Invoice ID" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group className="p-1">
              <Form.Label>Start Date</Form.Label>

              <Form.Control type="number" placeholder="Start Date" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group className=" p-1">
              <Form.Label>End Date</Form.Label>

              <Form.Control type="number" placeholder="End Date" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Salesinfo;
