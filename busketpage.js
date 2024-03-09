console.log(document.referrer);
let cakes = [];
if (localStorage.getItem("storedbusket"))
  cakes = JSON.parse(localStorage.getItem("storedbusket"));
console.log(cakes);

let div;
function createLine(cake, i) {
  div = document.createElement("div");
  div.classList.add("line");
  let img = document.createElement("img");
  img.src = "images/" + cake.img;
  // img.classList.add("img");
  div.appendChild(img);
  let h3 = document.createElement("h3");
  h3.innerText = cake.title;
  div.appendChild(h3);
  let calc = document.createElement("input");
  calc.type = "number";
  calc.value = 1;
  calc.min = 0;
  calc.max = 100;
  calc.classList.add("calc");
  calc.addEventListener("click", function (e) {
    totalPrice = document.querySelector(".totalprice").innerHTML.slice(19, -7);
    // alert(e.target.nextSibling);
    let oldPrice = e.target.nextSibling.innerText;

    // oldPrice = oldPrice.replace("руб", "");
    // alert(totalPrice,oldPrice);
    let newtotalPrice = parseInt(totalPrice) - parseInt(oldPrice);

    let totulPriceLine = calc.value * parseInt(cake.price) + "руб";
    e.target.nextSibling.innerText = totulPriceLine;
    newtotalPrice += parseInt(totulPriceLine);
    //Итоговая сумма с учетом изменения количества
    document.querySelector(".totalprice").innerHTML =
      " Сумма покупки :" + "<b>" + newtotalPrice + "</b>" + "руб";
  });
  div.appendChild(calc);

  let p = document.createElement("p");
  p.innerText = cake.price;
  div.appendChild(p);
  //Кнопка удаления
  close = document.createElement("img");
  close.src = "images/close.png";
  close.classList.add("closeButton");
  div.appendChild(close);
  close.addEventListener("click", function (e) {
    //Удаление из массива
    cakes.splice(i, 1);
    localStorage.setItem("storedbusket", JSON.stringify(cakes));
    //перезагрузка страницы
    location.reload();
  });
}

let totalPrice = 0;
function renderLines() {
  let lines = document.getElementById("busket");
  // blockcard = document.querySelector(".block-card");
  cakes.forEach((cake, i) => {
    createLine(cake, i);
    lines.appendChild(div);
    totalPrice += parseInt(cake.price);
  });
  div = document.createElement("div");
  div.classList.add("totalprice");
  div.innerHTML = " Сумма покупки :" + "<b>" + totalPrice + "</b>" + "руб";
  lines.appendChild(div);
  // createCard(cakes[0]);
}
renderLines();
