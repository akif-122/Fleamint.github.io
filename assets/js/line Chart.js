
window.onload = function () {

var chart = new CanvasJS.Chart("lineContainer", {
	title: {
		// text: "House Median Price"
	},
	axisX: {
		valueFormatString: "MMM YYYY",
		gridThickness: 0,
	},
	axisY:{
        gridThickness: 1,
        // gridColor: "transparent",
      },
	axisY2: {
		// title: "Median List Price",
		prefix: "$",
		suffix: "K",

	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"line",
		axisYType: "secondary",
		name: "San Fransisco",
		color: "#02B434",

		// showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [		
			{ x: new Date(2014, 00, 01), y: 850 },
			{ x: new Date(2014, 01, 01), y: 889 },
			{ x: new Date(2014, 02, 01), y: 890 },
			{ x: new Date(2014, 03, 01), y: 899 },
			{ x: new Date(2014, 04, 01), y: 903 },
			{ x: new Date(2014, 05, 01), y: 925 },
			{ x: new Date(2014, 06, 01), y: 899 },
			{ x: new Date(2014, 07, 01), y: 875 },
			{ x: new Date(2014, 08, 01), y: 927 },
			{ x: new Date(2014, 09, 01), y: 949 },
			{ x: new Date(2014, 10, 01), y: 946 },
			{ x: new Date(2014, 11, 01), y: 927 },
			
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Manhattan",
		// showInLegend: true,
		color: "#F5585B",
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 1200 },
			{ x: new Date(2014, 01, 01), y: 1200 },
			{ x: new Date(2014, 02, 01), y: 1190 },
			{ x: new Date(2014, 03, 01), y: 1180 },
			{ x: new Date(2014, 04, 01), y: 1250 },
			{ x: new Date(2014, 05, 01), y: 1270 },
			{ x: new Date(2014, 06, 01), y: 1300 },
			{ x: new Date(2014, 07, 01), y: 1300 },
			{ x: new Date(2014, 08, 01), y: 1358 },
			{ x: new Date(2014, 09, 01), y: 1410 },
			{ x: new Date(2014, 10, 01), y: 1480 },
			{ x: new Date(2014, 11, 01), y: 1500 },
			
		]
	},
	
	{
		type: "line",
		axisYType: "primary",
		name: "Los Angeles",
		showInLegend: false,
		color: "#000000",

		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 529 },
			{ x: new Date(2014, 01, 01), y: 540 },
			{ x: new Date(2014, 02, 01), y: 539 },
			{ x: new Date(2014, 03, 01), y: 565 },
			{ x: new Date(2014, 04, 01), y: 575 },
			{ x: new Date(2014, 05, 01), y: 579 },
			{ x: new Date(2014, 06, 01), y: 589 },
			{ x: new Date(2014, 07, 01), y: 579 },
			{ x: new Date(2014, 08, 01), y: 579 },
			{ x: new Date(2014, 09, 01), y: 579 },
			{ x: new Date(2014, 10, 01), y: 569 },
			{ x: new Date(2014, 11, 01), y: 525 },
			
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}