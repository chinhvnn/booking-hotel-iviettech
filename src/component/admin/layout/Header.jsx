import React from "react";

function Header() {
  return (
    <div className="admin-header">
      <div>
        LOGO
      </div>
      <div>
        <ul className="admin-header-menu">
          <li>Messenger</li>
          <li>Notification</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
