// GET A SINGLE CHARACTER

let characters = [];

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

displayCharacterEpisodes();