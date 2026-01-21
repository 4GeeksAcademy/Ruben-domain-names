import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function getDomainNames(){
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.net', '.us', '.io', '.es']

  for(let p of pronoun){
    for(let a of adj){
      for(let n of noun){
        for(let d of domain){
          console.log(p+a+n+d);
        }
      }
    }
  }
}

window.onload = function() {
  //write your code here
  getDomainNames();
};
