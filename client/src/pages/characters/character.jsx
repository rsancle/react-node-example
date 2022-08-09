import CharacterElement from "components/character-element";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "services/character-service";

export default function Character() {
  let { characterId } = useParams();
  const [character, setCharacter] = useState();
  useEffect(() => {
    setCharacterFromApi();
  }, []);
  const setCharacterFromApi = async () => {
    const character = await getCharacter(characterId);
    setCharacter(character);
  };

  return (
    <main>
      <CharacterElement character={character} />
    </main>
  );
}
