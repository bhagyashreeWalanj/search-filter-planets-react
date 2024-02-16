import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-para">
          Created by{" "}
          <a className="footer-name" href="#">
            Bhagyashree Walanj
          </a>
        </p>
        <p className="footer-left">
          <BsGithub />
          <span className="footer-span">
            <a
              href="https://github.com/bhagyashreeWalanj/search-filter-planets-react
              Public"
              className="font-bold"
            >
              Github
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
