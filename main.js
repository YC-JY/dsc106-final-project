let name = ['Animal Crossing', 
   'Animal Crossing: Wild World', 
   'Animal Crossing: City Fold', 
   'Animal Crossing: New Leaf',
   'Animal Crossing: New Horizons'];
let sales = [2.32, 11.75, 4.32, 12.55, 13.41];
let gameColor = ["#b19bcb", "#f3747b", "#93d6e3", "#14c8b9", "#ecde78"]

let us = [
	{'code': 'HI', 'value': 100},
	{'code': 'WA', 'value': 96},
	{'code': 'OR', 'value': 88},
	{'code': 'UT', 'value': 80},
	{'code': 'CA', 'value': 79},
	{'code': 'NV', 'value': 76},
	{'code': 'AK', 'value': 74},
	{'code': 'WV', 'value': 73},
	{'code': 'NH', 'value': 72},
	{'code': 'MI', 'value': 72},
	{'code': 'RI', 'value': 71},
	{'code': 'MA', 'value': 67},
	{'code': 'AZ', 'value': 65},
	{'code': 'OH', 'value': 65},
	{'code': 'VA', 'value': 65},
	{'code': 'IN', 'value': 65},
	{'code': 'ME', 'value': 63},
	{'code': 'ID', 'value': 63},
	{'code': 'DE', 'value': 62},
	{'code': 'KY', 'value': 62},
	{'code': 'PA', 'value': 61},
	{'code': 'WI', 'value': 61},
	{'code': 'MD', 'value': 60},
	{'code': 'CO', 'value': 60},
	{'code': 'MN', 'value': 60},
	{'code': 'CT', 'value': 59},
	{'code': 'KS', 'value': 59},
	{'code': 'NJ', 'value': 59},
	{'code': 'OK', 'value': 59},
	{'code': 'ND', 'value': 58},
	{'code': 'IL', 'value': 58},
	{'code': 'TX', 'value': 57},
	{'code': 'IA', 'value': 57},
	{'code': 'MO', 'value': 57},
	{'code': 'NE', 'value': 57},
	{'code': 'VT', 'value': 57},
	{'code': 'FL', 'value': 56},
	{'code': 'AR', 'value': 54},
	{'code': 'TN', 'value': 52},
	{'code': 'NM', 'value': 51},
	{'code': 'NY', 'value': 49},
	{'code': 'NC', 'value': 49},
	{'code': 'LA', 'value': 48},
	{'code': 'SD', 'value': 47},
	{'code': 'MT', 'value': 47},
	{'code': 'GA', 'value': 47},
	{'code': 'WY', 'value': 46},
	{'code': 'AL', 'value': 46},
	{'code': 'SC', 'value': 46},
	{'code': 'MS', 'value': 36},
	{'code': 'DC', 'value': 35}];

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
			categories: name,
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
			data: [
				{y: sales[0], color: gameColor[0]},
				{y: sales[1], color: gameColor[1]},
				{y: sales[2], color: gameColor[2]},
				{y: sales[3], color: gameColor[3]}, 
                {y: sales[4], color: gameColor[4]}],
			showInLegend: false,
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
			type: 'timeline'},
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
			text: 'source: <a href="https://en.wikipedia.org/wiki/Animal_Crossing">www.wikipedia.org</a >'
		},
		tooltip: {
			useHTML: true,
			outside: true,
			style: {
				width: 150
			}
		},
		series: [{
			dataLabels: {
				enabled: true,
				//useHTML: true,
				outside: true,
				allowOverlap: false,
				format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
					'{point.x:%d %b %Y}</span><br/>{point.label}',
				connectorWidth: 3,
				width: 120
			},
			marker: {
				symbol: 'circle',
				lineWidth: 5,
				lineColor: null
			},
			data: [{
				x: Date.UTC(2001, 3, 14),
				name: 'Animal Crossing',
				label: 'Animal Crossing released.',
				description: 'Platform: Nintendo 64 <br> Metacritic: 87'+ 
				'<br><img src="./images/AC_cover.png"style="height:40%;width:40%;" class="center"></img><br><br><br><br>',
				color: "#b19bcb"
			}, {
				x: Date.UTC(2005, 10, 23),
				name: 'Animal Crossing: Wild World',
				label: 'Animal Crossing: Wild World released.',
				description: 'Platform: Nintendo DS <br> Metacritic: 86'+ 
				'<br><img src="./images/WW_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#f3747b"
			}, {
				x: Date.UTC(2008, 10, 16),
				name: 'Animal Crossing: City Folk',
				label: 'Animal Crossing: City Folk released.',
				description: 'Platform: Wii <br> Metacritic: 73'+ 
				'<br><img src="./images/CF_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#93d6e3"
			}, {
				x: Date.UTC(2012, 10, 8),
				name: 'Animal Crossing: New Leaf',
				label: 'Animal Crossing: New Leaf released.',
				description: 'Platform: Nintendo 3DS <br> Metacritic: 88'+ 
				'<br><img src="./images/NL_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#14c8b9"
			}, {
				x: Date.UTC(2015, 6, 30),
				name: 'Animal Crossing: Happy Home Designer',
				label: 'Animal Crossing: Happy Home Designer released.',
				description: 'Platform: Nintendo 3DS' + 
				'<br><img src="./images/HH_cover.png"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#38f8d1"
			}, {
				x: Date.UTC(2015, 10, 13),
				name: 'Animal Crossing: Amiibo Festival',
				label: 'Animal Crossing: Amiibo Festival released.',
				description: 'Platform: Wii U'+ 
				'<br><img src="./images/AF_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br><br>',
				color: "#80a5fb"
			}, {
				x: Date.UTC(2017, 10, 21),
				name: 'Animal Crossing: Pocket Camp',
				label: 'Animal Crossing: Pocket Camp released.',
				description: 'Platform: mobile'+ 
				'<br><img src="./images/PC_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#82a0aa"
			}, {
				x: Date.UTC(2020, 2, 20),
				name: 'Animal Crossing: New Horizons',
				label: 'Animal Crossing: New Horizons released.',
				description: 'Platform: Nintendo Switch <br> Metacritic: 91'+ 
				'<br><img src="./images/NH_cover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br>',
				color: "#ecde78"
			}], function (chartt) { // on complete

				chartt.renderer.image('https://www.highcharts.com/samples/graphics/sun.png',5,5,30,30)
					.add();
					
			}
		}]
	});	
}

