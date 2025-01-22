import { useState, useEffect } from "react";

const SearchBox = ({ onSetContactSearch, onSetStatus }) => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results.map((elem, index) => ({
          ...elem,
          id: index + 1,
        }));
        setCustomerData(newData);
        onSetContactSearch(newData);
        onSetStatus(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    onSetStatus(false);
    let value = e.target.value;
    const searchFiltered = customerData.filter(
      (elem) =>
        elem.name.title.toLowerCase().includes(value.toLowerCase()) ||
        elem.name.first.toLowerCase().includes(value.toLowerCase()) ||
        elem.name.last.toLowerCase().includes(value.toLowerCase()) ||
        elem.phone.includes(value)
    );
    onSetContactSearch(searchFiltered);
    onSetStatus(true);
  };

  return (
    <div className="SearchBoxContainer">
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Contact..."
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBox;
