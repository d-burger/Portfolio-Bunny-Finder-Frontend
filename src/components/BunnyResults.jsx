import Pagination from "./Pagination";
import PaginationBottom from "./PaginationBottom";
import { useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto;
  border-color: LightSeaGreen;
`;

const BunnyResults = ({
  currentPage,
  bunnies,
  searchStarted,
  totalBunnies,
  setCurrentPage,
  pages,
  setSwitchPage,
  setPostsPerPage,
  optionValue,
  setOptionValue,
  changeNumberOptions,
  setChangeNumberOptions,
  postsPerPage,
  setResultsRef,
  searching,
}) => {
  let ref = useRef();
  setResultsRef(ref);

  if (searchStarted) {
    return (
      <div ref={ref} className="results">
        <hr className="division" />
        <h1 className="title-results">
          <span className="amount-bunnies">{totalBunnies} </span> Kaninchen
          suchen ein Zuhause ...
        </h1>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
          setSwitchPage={setSwitchPage}
          setPostsPerPage={setPostsPerPage}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          changeNumberOptions={changeNumberOptions}
          setChangeNumberOptions={setChangeNumberOptions}
          postsPerPage={postsPerPage}
        />
        {searching ? (
          <ClipLoader color="LightSeaGreen" css={override} size={100} />
        ) : (
          <div></div>
        )}
        <div className="entries">
          {bunnies.map((bunny, index) => (
            <div key={index}>
              {/* <hr className="division" /> */}
              <div className="entry">
                <a
                  href={bunny.shelter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bunny.bunny_image} />
                </a>
                <div className="info">
                  <div className="info-left">
                    {" "}
                    <h2>Name: </h2>
                    <h2>Geboren: </h2>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={bunny.shelter_link}
                    >
                      <h2>Tierheim:</h2>
                    </a>
                    <h2>Postleitzahl:</h2>
                    <h2>Adresse: </h2>
                  </div>
                  <div className="info-right">
                    {" "}
                    <h2>{bunny.bunny_name}</h2>
                    <h2>{bunny.bunny_age}</h2>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={bunny.shelter_link}
                    >
                      <h2>
                        <span className="shelter-link">
                          {bunny.shelter_name}
                        </span>
                      </h2>
                    </a>
                    <h2> {bunny.shelter_zip}</h2>
                    <h2>{bunny.shelter_address}</h2>
                  </div>
                </div>
                <div className="distance">
                  <h3>Entfernung: {bunny.distance} Kilometer</h3>
                </div>
              </div>
            </div>
          ))}
          {/* <hr className="division" /> */}
        </div>
        <PaginationBottom
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
          setSwitchPage={setSwitchPage}
          setPostsPerPage={setPostsPerPage}
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          changeNumberOptions={changeNumberOptions}
          setChangeNumberOptions={setChangeNumberOptions}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default BunnyResults;
