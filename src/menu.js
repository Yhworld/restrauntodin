import burger from "./assets/grilled.png"
import mush from "./assets/wepik-export-202306061345060cIQ.png"
import drinks from "./assets/drinks.png"
function createMenu () {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    const menuTable = document.createElement('div');
    menuTable.classList.add('menutbl');

    menu.appendChild(menuHeader);
    menu.appendChild(menuTable);

    menuHeader.innerHTML = `
    <h2>Our Menu</h2>
    <div class="line"></div>`;

    menuTable.innerHTML = `
     <div class="fast_food">
     <img src=${burger} loading= "lazy" />
     </div>
     <div class="fast_food_container">
     <h3>Grilled special</h3>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     </div>
     <div class="fast_food_container">
     <h3>Burgers</h3>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     </div>
     <div class="fast_food">
     <img class="hushburg" src=${mush} loading= "lazy" />
     </div>
     <div class="fast_food">
     <img class="drinkimg" src=${drinks} loading= "lazy" />
     </div>
     <div class="fast_food_container">
     <h3>Lemonade</h3>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     <p class="fast_item">
     <span>salat banana flower</span>
     <span class="underline"></span>
     <span>$40</span>
     </p>
     </div>
     `
    

    return menu;
}

const renderMenu = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default renderMenu;