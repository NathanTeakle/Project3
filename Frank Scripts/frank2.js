window.onload = function () {

var chart = new CanvasJS.Chart("frank2", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Sports with the Highest Earnings"
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
			{ y: 27.24, name: "Basketball", exploded: true },
			{ y: 15.28, name: "Boxing" },
			{ y: 14.62, name: "Golf" },
			{ y: 11.96, name: "Auto Racing" },
			{ y: 10.96, name: "Soccer" },
			{ y: 7.64, name: "Tennis" },
			{ y: 6.64, name: "American Football" },
			{ y: 5.66, name: "Others" }
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


