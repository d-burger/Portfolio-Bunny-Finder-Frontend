import Pagination from "./Pagination";
import PaginationBottom from "./PaginationBottom";
import { useState } from "react";
import axios from "axios";
import ShelterList from "./ShelterList";
import SearchToolShelters from "./SearchToolShelters";

const Shelter = () => {
  //-------- USESTATE ------------------------
  const [shelters, setShelters] = useState();
  const [shelterSearchStarted, setShelterSearchStarted] = useState(false);
  const [shelterZip, setShelterZip] = useState();
  const [searchingShelters, setSearchingShelters] = useState(false);

  //-------- FUNCTIONS -----------------------
  const fetchShelters = async () => {
    setSearchingShelters(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_PATH}/api/tierheime/Umkreis`,

        {
          withCredentials: true,
          params: {
            zip: shelterZip,
          },
        }
      );
      setShelters(data.shelters);
      setShelterSearchStarted(true);
      setSearchingShelters(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shelter">
      <SearchToolShelters
        setShelterZip={setShelterZip}
        fetchShelters={fetchShelters}
      />
      <ShelterList
        shelters={shelters}
        setShelters={setShelters}
        shelterSearchStarted={shelterSearchStarted}
        setShelterSearchStarted={setShelterSearchStarted}
        fetchShelters={fetchShelters}
        searchingShelters={searchingShelters}
      />
    </div>
  );
};

export default Shelter;
