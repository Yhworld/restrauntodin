import map from './/assets/Paper map.gif';
import insta from ".//assets/instagram.svg";
import linkedin from './/assets/linkedin-in.svg';
import facebook from './/assets/facebook.svg';
import twitter from './/assets/twitter.svg';

function contact() {
    const contact = document.createElement('div');
    contact.className = 'contact';

    // const box = document.createElement('div');
    // box.className = 'box';

    // contact.appendChild(box)

    // const contactImage = document.createElement('img');
    // contactImage.src = map

    // contact.appendChild(contactImage);

    contact.innerHTML = `
    <img src="${map}" class="contact-image"/>
    <div class="contact-details">
    <h2 class="contact-logo">Grill Shack.</h2>
    <p class="location-details">
    23, Avenue of the lion, KE
    <br />
    enquiries@grillshack.com
    <br />
    +254711111117
    <br />
    follow us
    <br />
    <div class="contact-icons">
    <img src=${facebook} />
    <img src=${twitter} />
    <img src=${linkedin} />
    <img src=${insta} />
    </div>
    </p>
    <button class="btn-contact">Contact Us</button>
    </div>
    `
    // <img src=${facebook} />
    // <img src=${twitter} />
    // <img src=${linkedin} />
    // <img src=${insta} />

    return contact;
}

const renderContact = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contact());
}

export default renderContact;



