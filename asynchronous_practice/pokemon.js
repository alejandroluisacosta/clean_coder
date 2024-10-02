// DISPLAY THE SKILLS OF ONE POKEMON

let pokemon;

const getPokemon = async() => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/5');
        if (response.ok) {
            const jsonData = await response.json();
            pokemon = jsonData;
        }
    }
    catch (error) {
        console.log(error)
    }
}


const displayPokemonSkills = async() => {
    await getPokemon();
    const body = document.querySelector('body');
    const skills = pokemon.abilities;
    const pokemonName = document.createElement('p')
    pokemonName.innerHTML = pokemon.name;
    body.appendChild(pokemonName);
    skills.forEach(skill => {
        const skillElement = document.createElement('p');
        skillElement.innerHTML = skill.ability.name;
        body.appendChild(skillElement);
    })
}

// displayPokemonSkills();

// DISPLAY THE NAMES OF ALL POKEMONS WITH A CERTAIN SKILL

let skill = 'rain-dish';
let pokemonsWithCertainSkill = [];

const getPokemonsWithCertainSkill = async() => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (response.ok) {
            const jsonData = await response.json();
            const allPokemons = jsonData.results;
            for (let i = 1; i <= allPokemons.length; i++) {
                const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                if (response.ok) {
                    const jsonData2 = await response2.json();
                    const pokemonName = jsonData2.name;
                    const pokemonSkills = jsonData2.abilities;
                    for (let j = 0; j < pokemonSkills.length; j++) {
                        if (pokemonSkills[j].ability.name === skill)
                            pokemonsWithCertainSkill.push(pokemonName);
                    }
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayPokemonsWithCertainSkill = async() => {
    try {
        await getPokemonsWithCertainSkill();
        const body = document.querySelector('body');
        const exerciseTitle = document.createElement('h2');
        exerciseTitle.innerHTML = `Pokemons with ${skill} ability`;
        body.appendChild(exerciseTitle);
        for (let i = 0; i < pokemonsWithCertainSkill.length; i++) {
            const pokemonElementHTMl = document.createElement('p');
            pokemonElementHTMl.innerHTML = pokemonsWithCertainSkill[i];
            body.appendChild(pokemonElementHTMl);
        }
    }
    catch (error) {
        console.log(error);
    }
}

displayPokemonsWithCertainSkill();