import React from "react";
import "./Sidebar.css";
import Stack from "react-bootstrap/Stack";

function Sidebar() {
  return (
    <div className="container">
      <aside id="Sidebar">
        <div className="sidebartitle fs-4 " style={{ color: "blue" }}>
          Medico Sales
        </div>

        <div className="Sidebar_Menu">
          <ul className="Sidebar-list">
            <Stack gap={4}>
              <li className="Sidebar-bar-list-itemactive ">
                <a href="" className="text-primary">
                  <i class="fa-brands fa-windows"></i> &nbsp;Dashboard
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-flask "></i>&nbsp; Lab test
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-calendar"></i>&nbsp; Appointment
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-bag-shopping "></i>&nbsp; Medicine
                  Order
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-envelope "></i>&nbsp; Message
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-wallet "></i>&nbsp; Payment
                </a>
              </li>
              <li className="Sidebar-bar-list-item active">
                <a href="" className="text-muted">
                  <i className="fa-solid fa-gear "></i> &nbsp; Settings
                </a>
              </li>
              <li className="Sidebar-Help">
                <a href="#" className="text-muted">
                  <i class="fa-solid fa-circle-question"></i>&nbsp;Help
                </a>
              </li>
            </Stack>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
