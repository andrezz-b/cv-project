import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        Copyright &copy; 2022 andrezz-b
        <a href="https://github.com/andrezz-b/cv-project" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
