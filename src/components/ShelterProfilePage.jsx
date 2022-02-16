import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import mapMarker from "../img/map.svg";
import { Map, Marker } from "pigeon-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMapMarker,
  faMapMarkerAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const MyShelter = () => {
  const { user } = useAuth();

  //-------- USESTATE ------------------------
  const [myShelter, setMyShelter] = useState();
  const [shelterLoaded, setShelterLoaded] = useState(false);
  const [myShelterBunnies, setMyShelterBunnies] = useState();
  const [shelterBunniesLoaded, setShelterBunniesLoaded] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [idSet, setIdSet] = useState(false);

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    let str = window.location.href;
    let n = str.lastIndexOf("/");
    setCurrentId(str.substring(n + 1));
    setIdSet(true);
  }, []);

  useEffect(() => {
    if (idSet) getShelterProfilpage();
  }, [idSet]);

  useEffect(() => {
    if (shelterLoaded) {
      getMyBunnies();
      console.log(parseFloat(myShelter.shelter[0].shelter_lat));
    }
  }, [shelterLoaded]);

  //-------- FUNCTIONS -----------------------
  const getShelterProfilpage = async () => {
    // HIER ÄNDERN
    let id = currentId;
    console.log(id);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_PATH}/api/tierheime/${id}`
      );
      setMyShelter(data);
      setShelterLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const getMyBunnies = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_PATH}/api/tierheime/profilkaninchen`,

        {
          withCredentials: true,
          params: {
            id: currentId,
          },
        }
      );
      setMyShelterBunnies(data.allBunnies);
      setShelterBunniesLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBunny = async (dataForm) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_PATH}/api/kaninchen/loeschen`,
        dataForm,
        { withCredentials: true }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shelter-profilpage">
      <section className="my-shelter">
        {shelterLoaded ? (
          <div className="my-shelter-info">
            <h2 className="my-shelter-title">
              {myShelter.shelter[0].shelter_name}
            </h2>
            <div className="my-shelter-container">
              <img
                className="my-shelter-img"
                src={myShelter.shelter[0].shelter_image}
                alt=""
              />
              <div className="my-shelter-descr">
                {myShelter.shelter[0].shelter_descr}
              </div>
            </div>
            <div className="my-shelter-links">
              {" "}
              <div className="link-container">
                {" "}
                <FontAwesomeIcon
                  icon={faLink}
                  size="2x"
                  color="LightSeaGreen"
                />
                <a
                  href={myShelter.shelter[0].shelter_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="my-shelter-link">
                    {myShelter.shelter[0].shelter_link}
                  </div>
                </a>
              </div>
              <div className="link-container">
                {" "}
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  color="LightSeaGreen"
                />
                <div className="my-shelter-link">
                  {myShelter.shelter[0].shelter_address}
                </div>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </section>
      <section className="map-section">
        {shelterBunniesLoaded ? (
          <Map
            className="shelter-map"
            height={400}
            // width={750}
            defaultCenter={[
              parseFloat(myShelter.shelter[0].shelter_lat),
              parseFloat(myShelter.shelter[0].shelter_lon),
            ]}
            defaultZoom={9}
          >
            <Marker
              width={50}
              anchor={[
                parseFloat(myShelter.shelter[0].shelter_lat),
                parseFloat(myShelter.shelter[0].shelter_lon),
              ]}
            />
          </Map>
        ) : (
          <div></div>
        )}
      </section>
      <section className="my-shelter-bunnies">
        {shelterBunniesLoaded ? (
          <div>
            {" "}
            <div className="title-our-bunnies">Unsere Kaninchen</div>
            <div className="entries">
              {myShelterBunnies.map((bunny, index) => (
                <div key={index}>
                  <div className="entry my-shelter-entry">
                    <a
                      href={bunny.shelter_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="my-shelter-bunny-image"
                        src={bunny.bunny_image}
                      />
                    </a>
                    <div className="info my-shelter-info-list">
                      <div className="info-left">
                        <h2>Name: </h2>
                        <h2>Geboren: </h2>
                      </div>
                      <div className="info-right">
                        <h2>{bunny.bunny_name}</h2>
                        <h2>{bunny.bunny_age}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};

export default MyShelter;
