// SPOTLIGHTS

const jsonfile = './json/companies.json';
// const spotlight = [];

async function getMembers() {
    const response = await fetch(jsonfile);
    const spot = await response.json();
    spotlights = spot.companies.filter(member => member.membershipLevel == "gold" || member.membershipLevel == "silver");
    // console.log(spotlights);
    showMembers(spotlights); // showMembers(spot.companies);
}

const showMembers = (members) => {

    // members.forEach((member) => {if (member.membershipLevel == "gold" ) {spotlight.push(member)}}); // || member.membershipLevel == "silver"
    // console.log(spotlight);
    let spotSize = members.lenght;

    const cards = document.querySelector('section#spotlights');
    let counter = 1;

    members.sort(() => Math.random() - 0.5);
    console.log(members);

    spotlights = [members[0], members[1], members[2]];
    
    spotlights.forEach((member) => {     
        let card = document.createElement('article');
        let h2 = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        if (counter == 3){
            card.setAttribute('id', "spotlight3");
            card.setAttribute('class', "spotlight");
        } else {
            if (counter > 3){
                card.setAttribute('id', "spotlight4");
            
            } else  {
                card.setAttribute('class', "spotlight");
            }
        }        

        h2.textContent = `${member.name}`;
        // address.textContent = `${member.address}`;
        phone.textContent = `${member.phoneNumber}`;
        website.textContent = `${member.websiteUrl}`;

        website.setAttribute('href',member.websiteUrl);
        website.setAttribute('target','_blank')


        portrait.setAttribute('src','images/directory/'+member.image);
        portrait.setAttribute('height','80');
        portrait.setAttribute('alt',member.name )

        card.appendChild(portrait);
        card.appendChild(h2);
        // card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        
        cards.appendChild(card);

        counter ++;
    });
}

getMembers();



// 6 way to work with an array
// https://dev.to/duxtech/6-maneras-de-iterar-un-array-3fbm#:~:text=6%20maneras%20de%20iterar%20un%20array%20en%20JavaScript,%28%29%20...%206%206.%20Usando%20for%20...%20of

// // Lista original
// let originalList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// // Generar tres índices aleatorios
// let randomIndexes = [];
// while (randomIndexes.length < 3) {
//   let randomIndex = Math.floor(Math.random() * originalList.length);
//   if (!randomIndexes.includes(randomIndex)) {
//     randomIndexes.push(randomIndex);
//   }
// }

// // Crear una nueva lista con los elementos correspondientes a los índices aleatorios
// let newList = randomIndexes.map(index => originalList[index]);

// // Mostrar el resultado
// console.log(newList);