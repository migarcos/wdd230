const info = './json/companies.json';

const showCompanies = (companies) => {
    const cards = document.querySelector('section#cards');

    companies.forEach((company) => {
        let card = document.createElement('article');
        let h2 = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        h2.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phoneNumber}`;
        website.textContent = `${company.websiteUrl}`;

        portrait.setAttribute('src','images/directory/'+company.image);
        portrait.setAttribute('height','80');

        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        
        cards.appendChild(card);
    });
}

async function getCompanies() {
    const response = await fetch(info);
    const data = await response.json();
    //console.log(data.companies);
    
    
    showCompanies(data.companies);
}

getCompanies();

// ----- to  control views -------
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () =>{
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid")
}