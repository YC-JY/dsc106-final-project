const series = [['Animal Crossing', 'GameCube', 2001, 2.32],
				['Wild World', 'NDS', 2005, 11.75],
				['City Fold', 'Wii', 2008, 4.32],
				['New Leaf', '3DS', 2013, 12.55],
				['New Horizons', 'Switch', 2020, 13.41]]

let store = {
	name : [],
	platform : [],
	year : [],
	sales : []
};

for (var i = 0; i < series.length; i++) {
	var s = series[i];
	store.name.push(s[0]);
	store.platform.push(s[1]);
	store.year.push(s[2]);
	store.sales.push(s[3]);
}

function plotBar() {
	Highcharts.chart('seriesSales', {
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Series Sales'
		},
		subtitle: {
			text: 'Source: <a href="https://vgsales.fandom.com/wiki/Animal_Crossing">www.fandom.com</a>'
		},
		xAxis: {
			categories: store.name,
			title: {
				text: 'Series'
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Sales (millions)'
			}
		},
		tooltip: {
			showAll: true,
			shared: true
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Sales',
			data: store.sales,
			showInLegend: false
		}]
	});
}

function plotTimeline() {
	Highcharts.chart('timeline', {
		credits: {
			enabled: false
		},
		chart: {
			zoomType: 'x',
			type: 'timeline'
		},
		xAxis: {
			type: 'datetime',
			visible: false
		},
		yAxis: {
			gridLineWidth: 1,
			title: null,
			labels: {
				enabled: false
			}
		},
		legend: {
			enabled: false
		},
		title: {
			text: 'Timeline of Animal Crossing'
		},
		subtitle: {
			text: 'source: <a href=" ">www.wikipedia.org</a >'
		},
		tooltip: {
			style: {
				width: 300
			}
		},
		series: [{
			dataLabels: {
				allowOverlap: false,
				format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
					'{point.x:%d %b %Y}</span><br/>{point.label}'
			},
			marker: {
				symbol: 'circle'
			},
			data: [{
				x: Date.UTC(2001, 4, 14),
				name: 'Animal Crossing',
				label: 'Animal Crossing',
				description: 'Platform: Nintendo 64 <br> Metacritic: 87'
			}, {
				x: Date.UTC(2005, 11, 23),
				name: 'Animal Crossing: Wild World',
				label: 'Animal Crossing: Wild World',
				description: 'Platform: Nintendo DS <br> Metacritic: 86'
			}, {
				x: Date.UTC(2008, 11, 16),
				name: 'Animal Crossing: City Folk',
				label: 'Animal Crossing: City Folk',
				description: 'Platform: Wii <br> Metacritic: 73'
			}, {
				x: Date.UTC(2012, 11, 8),
				name: 'Animal Crossing: New Leaf',
				label: 'Animal Crossing: New Leaf',
				description: 'Platform: Nintendo 3DS <br> Metacritic: 88'
			}, {
				x: Date.UTC(2020, 3, 20),
				name: 'Animal Crossing: New Horizons',
				label: 'Animal Crossing: New Horizons',
				description: 'Platform: Nintendo Switch <br> Metacritic: 91'
			}, {
				x: Date.UTC(2015, 7, 30),
				name: 'Animal Crossing: Happy Home Designer',
				label: 'Animal Crossing: Happy Home Designer',
				description: 'Platform: Nintendo 3DS'
			}, {
				x: Date.UTC(2015, 11, 13),
				name: 'Animal Crossing: Amiibo Festival',
				label: 'Animal Crossing: Amiibo Festival',
				description: 'Platform: Wii U'
			}, {
				x: Date.UTC(2017, 11, 21),
				name: 'Animal Crossing: Pocket Camp',
				label: 'Animal Crossing: Pocket Camp',
				description: 'Platform: mobile'
			}]
		}]
	});
}

function init(){
	plotTimeline();
	plotBar();
}