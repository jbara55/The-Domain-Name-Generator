/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extensions = [".com", ".net", ".us", ".io"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < extensions.length; d++) {
          let resultado = pronoun[a] + adj[b] + noun[c] + extensions[d];
          console.log(resultado);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
