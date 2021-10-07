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

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState(ls.get("name", ""));
  const [selectSepecies, setSelectSpecies] = useState("All");


  useEffect(() => {
    if (ls.get('char', []).length > 0) {
      console.log(ls.get('char', []));
      setData(ls.get('char', []));
    } else {
      api.callToApi().then((initialData) => {
        console.log(initialData);
        setData(initialData);
        ls.set('char', initialData);
      });
    }
  }, []);


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
