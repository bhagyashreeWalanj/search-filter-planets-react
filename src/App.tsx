import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import { BiPlanet } from "react-icons/bi";
import { PLANET_DATA } from "./utils/planets";
import { Planet } from "./utils/types";

function App() {
  const [filteredList, setFilteredList] = useState(PLANET_DATA);
  const [searchQuery, setSearchQuery] = useState("");

  // search the array of objects
  const handleSearch = (event: any) => {
    const query = event.target.value;
    if (!query) {
      setFilteredList(PLANET_DATA);
      setSearchQuery(query);
      return;
    }

    setSearchQuery(query);

    const searchList = filteredList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchList);
  };
  // filter the array of objects
  const onFilterChange = (event: any) => {
    const selectedSize = Number(event.target.value);
    if (!selectedSize) {
      setFilteredList(PLANET_DATA);
      return;
    }

    const searchSizeList = filteredList.filter((item) => {
      return Number(item.size) > selectedSize;
    });

    setFilteredList(searchSizeList);
  };

  return (
    <>
      <div className="container">
        <h2>
          Search Planets{" "}
          <BiPlanet
            style={{ color: "black", marginTop: "1px", marginRight: "10px" }}
          />
          Array of Objects
        </h2>
        <div className="list-wrapper">
          <div className="filter-container">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div>
            <select name="size" id="size" onChange={onFilterChange}>
              <option value="">Filter By Size</option>
              <option value="2000">Greater than 2000km</option>
              <option value="6000">Greater than 6000km</option>
              <option value="10000">Greater than 10000km</option>
              <option value="25000">Greater than 25000km</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">
          {filteredList.map((item: Planet, index: number) => {
            return (
              <div className="card" key={index}>
                <p className="num-text">{item.id}</p>

                <div>
                  <p className="title">{item.name}</p>
                  <p className="description">
                    {item.size} {item.unit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
