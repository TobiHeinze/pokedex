
function drawBarChart() {
	Chart.register(ChartDataLabels);
	Chart.defaults.font.family = "Roboto";
	Chart.defaults.color = '#000000';
	const ctx = document.getElementById('barChart');

	if (barChart) {
		barChart.clear();
		barChart.destroy();
	}

	barChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: barChartLabels,
			color: '#d8eb34',
			datasets: [{
				data: barChartDataSet,
				backgroundColor: CONFIG_BG_COLOR,
				borderColor: CONFIG_BORDER_COLOR,
				borderWidth: 1
			}],
		},
		options: CONFIG_CHART_OPTIONS
	});
}

