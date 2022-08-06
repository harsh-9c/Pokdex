import React from "react";
import { useState } from "react";
import Card from "./Card";
import Main from "./Main";
import { CgPokemon } from "react-icons/cg";
import { MdOutlineMonitor } from "react-icons/md";

const Navbar = ({ pokemon, loading }) => {
  const [searchInput, setSearchInput] = useState("");

  let arr = [];

  const searchItem = (searchValue) => {
    setSearchInput(searchValue);

    pokemon.map((item) => {
      if (item.name.includes(searchValue)) {
        arr = [...arr, item.name];
      }
    });
    arr.map((item) => {
      console.log(item);
    });
    // console.log(searchValue);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <img src="./images/nav-logo.png" alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ color: "blue" }}
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ms-4">
                <a
                  class="nav-link active  text-muted lead fw-bold"
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  <CgPokemon /> Home
                </a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link text-muted lead fw-bold" href="#">
                  <MdOutlineMonitor /> Pokemon Tv
                </a>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => searchItem(e.target.value)}
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
