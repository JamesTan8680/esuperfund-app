import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ setResults }) {
  //Initialize user input state
  const [userInput, setUserInput] = useState("");
  //News API key
  const apiKey = "0a8b19e0f8264d31b0de5ab48fb5fd5e";

  //Fetch data based on user input
  const fetchData = async (value) => {
    //Construct URL for the News API request
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

    try {
      //GET request to the News API
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);

        // Filter and map articles data
        const filteredData = data.articles
          .filter((article) =>
            article.title.toLowerCase().includes(value.toLowerCase())
          )
          .map((article) => ({
            title: article.title,
            urlToImage: article.urlToImage,
            description: article.description,
            url: article.url,
          }));
        //console.log(filteredData);
        setResults(filteredData);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onBlur={() => fetchData(userInput)}
      />
    </div>
  );
}

export default SearchBar;
