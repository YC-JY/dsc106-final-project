// Global constants
const DEBUG = true;
const DINGUS_PRICE = 14.25;
const WIDGET_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);

let initial_data = [['NORTHAMERICA', 0],
					['SOUTHAMERICA', 0],
					['EUROPE', 0],
					['AFRICA', 0],
					['ASIA', 0],
					['AUSTRALIA', 0],
					['ANTARCTICA', 0]];				

function plotSales(sales) {
	Highcharts.mapChart('myMap', {
		chart: {
			map: 'custom/world-continents',
			height: 500
		},
		title: {
			text: ''
		},
		tooltip: { 
			formatter: function() {
				return this.point.name;
			}
		},
		series: [{
			data: initial_data,
			showInLegend: false,
			states: {
				hover: {
					color: '#0C3',
					borderColor: '#0C3'
				},
				select: {
					color: '#7CA82B'
				}
			},
			allowPointSelect: true,
			color: 'gainsboro',
			borderWidth: 0.3,
			borderColor: 'silver',
            dataLabels: {
				enabled: true,
				color: 'black',
				format: '{point.name}',
				style: {
					fontSize: '13px',
					textOutline: false 
				}
            }
		}],
		plotOptions: {
			series: {
				events: {
					click: function (e) {
						let continent = e.point.name;
						continent = continent.replace('<br/>', '');
						
						let d_sales = [];
						let w_sales = [];
						let months = [];
						let dinguses = 0;
						let widgets = 0;

						let records = sales[continent];
						for (var i = 0; i < records.length; i++) {
							let d = records[i]['Dingus'];
							let w = records[i]['Widget'];
							d_sales.push(d);
							w_sales.push(w);
							months.push(records[i]['Month']);
							dinguses += d;
							widgets += w;
						}

						let revenue = DINGUS_PRICE * dinguses + WIDGET_PRICE * widgets;
						select('dingusSold').innerHTML = dinguses;
						select('widgetSold').innerHTML = widgets;
						select('totalSales').innerHTML = revenue.toFixed(2);
						plotColumn(d_sales, w_sales, months);
						plotPie(dinguses, widgets);
					}
				}
			}
		}
	})
}

function plotColumn(d_sales, w_sales, months) {
	Highcharts.chart('salesPerMonthChart', {
		title: {
			text: 'Monthly Sales',
			style: {
				fontWeight: 'bold',
				fontSize: '23px'
			}
		},
		legend: {
			align: 'right',
			verticalAlign: 'top',
			layout: 'vertical',
			floating: true,
			borderWidth: 1,
			borderColor: 'lightgrey',
      		itemMarginTop: 3,
			itemMarginBottom: 3,
			symbolRadius: 0
		},
		xAxis: {
			categories: months,
			title: {
				text: 'Month',
				style: {
					color: 'black',
					fontWeight: 'bold'
				}
			},
			lineColor: 'grey',
			tickColor: 'grey',
			tickWidth: 1,
			tickLength: 5,
			tickmarkPlacement: 'on'
		},
		yAxis: {
			title: {
				text: 'Number of units sold',
				style: {
					color: 'black',
					fontWeight: 'bold'
				}
			}, 
			min: 0,
			lineWidth: 1,
			lineColor: 'grey',
			tickColor: 'grey',
			tickWidth: 1,
			tickLength: 5
		},
		tooltip: {
			formatter: function() {
				return this.y;
			}
		},
		series: [{
			data: d_sales,
			color: '#29a3cc',
			name: 'Dinguses'
		}, {
			data: w_sales,
			color: '#d31f1e',
			name: 'Widgetes'
		}]
	});
}

