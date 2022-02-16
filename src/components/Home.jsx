import SearchTool from "./SearchTool";
import Copyright from "./Copyright";
import BunnyResults from "./BunnyResults";
import { useState, useEffect } from "react";
import axios from "axios";
import bunnyImg from "../img/background_bunny_edit.png";

const Home = ({ bunnies, setBunnies, totalBunnies, setTotalBunnies }) => {
  //-------- USESTATE ------------------------
  const [searchStarted, setSearchStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");
  const [postsPerPage, setPostsPerPage] = useState("5");
  const [zip, setZip] = useState();
  const [pages, setPages] = useState();
  const [switchPage, setSwitchPage] = useState(false);
  const [optionValue, setOptionValue] = useState();
  const [changeNumberOptions, setChangeNumberOptions] = useState(false);
  const [optionChanged, setOptionChanged] = useState(false);
  const [resultsRef, setResultsRef] = useState(false);
  const [searching, setSearching] = useState(false);

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    if (switchPage) {
      fetchBunnies();
    }
  }, [currentPage]);

  useEffect(() => {
    if (changeNumberOptions) {
      setPostsPerPage(optionValue);
      fetchBunniesNewFilter();
    }
  }, [optionValue]);

  //-------- FUNCTIONS -----------------------

  const fetchBunnies = async () => {
    setSearchStarted(true);
    setSearching(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_PATH}/api/kaninchen`,
        {
          params: {
            zip: zip,
            currentPage: currentPage,
            postsPerPage: postsPerPage,
          },
        }
      );
      setBunnies(data.bunnies);
      setTotalBunnies(data.total);
      setPages(data.pages);
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBunniesNewFilter = async () => {
    setSearchStarted(true);
    setSearching(true);
    setCurrentPage("1");
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_PATH}/api/kaninchen`,
        {
          params: {
            zip: zip,
            currentPage: "1",
            postsPerPage: optionValue,
          },
        }
      );
      setBunnies(data.bunnies);
      setTotalBunnies(data.total);
      setPages(data.pages);
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  };

  //-------- RETURN ELEMENTS -----------------
  return (
    <div className="home">
      <div className="landing-cover">
        <img className="landing-img" src={bunnyImg} alt="" />
      </div>

      <SearchTool fetchBunnies={fetchBunnies} setZip={setZip} />
      <BunnyResults
        currentPage={currentPage}
        bunnies={bunnies}
        searchStarted={searchStarted}
        totalBunnies={totalBunnies}
        setCurrentPage={setCurrentPage}
        pages={pages}
        setSwitchPage={setSwitchPage}
        setPostsPerPage={setPostsPerPage}
        optionValue={optionValue}
        setOptionValue={setOptionValue}
        changeNumberOptions={changeNumberOptions}
        setChangeNumberOptions={setChangeNumberOptions}
        postsPerPage={postsPerPage}
        setResultsRef={setResultsRef}
        searching={searching}
      />
    </div>
  );
};

export default Home;
