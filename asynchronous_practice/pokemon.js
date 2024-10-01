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

displayPokemonSkills();