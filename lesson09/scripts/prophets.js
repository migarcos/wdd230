const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h3'); // original h2
        let paragraph = document.createElement('p');
        let portrait = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        paragraph.textContent = `Birth: ${prophet.birthdate}  Birthplace: ${prophet.birthplace}`

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '204'); // 340
        portrait.setAttribute('height', '264'); // 440
    
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(paragraph)
        card.appendChild(portrait);
    
        cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    // console.log(data.prophets);   // another option
    displayProphets(data.prophets);
}

getProphetData();

