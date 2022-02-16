import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto;
  border-color: LightSeaGreen;
`;

const ShelterList = ({
  shelters,
  setShelters,
  shelterSearchStarted,
  setShelterSearchStarted,
  fetchShelters,
  searchingShelters,
}) => {
  const handleProfileLink = (data) => {
    console.log(data);
    window.location.href = `${process.env.REACT_APP_DOMAIN}/tierheime/${data._id}`;
  };

  return (
    <div>
      {searchingShelters ? (
        <ClipLoader color="LightSeaGreen" css={override} size={100} />
      ) : (
        <div></div>
      )}
      {/* <hr /> */}
      {shelterSearchStarted ? (
        <div className="entries entries-shelter">
          {shelters.map((shelter, index) => (
            <div key={index}>
              <div className="entry">
                <a
                  href={shelter.shelter.shelter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={shelter.shelter.shelter_image} />
                </a>
                <div className="info">
                  <div className="info-left">
                    <h2>Name: </h2>
                    <h2>Adresse: </h2>
                  </div>
                  <div className="info-right">
                    <h2>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={shelter.shelter.shelter_link}
                      >
                        <span className="shelter-link">
                          {shelter.shelter.shelter_name}
                        </span>
                      </a>{" "}
                    </h2>
                    <h2>{shelter.shelter.shelter_address}</h2>
                    <button
                      className="delete-my-own-bunny-btn btn-effect"
                      onClick={() => handleProfileLink(shelter.shelter)}
                    >
                      Profilseite
                    </button>
                  </div>
                </div>

                <div className="distance">
                  <h3>Entfernung: {shelter.distance} Kilometer</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShelterList;
