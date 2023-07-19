import burger from "./assets/burger.png"


function createHero() {
    const hero = document.createElement("section");
    hero.classList.add("hero");


    // const heroImageGroup = document.createElement("div");
    const heroImage = document.createElement("img");
    heroImage.src = burger
    heroImage.loading = "lazy"

    // heroImageGroup.appendChild(heroImage);

    hero.innerHTML = `
    <div class="hero-text">
    <h2>
    An Epicurean Journey 
    <br>
    Awaits You
    </h2>
    <button type="button" class="hero-btn">Get started</button>
    </div>
    `
    hero.appendChild(heroImage);
    return hero
}

const renderHero = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHero());
}

export default renderHero;