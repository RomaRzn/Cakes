let busketSumCakes = [];

let counterCakes = 0;
//let requestURL = "https://romarzn.github.io/Cakes/cake.json";
//var request = new XMLHttpRequest();
//request.open("GET", requestURL);
//request.responseType = "json";
//request.send();
//request.onload = function () {
//  var cakes = request.response;
  //renderCards();
//  console.log(cakes);
//};

let div;
function createCard(cake) {
  div = document.createElement("div");
  div.classList.add("card");
  let img = document.createElement("img");
  img.src = "images/" + cake.picter;
  // img.classList.add("img");
  div.appendChild(img);
  let h3 = document.createElement("h3");
  h3.innerText = cake.title;
  div.appendChild(h3);
  let p = document.createElement("p");
  p.innerText = cake.price;
  div.appendChild(p);
  let pDiscout = document.createElement("p");
  if (cake.discounte_price != undefined) {
    pDiscout.innerText = cake.discounte_price;
    p.classList.add("discount");
  } else {
    pDiscout.innerHTML = "&nbsp;";
  }
  div.appendChild(pDiscout);
  let info = document.createElement("button");
  info.classList.add("info");
  div.appendChild(info);
  let basket = document.createElement("button");
  basket.classList.add("basket");
  div.appendChild(basket);

  basket.addEventListener("click", function (e) {
    // localStorage.setItem("title", cake.title);
    // if (cake.discounte_price != undefined)
    //   localStorage.setItem("price", cake.price);
    // else localStorage.setItem("price", cake.discounte_price);
    //Local
    //     var users = [{name: 'Alex', age: 20}, {name: 'Oleg', age: 30}];
    //     localStorage.setItem('storedUsers', JSON.stringify(users));
    // var users = [];
    // if (localStorage.getItem('storedUsers'))
    //   users = JSON.parse(localStorage.getItem('storedUsers'));
    //

    counterCakes++;
    summCakes = document.getElementById("summCakes");
    summCakes.innerHTML = counterCakes;
    // alert(localStorage.length);
    obj = {};
    obj.title = cake.title;
    obj.price =
      cake.discounte_price != undefined ? cake.discounte_price : cake.price;
    // obj.total = counterCakes;
    obj.img = cake.picter;
    busketSumCakes.push(obj);
    console.log(busketSumCakes);
    localStorage.setItem("storedbusket", JSON.stringify(busketSumCakes));
  });
}

function renderCards() {
  let cards = document.getElementById("cards");
  blockcard = document.querySelector(".block-card");
  cakes.forEach((cake) => {
    createCard(cake);
    cards.appendChild(div);
  });
  // createCard(cakes[0]);
}

/**Card2 */
