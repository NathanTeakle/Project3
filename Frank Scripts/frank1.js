window.onload = function () {

var chart = new CanvasJS.Chart("frank1", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Nationality with the Highest Earnings"
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 68.44, name: "United States", exploded: true },
			{ y: 4.32, name: "UK" },
			{ y: 4.32, name: "Germany" },
			{ y: 3.99, name: "Switzerland" },
			{ y: 3.32, name: "Portugal" },
			{ y: 15.61, name: "Others" },
		]
	}]
});
chart.render();
}


function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}

