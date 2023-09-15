

let numberAllPokemon = []
let allPokemonNames = []
let foundPokemonUrls = []

async function loadAllPokemonNames() {  // produziert nur ein Array mit dem Namen und der URL von allen existierenden Pokemon
	await loadNumberOfAllPokemon();
	let numberOfAllPokemon = numberAllPokemon[0]['count'];
	let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${numberOfAllPokemon}`;
	let responseNames = await fetch(url);
	namesOfAll = await responseNames.json();
	allPokemonNames.push(namesOfAll);
	loadPokedex();
}

async function loadNumberOfAllPokemon() {  // nur um an die maximale Anzahl an Pokemon zu kommen (ändert sich gerne)
	let url = 'https://pokeapi.co/api/v2/pokemon';
	let responseNumber = await fetch(url);
	numberOfAll = await responseNumber.json();
	numberAllPokemon.push(numberOfAll);
}

function searchForPokemon() {
	foundPokemonUrls = [];
	let searchTerm = document.getElementById('search-field').value.toLowerCase();
	for (let i = 0; i < allPokemonNames[0]['results'].length; i++) {
		let nameOfPokemon = allPokemonNames[0]['results'][i]['name'];
		if (nameOfPokemon.includes(searchTerm)) {
			foundPokemonUrls.push(allPokemonNames[0]['results'][i]['url']);
		}
	}
	loadFoundPokemonInfo();
}

async function loadFoundPokemonInfo() {
	for (let i = 0; i < foundPokemonUrls.length; i++) {
		let url = `${foundPokemonUrls[i]}`;
		let responseFound = await fetch(url);
		let foundPokemonInfos = await responseFound.json();
		allPokemons.push(foundPokemonInfos);
	}
	renderSmallCardHtmlFound();
}

function renderSmallCardHtmlFound() {
	document.getElementById('search-field').value = ``;
	document.getElementById('pokedex-search').classList.remove('d-none');
	document.getElementById('pokedex').classList.add('d-none');
	document.getElementById('button').classList.add('d-none');
	for (let i = loadingIndex; i < allPokemons.length; i++) {
		document.getElementById('pokedex-search').innerHTML += smallCardHtml(i);
	}
	renderSmallCardInfoFound();
}

function renderSmallCardInfoFound() {
	for (let i = loadingIndex; i < allPokemons.length; i++) {
		document.getElementsByClassName('smallCard')[i-loadingIndex].style.background = COLOR_TYPES[allPokemons[i]['types'][0]['type']['name']];
		document.getElementById(`type1-section${i}`).style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][0]['type']['name']];
		if (allPokemons[i]['types'].length > 1) {
			document.getElementById(`type2-section${i}`).innerHTML = allPokemons[i]['types'][1]['type']['name'];
			document.getElementById(`type2-section${i}`).style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][1]['type']['name']];
		} else {
			document.getElementById(`type2-section${i}`).classList.add('d-none');
		}
	}
}

function refreshSearch() {
	document.getElementById('pokedex-search').innerHTML = ``;
	document.getElementById('search-field').value = ``;
	document.getElementById('pokedex-search').classList.add('d-none');
	document.getElementById('pokedex').classList.remove('d-none');
	document.getElementById('button').classList.remove('d-none');

	allPokemons.splice(loadingIndex, foundPokemonUrls.length);
	renderSmallCardInfo();
}
