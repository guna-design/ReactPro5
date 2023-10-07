import React from "react";
import Form from "react-bootstrap/form";

function MainContent() {
  return (
    <>
      <div className="Content">
        <div className="container d-flex">
          <Form className="navbar-form pt-3 mx-auto d-flex" >
            <input
              type="text"
              class="form-control col-lg-8 mx-5 position-relative "
              name="size"
              placeholder="Search"
              style={{right:"85%"}}
            />
            <button
              href="#"
              className="position-absolute  text-muted "
              style={{
                right:"10%",
                width: "auto",
                height: "40px",
                borderStyle: "none",
              }}
            >
              <i className="fa-solid fa-bell"></i>
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default MainContent;
