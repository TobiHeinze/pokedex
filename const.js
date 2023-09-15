
const CONFIG_BG_COLOR = [
	'rgba(255, 99, 132, 0.9)',
	'rgba(54, 162, 235, 0.9)',
	'rgba(255, 206, 86, 0.9)',
	'rgba(75, 192, 192, 0.9)',
	'rgba(153, 102, 255, 0.9)',
	'rgba(255, 159, 64, 0.9)'
]

const CONFIG_BORDER_COLOR = [
	'rgba(255, 99, 132, 1)',
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)'
]

const CONFIG_CHART_OPTIONS = {
	plugins: {
		datalabels: {
			anchor: 'center',
			align: 'center',
			font: {
				weight: 'bold',
				size: 7
			}
		},
		legend: {
			display: false,
		}
	},
	indexAxis: 'y',
	scales: {
		y: {
			beginAtZero: true,
			ticks: {
				font: {
					weight: 'bold',
					size: 7,
				}
			}
		},
		x: {
			ticks: {
				font: {
					weight: 'bold',
					size: 7,
				}
			}
		},
	}
}

const COLOR_TYPES = {
	"normal": "rgba(168, 167, 122, 1)",
	"fire": "rgba(238, 129, 48, 1)",
	"water": "rgba(99, 144, 240, 1)",
	"electric": "rgba(247, 208, 44, 1)",
	"grass": "rgba(122, 199, 76, 1)",
	"ice": "rgba(150, 217, 214, 1)",
	"fighting": "rgba(194, 46, 40, 1)",
	"poison": "rgba(163, 62, 161, 1)",
	"ground": "rgba(226, 191, 101, 1)",
	"flying": "rgba(169, 143, 243, 1)",
	"psychic": "rgba(249, 85, 135, 1)",
	"bug": "rgba(166, 185, 26, 1)",
	"rock": "rgba(182, 161, 54, 1)",
	"ghost": "rgba(115, 87, 151, 1)",
	"dragon": "rgba(111, 53, 252, 1)",
	"dark": "rgba(112, 87, 70, 1)",
	"steel": "rgba(183, 183, 206, 1)",
	"fairy": "rgba(214, 133, 173, 1)",
	"unknown": "rgba(104, 160, 144, 1)",
	"shadow": "rgba(66, 77, 97, 1)"
}

const COLOR_TYPES_LIGHT = {
	"normal": "rgba(186, 185, 137, 1)",
	"fire": "rgba(252, 158, 84, 1)",
	"water": "rgba(139, 171, 255, 1)",
	"electric": "rgba(255, 228, 83, 1)",
	"grass": "rgba(151, 221, 109, 1)",
	"ice": "rgba(177, 243, 240, 1)",
	"fighting": "rgba(226, 72, 66, 1)",
	"poison": "rgba(187, 92, 187, 1)",
	"ground": "rgba(243, 213, 126, 1)",
	"flying": "rgba(186, 163, 255, 1)",
	"psychic": "rgba(255, 120, 154, 1)",
	"bug": "rgba(188, 204, 38, 1)",
	"rock": "rgba(205, 182, 80, 1)",
	"ghost": "rgba(144, 116, 168, 1)",
	"dragon": "rgba(133, 72, 255, 1)",
	"dark": "rgba(144, 116, 93, 1)",
	"steel": "rgba(202, 202, 225, 1)",
	"fairy": "rgba(236, 155, 191, 1)",
	"unknown": "rgba(174, 206, 185, 1)",
	"shadow": "rgba(112, 127, 140, 1)"
}