function plotStock() {
	Highcharts.stockChart('stockChart', {
		title: {
			text: '2020 Monthly Global Hardware Sales Comparisons'
		},
		
		subtitle: {
			text: 'Source: <a href="https://www.vgchartz.com/tools/hw_date.php">www.vgchartz.com</a>'
		},
	
		plotOptions: {
			series: {
				dataGrouping: {
					smoothed: true,
				}
			}
		},
										
		xAxis: {	
			startOnTick: false,
			endOnTick: false,
			showLastLabel: true,
			title: {
				text: 'Date'
			},
			tyep: 'datetime',
			labels: {
				formatter: function() {
					return Highcharts.dateFormat('%b', this.value);
				}
			},
			tickPositioner: function () {
                var positions = [],
                    tick = Math.floor(this.dataMin),
                    increment = 1000 * 3600 * 24 * 30;

                for (tick; tick <= this.dataMax; tick += increment) {
                    positions.push(tick);
                }
                return positions;
			},
			plotLines: [{
				color: '#888',
				value: 1584687600,
				width: 1,
				label: {
					text: 'Animal Crossing: New Horizons released'
				}
			}],
		},
	
		yAxis: {
			title: {
				text: 'Units'
			},
			min: 0,
			opposite: false
		},
	
		legend: {
			enabled: true
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
		
		credits: {
			enabled: false
		},

		series: [{
			showLastLabel: true,
			cropThreshold: 1,
			name:'PS4',
			color: gameColor[1],
			data: [
			{
				x: 1578096000000,
				y: 232934
			},
			{
				x: 1578700800000,
				y: 176063
			},
			{
				x: 1579305600000,
				y: 139596
			},
			{
				x: 1579910400000,
				y: 136624
			},
			{
				x: 1580515200000,
				y: 136455
			},
			{
				x: 1581120000000,
				y: 142277
			},
			{
				x: 1581724800000,
				y: 154989
			},
			{
				x: 1582329600000,
				y: 144366
			},
			{
				x: 1582934400000,
				y: 143008
			},
			{
				x: 1583539200000,
				y: 200896
			},
			{
				x: 1584144000000,
				y: 245611
			},
			{
				x: 1584748800000,
				y: 257531
			},
			{
				x: 1585353600000,
				y: 255150
			},
			{
				x: 1585958400000,
				y: 257183
			},
			{
				x: 1586563200000,
				y: 551388
			},
			{
				x: 1587168000000,
				y: 371529
			},
			{
				x: 1587772800000,
				y: 334080
			},
			{
				x: 1588377600000,
				y: 277497
			},
			{
				x: 1588982400000,
				y: 248140
			},
			{
				x: 1589587200000,
				y: 224575
			},
			{
				x: 1590192000000,
				y: 209185
			}]
		},
		{
			showLastLabel: true,
			cropThreshold: 1,
			name:'XOne',
			color: gameColor[4],
			data: [
			{
				x: 1578096000000,
				y: 69900
			},
			{
				x: 1578700800000,
				y: 38488
			},
			{
				x: 1579305600000,
				y: 38283
			},
			{
				x: 1579910400000,
				y: 37228
			},
			{
				x: 1580515200000,
				y: 38501
			},
			{
				x: 1581120000000,
				y: 47139
			},
			{
				x: 1581724800000,
				y: 48361
			},
			{
				x: 1582329600000,
				y: 49425
			},
			{
				x: 1582934400000,
				y: 54679
			},
			{
				x: 1583539200000,
				y: 89140
			},
			{
				x: 1584144000000,
				y: 103757
			},
			{
				x: 1584748800000,
				y: 100909
			},
			{
				x: 1585353600000,
				y: 94497
			},
			{
				x: 1585958400000,
				y: 86515
			},
			{
				x: 1586563200000,
				y: 132391
			},
			{
				x: 1587168000000,
				y: 137881
			},
			{
				x: 1587772800000,
				y: 125360
			},
			{
				x: 1588377600000,
				y: 122602
			},
			{
				x: 1588982400000,
				y: 104468
			},
			{
				x: 1589587200000,
				y: 89252
			},
			{
				x: 1590192000000,
				y: 83000
			}]
		},
		{
			showLastLabel: true,
			cropThreshold: 1,
			name:'NS',
			id: 'NS',
			color: gameColor[3],
	  		lineWidth: 5,
			data: [
			{
				x: 1578096000000,
				y: 468030
			},
			{
				x: 1578700800000,
				y: 326998
			},
			{
				x: 1579305600000,
				y: 282462
			},
			{
				x: 1579910400000,
				y: 250518
			},
			{
				x: 1580515200000,
				y: 257718
			},
			{
				x: 1581120000000,
				y: 297048
			},
			{
				x: 1581724800000,
				y: 271012
			},
			{
				x: 1582329600000,
				y: 233016
			},
			{
				x: 1582934400000,
				y: 248921
			},
			{
				x: 1583539200000,
				y: 286734
			},
			{
				x: 1584144000000,
				y: 380391
			},
			{
				x: 1584748800000,
				y: 1043393
			},
			{
				x: 1585353600000,
				y: 782344
			},
			{
				x: 1585958400000,
				y: 537597
			},
			{
				x: 1586563200000,
				y: 420832
			},
			{
				x: 1587168000000,
				y: 419526
			},
			{
				x: 1587772800000,
				y: 516735
			},
			{
				x: 1588377600000,
				y: 488662
			},
			{
				x: 1588982400000,
				y: 412651
			},
			{
				x: 1589587200000,
				y: 373459
			},
			{
				x: 1590192000000,
				y: 360438
			}]
		},
		{
			showInLegend: false,
			type: 'flags',
			data: [{
				x: Date.UTC(2020, 2, 20),
				title: 'Animal Crossing: New Horizons',
				text: 'Officially released',
			}],
			onSeries: 'NS',
			y: -50,
			width: -200
		}]
	});
}
   
function plotMap() {
	Highcharts.mapChart('usMap', {
		title: {
			text: 'US Google Trends'
		},
	
		subtitle: {
			text: 'Source: <a href="https://trends.google.com/trends/explore?date=today%203-m&geo=US&q=animal%20crossing">trends.google.com</a>'
		},
	
		mapNavigation: {
			enabled: false
		},

		legend: {
            layout: 'horizontal',
            title: {
                text: 'Search Interest'
            }
        },
	
		colorAxis: {
			min: 35,
			max: 100,
            type: 'linear',
            minColor: '#ffffff',
			maxColor: '#f4e155',
		},

		plotOptions: {
			series: {
				fillOpacity: 0.3
			}
		},
		
		tooltip: { 
			formatter: function() {
				return this.point.name + ': ' + this.point.value + ' search interest'
			}
		},

		credits: {
			enabled: false
		},
	
		series: [{
			mapData: Highcharts.maps['countries/us/us-all'],
			data: us,
			joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
			},
			borderWidth: 0.2,
			borderColor: 'silver',
			states: {
				hover: {
					color: '#94d6e3',
					borderColor: '#0C3'
				},
				select: {
					color: '#7CA82B'
				}
			}
        }]
	});	
}

