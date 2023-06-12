import renderHero from "./hero";
import renderMenu from "./menu";
import renderContact from "./contact";
import waiter from ".//assets/aboutplate.png"

function header() {
  const titlebar = document.createElement("section");
  titlebar.classList.add("navbar");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "Grill Shack.";

  titlebar.appendChild(logo);
  titlebar.appendChild(createNavbar());
  return titlebar;
}

const createAbout = () => {
  const about = document.createElement("section")
  about.classList.add("about")

  const aboutImage = document.createElement("img");
  aboutImage.src = waiter
  aboutImage.alt="pic"

  // about.appendChild(aboutImage);
  about.innerHTML = `
  <img src=${waiter} alt ="pic" />
  <div class="about-text">
  <h3>
  Best Cuisine In 
  Town - Meals
  <br>
  Right From the Oven
  </h3>

  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing 
  <br>
  elit. Culpa vel fuga rerum ex, qui nostrum voluptas 
  <br>
  consequuntur est odit ea indunt quam nemo 
  <br>
  aliquam non laudantium velit! Ex, quae voluptas!
  </p>
  `
  return about
}


const createNavbar = () => {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn-nav");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    const about = document.querySelector('.about')
    about.style.display = "flex";
    setActiveButton(homeBtn);
    renderHero();
  });



  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn-nav");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {    
    const about = document.querySelector('.about')
    about.style.display = "none";
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuBtn);    

    renderMenu();

  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn-nav");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {    
    const about = document.querySelector('.about')
    about.style.display = "none";
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactBtn);    

    renderContact();

  });


  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
};

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btn-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

const initialize = () => {
  const content = document.querySelector("body");
  content.appendChild(header());
  content.appendChild(createMain())
  content.appendChild(createAbout())

  setActiveButton(document.querySelector(".btn-nav"));
  renderHero();
  return initialize;
};

export default initialize;
