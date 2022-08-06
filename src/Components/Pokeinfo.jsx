import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      <div className="card-right container-fluid justify-content-center p-3">
        {!data ? (
          <h1>Click on any card</h1>
        ) : (
          <>
            <h1>{data.name}</h1>

            <img
              className="img-fluid mt-2"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
            <div className="abilities">
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              <h2 class="m-auto">Stats</h2>
              {data.stats.map((poke) => {
                return (
                  <>
                    <h3>
                      {poke.stat.name}: {poke.base_stat}
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: `${poke.base_stat}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </h3>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Pokeinfo;