function plotPie(dinguses, widgets) {
	let chart = Highcharts.chart('totalSalesChart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Total Sales',
			style: {
				fontWeight: 'bold',
				fontSize: '23px'
			}
		},
		legend: {
			align: 'right',
			verticalAlign: 'top',
			layout: 'vertical',
			floating: true,
			borderWidth: 1,
			borderColor: 'lightgrey',
      		itemMarginTop: 3,
			itemMarginBottom: 3
		},
		tooltip: {
			formatter: function() {
				return Math.round(this.point.percentage / 100 * (dinguses + widgets));
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true
			}
		},
		series: [{
			colorByPoint: true,
			showInLegend: true,
			startAngle: 90,
			data: [{
				name: 'Dinguses',
				y: dinguses / (dinguses + widgets),
				selected: true,
				color: '#29a3cc'
			}, {
				name: 'Widgets',
				y: widgets / (dinguses + widgets),
				selected: true,
				color: '#d31f1e'
			}], 
			dataLabels: {
                enabled: true,
                format: '<br>{point.percentage:.1f} %',
				distance: -60,
				color: 'white',
				style: {
					fontSize: '20px',
					textOutline: false 
				}
			}
		}]
	});

	if (dinguses == 0 && widgets == 0) {
		chart.destroy();
	}
}

function plotStocks(stocks) {
	let data = [];
	for (datum of stocks) {
		data.push([parseFloat(datum['Date']), datum['Adj Close']]);
	}

	Highcharts.stockChart('stockChart', {
        title: {
			text: 'Dynamic Growth',
			style: {
				fontWeight: 'bold',
				fontSize: '23px'
			}
        },
        subtitle: {
			text: 'Stock Prices of D&W Corp. from 2015-Present',
			style: {
				fontWeight: 'bold',
				fontSize: '13px'
			}
		},
		xAxis: [{
			title: {
				text: 'Date',
				style: {
					color: 'black',
					fontWeight: 'bold'
				}
			}, 
			type: 'datetime', 
			labels: {
				formatter: function() {
					let month = parseInt(Highcharts.dateFormat('%m', this.value));
					let day = parseInt(Highcharts.dateFormat('%d', this.value)) - 1;
					return month + '/' + day + '/' + Highcharts.dateFormat('%y', this.value);
				}
			},
			lineColor: 'grey',
			tickColor: 'grey',
			tickWidth: 1,
			tickLength: 5,
			tickPositioner: function () {
				var positions = [],
				 tick = Math.floor(this.dataMin),
				 increment = Math.ceil((this.dataMax - this.dataMin) / 12);
			 
				if (this.dataMax !== null && this.dataMin !== null) {
				 for (tick; tick - increment <= this.dataMax; tick += increment) {
				  positions.push(tick);
				 }
				}
				return positions;
			},
			crosshair: {
				color: 'grey',
				label: {
					enabled: true,
					backgroundColor: 'grey',
					padding: 10,
					formatter: function(e) {
						let month = parseInt(Highcharts.dateFormat('%m', e));
						let day = parseInt(Highcharts.dateFormat('%d', e)) - 1;
						return month + '/' + day + '/' + Highcharts.dateFormat('%y', e);
					}
				}
			}
		}],
		yAxis: [{
			title: {
				text: 'Adj Close Stock Price',
				style: {
					color: 'black',
					fontWeight: 'bold'
				}
			},
			labels: {
				y: 4
			},
			lineWidth: 1,
			lineColor: 'grey',
			gridLineDashStyle: 'shortdot',
			tickInterval: 20,
			tickColor: 'grey',
			tickWidth: 1,
			tickLength: 5,
			opposite: false,
			crosshair: {
				color: 'grey',
				label: {
					enabled: true,
					padding: 10,
					format: '{value:.0f}'
				}
			}
		}],
		tooltip: {
			shared: true,
			headerFormat: '',
			formatter: function() {
				return '$ '+ this.y.toFixed(2);
			}
        },
		navigator: {
			enabled: false
		},
		rangeSelector: {
			enabled: false
		},
		scrollbar: {
            enabled: false
		},
		plotOptions: {
			series: {
				fillOpacity: 0.3,
				states: {
					hover: {
						lineWidthPlus: 0
					}
				}
			}
		},
		series: [{
            name: 'Close Price',
            type: 'area',
			data: data,
			color: '#29a3cc',
			threshold: null
        }]
    });
}

async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

function init() {
	salesPromise = loadJSON('./data/sales.json');
	stocksPromise = loadJSON('./data/stocks.json');
	salesPromise.then(function (sales) {
		plotSales(sales);
	});
	stocksPromise.then(function (stocks) {
		plotStocks(stocks);
	});
}

document.addEventListener('DOMContentLoaded', init, false);
