// GET A SINGLE CHARACTER

// let characters = [];

const getAllCharacters = async() => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (response.ok) {
            const jsonData = await response.json();
            if (jsonData.results) {
                characters = jsonData.results;
                console.log(characters);
            }
        }
    }
    catch (error) {
        console.log(error)
    };
}

const addCharacter = async() => {
    await getAllCharacters();
    const body = document.querySelector('body');
    const character = document.createElement('div');
    character.innerHTML = characters[0].name;
    body.appendChild(character);
}
// addCharacter();

// GET A CHARACTER WITH ALL THEIR EPISODES

let singleCharacter = null;

const getSingleCharacter = async() => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        if (response.ok) {
            const jsonData = await response.json();
            singleCharacter = jsonData;
        }
    }
    catch (error) {
        console.log(error);
    }
}


const getCharacterEpisodes = async() => {
    const body = document.querySelector('body');
    const characterName = document.createElement('h1');
    characterName.innerHTML = singleCharacter.name;
    body.appendChild(characterName);
    const episodesURL = singleCharacter.episode;
    for (let i = 0; i < episodesURL.length; i++) {
        const response = await fetch(episodesURL[i]);
        if (response.ok) {
            const jsonData = await response.json();
            const episodeName = document.createElement('p');
            episodeName.innerHTML = jsonData.name;
            body.appendChild(episodeName);
        }
    }
}

const displayCharacterEpisodes = async() => {
    await getSingleCharacter();
    await getCharacterEpisodes();
}

// displayCharacterEpisodes();

// DISPLAY THE NAMES AND IMAGES OF ALL THE CHARACTERS THAT APPEAR ON A CERTAIN EPISODE
const episode = 1;
let characterUrls = [];
let characters = [];

// Fetch the list of urls for each characters from the episode
const getCharacterUrls = async() => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`);
        if (response.ok) {
            const jsonData = await response.json();
            characterUrls = jsonData.characters;
        }
    }
    catch (error) {
        console.log(error);
    }
}


// Fetch the name and the image url of each character from the list of urls
const getCharactersInfo = async() => {
    await getCharacterUrls();
    for (let i = 0; i < characterUrls.length; i++) {
        await getSingleCharacterInfo(characterUrls[i]);
    }
}

// Fetch each individual character and push to characters array
const getSingleCharacterInfo = async(url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonData = await response.json();
            const characterName = jsonData.name;
            const characterImage = jsonData.image;
            characters.push({ name: characterName, image: characterImage });
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Display list of characters
const displayCharacters = async() => {
    await getCharactersInfo();
    const body = document.querySelector('body');
    characters.forEach(character => {
        const characterElementHTML = document.createElement('div');

        const characterName = document.createElement('p');
        characterName.innerHTML = character.name;

        const characterImage = document.createElement('img');
        characterImage.src = character.image;

        characterElementHTML.appendChild(characterName);
        characterElementHTML.appendChild(characterImage);
        body.appendChild(characterElementHTML);
    })
}
displayCharacters();