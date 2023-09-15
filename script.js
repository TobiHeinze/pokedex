
let allPokemons = [];
let loadingIndex = 30;
let barChartLabels = ['HP', 'Attack', 'Defense', 'Sp.Atk', 'Sp.Def', 'Speed']
let barChartDataSet = []
let barChart;


async function loadPokedex() {
	for (let i = loadingIndex - 30; i < loadingIndex; i++) {
		let url = `${allPokemonNames[0]['results'][i]['url']}`;
		let response = await fetch(url);
		currentPokemon = await response.json();
		allPokemons.push(currentPokemon);
	}
	renderSmallCardHtml();
}

function renderSmallCardHtml() {
	for (let i = loadingIndex - 30; i < allPokemons.length; i++) {
		document.getElementById('pokedex').innerHTML += smallCardHtml(i);
	}
	renderSmallCardInfo();
}

function smallCardHtml(i) {
	return `<div onclick="openBigCard(${i})" class="smallCard">
		<div id="id-section"># ${allPokemons[i]['id']}</div>
		<div id="main-section">
			<div id="name-section">${allPokemons[i]['name']}</div>
			<img src="${allPokemons[i]['sprites']['other']['home']['front_default']}">
			<div id="type-section">
				<div id="type1-section${i}">${allPokemons[i]['types'][0]['type']['name']}</div>
				<div class="type2-section" id="type2-section${i}"></div>
			</div>
		</div>
	</div>
	`;
}

function renderSmallCardInfo() {
	for (let i = loadingIndex - 30; i < allPokemons.length; i++) {
		document.getElementsByClassName('smallCard')[i].style.background = COLOR_TYPES[allPokemons[i]['types'][0]['type']['name']];
		document.getElementById(`type1-section${i}`).style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][0]['type']['name']];
		if (allPokemons[i]['types'].length > 1) {
			document.getElementById(`type2-section${i}`).innerHTML = allPokemons[i]['types'][1]['type']['name'];
			document.getElementById(`type2-section${i}`).style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][1]['type']['name']];
		} else {
			document.getElementById(`type2-section${i}`).classList.add('d-none');
		}
	}
}

function increaseIndex() {
	loadingIndex += 30;
	loadPokedex();
}

function openBigCard(i) {
	document.getElementById('card_container').classList.remove('d-none');
	renderBigCardInfo(i);
}

function renderBigCardInfo(i) {
	document.getElementById('pokemonName').innerHTML = allPokemons[i]['name'];
	document.getElementById('pokemonType1').innerHTML = allPokemons[i]['types'][0]['type']['name'];
	document.getElementById('pokemonId').innerHTML = `#${allPokemons[i]['id']}`;
	document.getElementById('pokemonImg').src = allPokemons[i]['sprites']['other']['home']['front_default'];
	document.getElementById('card-big').style.background = COLOR_TYPES[allPokemons[i]['types'][0]['type']['name']];
	document.getElementById('pokemonType1').style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][0]['type']['name']];

	renderBigCardSecondTypeInfo(i);
	renderNavigationButtons(i);
	renderBarChartDataSet(i);
	drawBarChart();
}

function renderBigCardSecondTypeInfo(i) {
	if (allPokemons[i]['types'].length > 1) {
		document.getElementById('pokemonType2').classList.remove('d-none');
		document.getElementById('pokemonType2').innerHTML = allPokemons[i]['types'][1]['type']['name'];
		document.getElementById('pokemonType2').style.background = COLOR_TYPES_LIGHT[allPokemons[i]['types'][1]['type']['name']];
	} else {
		document.getElementById('pokemonType2').classList.add('d-none');
	}
}

function renderNavigationButtons(i) {
	document.getElementById('btn-left').innerHTML = `
		<div class="btn-direction" onclick="doNotClose(event), clickForLeft(${i})"><img
							src="./img/btn-right.png"></div>
	`;
	document.getElementById('btn-right').innerHTML = `
		<div class="btn-direction" onclick="doNotClose(event), clickForRight(${i})"><img
							src="./img/btn-right.png"></div>
	`;
}

function renderBarChartDataSet(i) {
	barChartDataSet.length = 0;
	for (let j = 0; j < 6; j++) {
		barChartDataSet.push(allPokemons[i]['stats'][j]['base_stat']);
	}
}

function clickForLeft(i) {
	if (i > 0) {
		i--;
	} else {
		i = allPokemons.length - 1;
	}
	renderBigCardInfo(i);
}

function clickForRight(i) {
	if (i < allPokemons.length - 1) {
		i++;
	} else {
		i = 0;
	}
	renderBigCardInfo(i);
}

function clickToClose() {
	document.getElementById('card_container').classList.add('d-none');
}

function doNotClose(event) {
	event.stopPropagation();
}