var pieColor = ['#f44c56', '#f3747b','#f6a8ac', '#f8d6d7', '#22d1c2', '#40e3d6', '#81efe6', '#cef8f5'];
var pieColor2 = [ '#f6323d', '#f45760','#f8a0a5', '#f8d6d7', '#0bbcad', '#2fdacc', '#6be9df', '#cef8f5'];
function plotPie() {
	Highcharts.chart('pieGame', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			type: 'pie'
		},
		subtitle: {
			text: 'source: <a href="https://newzoo.com/insights/articles/male-and-female-gamers-how-their-similarities-and-differences-shape-the-games-market/">www.earnest.com</a >',

		},
		title: {
			text: 'Console Players',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor2
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: 'Proportion',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['F10-20', 8],
				['F21-35', 14],
				['F36-50', 6],
				['F51-65', 2],
				['M10-20', 19],
				['M21-35', 34],
				['M36-50', 15],
				['M51-65', 2]
			]
		}]
	});


	Highcharts.chart('pieAnimalCrossing', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		subtitle: {
			text: 'source: <a href="https://manamina.valuesccg.com/articles/800">manamina.valuesccg.com</a >',

		},
		title: {
			text: 'Animal Crossing<br> Players',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: 'Proportion',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['F20-29', 51.3*0.505],
				['F30-39', 51.3*0.224],
				['F40-49', 51.3*0.183],
				['F50+', 51.3*0.088],
				['M20-29', 48.7*0.505],
				['M30-39', 48.7*0.224],
				['M40-49', 48.7*0.183],
				['M50+', 48.7*0.088],
			]
		}]
	});
	
}

