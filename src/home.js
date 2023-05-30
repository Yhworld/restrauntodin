import renderHero from "./hero";

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

const createNavbar = () => {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn-nav");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    renderHero();
  });



  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn-nav");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn-nav");
  contactBtn.textContent = "Contact";

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

  setActiveButton(document.querySelector(".btn-nav"));
  renderHero();
  return initialize;
};

export default initialize;
