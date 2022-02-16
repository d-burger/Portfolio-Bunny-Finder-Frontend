import { useState, useEffect } from "react";
import Select from "react-select";

const Filter = ({
  setPostsPerPage,
  optionValue,
  setOptionValue,
  changeNumberOptions,
  setChangeNumberOptions,
  postsPerPage,
}) => {
  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
  ];

  const [placeholder, setPlaceHolder] = useState(postsPerPage);

  //-------- FUNCTIONS -----------------------
  const updateOptionValue = (e) => {
    setChangeNumberOptions(true);
    setOptionValue(e.value.toString());
  };

  useEffect(() => {
    if (changeNumberOptions) {
      setPostsPerPage(optionValue);
    }
  }, [optionValue]);

  //-------- RETURN ELEMENTS -----------------

  return (
    <div className="filter">
      <Select
        options={options}
        placeholder={placeholder}
        onChange={updateOptionValue}
      />
      <div className="filter-descr">Kaninchen pro Seite</div>
    </div>
  );
};

export default Filter;
