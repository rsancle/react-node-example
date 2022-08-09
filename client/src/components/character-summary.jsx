import useAuth from "hooks/use-auth";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/character-summary.scss";

const CharactersSummary = ({ character }) => {
  const { user } = useAuth();
  const isFavorite = (characterId) => {
    if (user.favorites?.contains(characterId)) {
      return (
        <li>
          <div className="heart"></div>
        </li>
      );
    }
    return <></>;
  };
  return (
    <Link className="characters-element" to={"/characters/" + character.id}>
      <div className="characters-element__container">
        <img src={character.image} alt={character.name} />
        <ul className="characters-element__container__description">
          <li>{character.name}</li>
          <li>{character.species}</li>
          <li>{character.status}</li>
          {isFavorite(character.id)}
        </ul>
      </div>
    </Link>
  );
};

export default CharactersSummary;
