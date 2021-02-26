import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="sidebar">
      <section className="sidebar__head">
        <i class="fas fa-euro-sign sidebar__logo"></i>
        <h1 className="sidebar__header">eferbarn</h1>
      </section>
      <section className="navbar">
        <ul>
          <li
            className={`navbar__tabs ${isActive ? "navbar__active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <i class="fas fa-home navbar__icon"></i>
            <a className="navbar__link" href="##">
              Overview
            </a>
          </li>
          <li className="navbar__tabs">
            <i class="far fa-credit-card navbar__icon"></i>
            <a className="navbar__link" href="##">
              Cards
            </a>
          </li>
          <li className="navbar__tabs">
            <i class="fas fa-money-check-alt navbar__icon"></i>
            <a className="navbar__link" href="##">
              Payments
            </a>
            <p className="navbar__notification">4</p>
          </li>
          <li className="navbar__tabs">
            <i class="fas fa-chart-line navbar__icon"></i>
            <a className="navbar__link" href="##">
              My stat
            </a>
          </li>
          <li className="navbar__tabs">
            <i class="far fa-star navbar__icon"></i>
            <a className="navbar__link" href="##">
              Referrals
            </a>
          </li>
        </ul>
      </section>
      <ul>
        <li className="navbar__tabs">
          <i class="far fa-user-circle navbar__icon"></i>
          <a className="navbar__link" href="##">
            Account
          </a>
        </li>
        <li className="navbar__tabs">
          <i class="fas fa-cog navbar__icon"></i>
          <a className="navbar__link" href="##">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
