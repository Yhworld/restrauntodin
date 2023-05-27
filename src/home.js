function header() {
  const titlebar = document.createElement("section");
  titlebar.classList.add("navbar");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "Cuisines";

  titlebar.appendChild(logo);
  titlebar.appendChild(createNavbar());
  return titlebar;
}

const createNavbar = () => {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn-nav");
  homeBtn.textContent = "Home";

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

const initialize = () => {
  const content = document.querySelector("body");
  content.appendChild(header());

  return initialize;
};

export default initialize;
