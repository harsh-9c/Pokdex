import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      <ScrollToTop smooth color="#b74555" style={{ right: "5px" }} />
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon.map((item) => {
            return (
              <>
                <div
                  className="card col-md-3 m-2"
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                >
                  {/* <h2>{item.id}</h2> */}
                  <img
                    className="img-fluid p-4"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                    alt=""
                  />

                  <h2>{item.name}</h2>
                </div>
              </>
            );
          })
        )}
      </div>
      {/* <div className="card">
        <h2>1.</h2>
        <img src="./images/charmander.png" alt="" />
        <h2>Charmander</h2>
      </div> */}
    </>
  );
};

export default Card;
