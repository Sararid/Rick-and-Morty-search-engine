import "../styles/Reset.scss";
import "../styles/App.scss";

import { useEffect, useState } from "react";
import api from "../services/api";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import ls from "../services/local-storages";


import Header from "./Header";
import Filters from "./Filters";
import RenderCharList from "./RenderCharList";
import CharCard from "./CharCard";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";


import counters from "../services/counters";
import ChangePage from "./ChangePage";


function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState(ls.get("name", ""));
  const [selectSepecies, setSelectSpecies] = useState("All");


  const [page, setPage] = useState(ls.get('page', 1));


  // useEffect(() => {
  //   if (ls.get('char', []).length > 0) {
  //     console.log(ls.get('char', []));
  //     setData(ls.get('char', []));
  //   } else {
  //     api.callToApi(page).then((initialData) => {
  //       console.log(initialData);
  //       setData(initialData);
  //       ls.set('char', initialData);
  //     });
  //   }
  // }, [page]);

  // call to API
  useEffect(() => {
    api.callToApi(page).then((data) => setData(data));
  }, [page]);


  useEffect(() => {
    ls.set("name", searchName);
  }, [searchName]);


  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelect = (value) => {
    setSelectSpecies(value);
  };


  const FilteredData = data
    .filter((char) =>
      char.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (char) => selectSepecies === "All" || selectSepecies === char.species
    )
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });


  // handler functions to navigate through pages
  const handleLess = () => {
    counters.prev(page, setPage);
  };
  const handleMore = () => {
    counters.next(page, setPage);
  };


  const routeData = useRouteMatch("/character/:characterId");
  console.log(routeData)
  const charId = routeData != null ? routeData.params.characterId : "";
  const selectedChar = data.find((char) => {
    return char.id === parseInt(charId);
  });

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main className='main'>
            <Filters
              searchName={searchName}
              selectSepecies={selectSepecies}
              handleSearchName={handleSearchName}
              handleSelect={handleSelect}
            />
            <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />

            <RenderCharList data={FilteredData} />

          </main>


          <Footer />
        </Route>
        <Route path="/character/:characterId">
          <CharCard char={selectedChar} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>


    </>
  );
}

export default App;
