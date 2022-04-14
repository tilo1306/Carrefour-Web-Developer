import React, {useEffect, useState} from "react";
import {api} from "./api/api";
import {Countries} from "./types/Countries";
import * as C from "./styles";
import ReactPaginate from "react-paginate";
import {WorldsValues} from "./componets/WorldValue";
import {ListCountries} from "./componets/ListCountries";

function App() {
  const [loading, setLoading] = useState(false);
  const [listCountries, setListCountries] = useState<Countries[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    const loadApiCovid = async () => {
      setLoading(true);
      const countryJson = (await api.getCovidCountry()) as Countries[];
      setLoading(false);
      setListCountries(countryJson);
    };
    loadApiCovid();
  }, []);

  const filteredCountries = searchValue
    ? listCountries.filter((countries) =>
        countries.country
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      )
    : listCountries;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  const changePage = ({selected}: any): void => {
    setPageNumber(selected);
  };

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(filteredCountries.length / usersPerPage);

  return (
    <>
      <C.Container>
        <C.Header>Covid19 Pelo mundo</C.Header>
        {loading && (
          <div>
            <p>Carregando...</p>
          </div>
        )}
        <C.Section>
          <WorldsValues />
        </C.Section>
        <div className="input">
          <input
            type="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="Procurar países"
          />
        </div>
        <C.SectionCountries>
          {filteredCountries
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((p: Countries, index: React.Key | null | undefined) => (
              <ListCountries key={index} list={p} />
            ))}
        </C.SectionCountries>
        <C.SectionPagination>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBttns"
            previousLinkClassName="previousBttn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />
        </C.SectionPagination>
      </C.Container>
    </>
  );
}

export default App;
