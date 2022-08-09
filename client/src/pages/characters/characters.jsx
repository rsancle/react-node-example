import CharactersList from "components/characters-list";
import Pagination from "components/pagination";
import React, { useEffect, useState } from "react";
import { getCharacters } from "services/character-service";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const getCharactersByPage = async () => {
    const { results, info } = await getCharacters(page);
    setCharacters(results);
    setLastPage(info.pages);
  };
  useEffect(() => {
    getCharactersByPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const increasePage = () => {
    setPage(page + 1);
  };
  const decreasePage = () => {
    setPage(page - 1);
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Characters List</h1>
      <Pagination
        currentPage={page}
        lastPage={lastPage}
        decreasePage={decreasePage}
        increasePage={increasePage}
      />
      <CharactersList characters={characters} />
    </main>
  );
}
