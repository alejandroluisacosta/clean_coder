let characters = [];

const requestAllCharacters = async() => {
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
    await testFunc();
    const body = document.querySelector('body');
    const character = document.createElement('div');
    character.innerHTML = characters[0].name;
    body.appendChild(character);
}

addCharacter();