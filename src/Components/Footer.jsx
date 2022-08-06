import React from "react";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsGoogle,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        class="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div class="container pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
              <BsFacebook />
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-twitter"></i>
              <BsTwitter />
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-google"></i>
              <BsGoogle />
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
              <BsInstagram />
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/harsh-jangitwar-49a3a5187/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
              <BsLinkedin />
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/harsh-9c"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-github"></i>
              <BsGithub />
            </a>
          </section>
        </div>

        <div
          class="text-center text-dark p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            textDecoration: "none",
          }}
        >
          © 2022 Copyright: Pokedex
        </div>
      </footer>
    </>
  );
};

export default Footer;
