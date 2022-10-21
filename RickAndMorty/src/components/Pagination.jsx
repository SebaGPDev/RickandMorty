import React from "react";

export default function Pagination() {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link">Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
}