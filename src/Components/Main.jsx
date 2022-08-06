import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    const res = await axios.get(url);
    // console.log(res.data);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokeInfo(res.data.results);
    setLoading(false);
  };

  const getPokeInfo = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <Navbar pokemon={pokeData} loading={loading} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 justify-content-center align-items-center right-content">
            <Pokeinfo data={pokeDex} />
          </div>
          <div className="col-md-6 left-content">
            <Card
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />

            <div className="btn-group">
              {prevUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(prevUrl);
                  }}
                >
                  previous
                </button>
              )}
              {nextUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(nextUrl);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
