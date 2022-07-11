import React from "react";

function LeftSideBar() {
  return (
    <aside className="left-side-bar">
      <ul>
        <li className="nav-header">Navigation</li>
        <li className="nav-item">
          <a href="/admin" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>Overview</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/room" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>Setup Room</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/service" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>Setup Services</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/orders" className="nav-link">
            <i className="nav-icon far fa-image"></i>
            <p>Order Manager</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope"></i>
            <p>
              Mailbox
              <i className="fas fa-angle-left nav-link-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/admin/email/inbox" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Inbox</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/email/compose" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Compose</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/email/compose" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default LeftSideBar;
