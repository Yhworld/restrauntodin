import map from './/assets/Paper map.gif'

function contact() {
    const contact = document.createElement('div');
    contact.className = 'contact';

    const box = document.createElement('div');
    box.className = 'box';

    contact.appendChild(box)

    box.innerHTML = `
    <civ
    <img src=${map} class="mao" />
    <div class="contact-details">
    <h2 class="contact-logo">Grill Shack</h2>
    <p class="location-details">
    23, Avenue of the lion, KE
    </p>
    <p>
    enquiries@grillshack.com
    </p>
    <p>
    +254711111117
    <br />
    contact us
    </p>
    <div class="social-media">
    </div>
    <button class="btn-contact">Contact Us</button>
    </div>
    `

    return contact;
}

const renderContact = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contact());
}

export default renderContact;



