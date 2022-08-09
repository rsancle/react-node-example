import React from "react";
import CharactersSummary from "./character-summary";
import "../styles/components/characters-list.scss";

const CharactersList = ({ characters }) => {
  const characterElements = [];
  characters.forEach((character, index) => {
    characterElements.push(
      <CharactersSummary key={index} character={character} />
    );
  });
  return <div className="characters-list">{characterElements}</div>;
};

export default CharactersList;