function plotPie2() {
	var colors = Highcharts.getOptions().colors,
    categories = [
        'Female',
        'Male'
    ],
    data = [
        {
            y: 30,
            color: pieColor[0],
            drilldown: {
                name: 'Female',
                categories: [
                    'F10-20',
                    'F21-35',
                    'F36-50',
                    'F51-65'
                ],
                data: [8,14,6,2]
            }
        },
        {
            y: 70,
            color: pieColor[4],
            drilldown: {
                name: 'Male',
                categories: [
                    'M10-20',
                    'M21-35',
                    'M36-50',
                    'M51-65'
                ],
				data: [19,34,15,2]
            }
        }
    ],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.color(data[i].color).brighten(brightness).get()
        });
    }
}

// Create the chart
Highcharts.chart('pieGame2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Browser market share, January, 2018'
    },
    subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    plotOptions: {
		
        pie: {
            shadow: false,
			center: ['50%', '50%'],
			startAngle: -90,
			endAngle: 90
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: browserData,
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Versions',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                }, {
                    id: 'versions',
                    dataLabels: {
                        enabled: true
                    }
                }]
            }
        }]
    }
});

	Highcharts.chart('pieGame3', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			type: 'pie'
		},
		subtitle: {
			text: 'source: <a href="https://newzoo.com/insights/articles/male-and-female-gamers-how-their-similarities-and-differences-shape-the-games-market/">www.earnest.com</a >',

		},
		title: {
			text: 'Age/Gender of<br>Core Gamers',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: 'Proportion',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['F10-20', 8],
				['F21-35', 14],
				['F36-50', 6],
				['F51-65', 2],
				['M10-20', 19],
				['M21-35', 34],
				['M36-50', 15],
				['M51-65', 2]
			]
		}]
	});


	Highcharts.chart('pieAnimalCrossing2', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		subtitle: {
			text: 'source: <a href="https://manamina.valuesccg.com/articles/800">manamina.valuesccg.com</a >',

		},
		title: {
			text: 'Age/Gender of<br>Animal Crossing Players',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: 'Proportion',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['F20-29', 51.3*0.505],
				['F30-39', 51.3*0.224],
				['F40-49', 51.3*0.183],
				['F50', 51.3*0.088],
				['M20-29', 48.7*0.505],
				['M30-39', 48.7*0.224],
				['M40-49', 48.7*0.183],
				['M50+', 48.7*0.088],
			]
		}]
	});
	
}

function init(){
	plotTimeline();
	plotBar();
	plotPie();
	plotStock();
	plotMap();
}