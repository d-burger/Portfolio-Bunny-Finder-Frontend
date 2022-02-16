// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Filter from "./Filter";

const PaginationBottom = ({
  currentPage,
  setCurrentPage,
  pages,
  setSwitchPage,
  setPostsPerPage,
  optionValue,
  setOptionValue,
  changeNumberOptions,
  setChangeNumberOptions,
  postsPerPage,
}) => {
  let helperArr = [...Array(pages).keys()].map((x) => ++x);

  //-------- FUNCTIONS -----------------------
  const switchPage = (event) => {
    setCurrentPage(event.target.innerText);
    setSwitchPage(true);
  };

  const forward = () => {
    let currentPageInt = parseInt(currentPage);
    let nextPage = (currentPageInt + 1).toString();
    if (nextPage <= pages) {
      setSwitchPage(true);
      setCurrentPage(nextPage);
    }
  };

  const backward = () => {
    let currentPageInt = parseInt(currentPage);
    let nextPage = (currentPageInt - 1).toString();
    if (nextPage >= 1) {
      setSwitchPage(true);
      setCurrentPage(nextPage);
    }
  };

  const showButtons = (el, index) => {
    if (el <= parseInt(currentPage) + 2 && el >= parseInt(currentPage) - 2) {
      return (
        <li key={index}>
          {el == currentPage ? (
            <button
              className="active-page"
              onClick={(event) => switchPage(event)}
            >
              {el}
            </button>
          ) : (
            <button
              className="inactive-page"
              onClick={(event) => switchPage(event)}
            >
              {el}
            </button>
          )}
        </li>
      );
    }
  };

  //-------- RETURN ELEMENTS -----------------
  return (
    <div className="Pagination-Bottom">
      <nav className="pag-nav-bottom">
        <ul className="pagination-list">
          <div className="pagination-section">
            {" "}
            <li>
              <button onClick={() => backward()} className="arrows">
                {"<<"}
              </button>
            </li>
            {helperArr.map((el, index) => {
              return showButtons(el, index);
            })}
            <li>
              <button onClick={() => forward()} className="arrows">
                {">>"}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationBottom;
