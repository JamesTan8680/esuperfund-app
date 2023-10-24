import React, { useState } from "react";
import Modal from "../components/Modal";
import "./SearchResultsList.css";

function SearchResultsList({ results }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(null);

  //   const openModal = (url) => {
  //     setSelectedUrl(url);
  //     setModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setModalOpen(false);
  //     setSelectedUrl(null);
  //   };

  //Function to open URL in a new tab

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="results-list">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <h2>{result.title}</h2>
          {result.urlToImage && (
            <img
              src={result.urlToImage} //Display the returned article image of the News
              alt={result.title} //Display the returned article title of the News
              onClick={() => {
                openInNewTab(result.url); // Open the URL in a new tab
                // openModal(result.url); // Try to pass the URL to open in the modal. But, violates Content Security Policy
              }}
            />
          )}
          {/* Display the returned article description of the News */}
          <p>{result.description}</p>
        </div>
      ))}
      {/* {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <iframe title="Modal Content" src={selectedUrl}></iframe>
        </Modal>
      )} */}
    </div>
  );
}

export default SearchResultsList;
