let name = ['Animal Crossing', 
			'Animal Crossing: Wild World', 
			'Animal Crossing: City Fold', 
			'Animal Crossing: New Leaf',
			'Animal Crossing: New Horizons'];
let sales = [2.32, 11.75, 4.32, 12.55, 13.41];
let gameColor = ["#b19bcb", "#f3747b", "#93d6e3", "#14c8b9", "#ecde78"];

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
	{'code': 'DC', 'value': 35}
];

let words = [
	{'name': 'island', 'weight': 14}, 
	{'name': 'celeste', 'weight': 10},
	{'name': 'time', 'weight': 9},
	{'name': 'cute', 'weight': 8},
	{'name': 'day', 'weight': 8},
	{'name': 'turnip', 'weight': 7},
	{'name': 'love', 'weight': 6},
	{'name': 'wedding', 'weight': 6},
	{'name': 'code', 'weight': 6},
	{'name': 'dodo', 'weight': 5},
	{'name': 'villager', 'weight': 5},
	{'name': 'price', 'weight': 5},
	{'name': 'outfit', 'weight': 5},
	{'name': 'boxes', 'weight': 4},
	{'name': 'room', 'weight': 4},
	{'name': 'friends', 'weight': 4},
	{'name': 'happy', 'weight': 4},
	{'name': 'summer', 'weight': 4},
	{'name': 'treasure', 'weight': 4},
	{'name': 'dodocode', 'weight': 4},
	{'name': 'bells', 'weight': 4},
	{'name': 'wearing', 'weight': 4},
	{'name': 'lol', 'weight': 4},
	{'name': 'free', 'weight': 4},
	{'name': 'flowers', 'weight': 4},
	{'name': 'don', 'weight': 4},
	{'name': 'appreciated', 'weight': 4},
	{'name': 'catalog', 'weight': 4},
	{'name': 'finally', 'weight': 4},
	{'name': 'good', 'weight': 4},
	{'name': 'move', 'weight': 3},
	{'name': 'items', 'weight': 3},
	{'name': 'play', 'weight': 3},
	{'name': 'perfect', 'weight': 3},
	{'name': 'things', 'weight': 3},
	{'name': 'cutest', 'weight': 3},
	{'name': 'acnhtrade', 'weight': 3},
	{'name': 'heart', 'weight': 3},
	{'name': 'birthday', 'weight': 3},
	{'name': 'decided', 'weight': 3},
	{'name': 'acn', 'weight': 3},
	{'name': 'stars', 'weight': 3},
	{'name': 'shirt', 'weight': 3},
	{'name': 'reneigh', 'weight': 5},
	{'name': 'singing', 'weight': 5},
	{'name': 'join', 'weight': 5},
	{'name': 'link', 'weight': 4},
	{'name': 'click', 'weight': 4},
	{'name': '♡♡rt', 'weight': 4},
	{'name': 'making', 'weight': 4},
	{'name': 'hey', 'weight': 4},
	{'name': '♡♡…', 'weight': 4},
	{'name': 'turnipsexchange', 'weight': 4},
	{'name': 'nook', 'weight': 4},
	{'name': 'cyrus', 'weight': 3},
	{'name': 'party', 'weight': 3},
	{'name': 'night', 'weight': 3},
	{'name': 'reese', 'weight': 3},
	{'name': 'shower', 'weight': 3},
	{'name': 'meteor', 'weight': 3},
	{'name': 'interested', 'weight': 3}
];

let date = [
	{'x': 1, 'y': 4, 'value': '1 <br> Keaton', 'description': '<img src="https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/Keaton_NH.png/revision/latest/scale-to-width-down/350?cb=20200521051358" srcset="https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/Keaton_NH.png/revision/latest/scale-to-width-down/350?cb=20200521051358 1x, https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/Keaton_NH.png/revision/latest?cb=20200521051358 2x" class="pi-image-thumbnail" alt="" width="270" height="332" data-image-key="Keaton_NH.png" data-image-name="Keaton NH.png">'},
	{'x': 2, 'y': 4, 'value': '2 <br> Lucy', 'description': '<img alt="Lucy, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/e/e5/Lucy_NH.png/175px-Lucy_NH.png" decoding="async" width="175" height="324" srcset="https://dodo.ac/np/images/thumb/e/e5/Lucy_NH.png/263px-Lucy_NH.png 1.5x, https://dodo.ac/np/images/thumb/e/e5/Lucy_NH.png/350px-Lucy_NH.png 2x">'},
	{'x': 3, 'y': 4, 'value': '3 <br> Filbert', 'description': '<img alt="Filbert, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/3/34/Filbert_NH_2.png/200px-Filbert_NH_2.png" decoding="async" width="200" height="243" srcset="https://dodo.ac/np/images/thumb/3/34/Filbert_NH_2.png/300px-Filbert_NH_2.png 1.5x, https://dodo.ac/np/images/3/34/Filbert_NH_2.png 2x">'},
	{'x': 4, 'y': 4, 'value': '4 <br> Reneigh', 'description': '<img alt="Reneigh, an Animal Crossing villager." src="https://dodo.ac/np/images/9/92/Reneigh_NH.png" decoding="async" width="200" height="286">'},
	{'x': 5, 'y': 4, 'value': '5 <br> Camofrog', 'description': '<img alt="Camofrog, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/d/d5/Camofrog_NLa.png/150px-Camofrog_NLa.png" decoding="async" width="150" height="232" srcset="https://dodo.ac/np/images/thumb/d/d5/Camofrog_NLa.png/225px-Camofrog_NLa.png 1.5x, https://dodo.ac/np/images/thumb/d/d5/Camofrog_NLa.png/300px-Camofrog_NLa.png 2x">'},
	{'x': 6, 'y': 4, 'value': '6 <br> Lyle & Raddle', 'description': '<img src="https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/LyleNL.png/revision/latest/scale-to-width-down/350?cb=20140725170531" srcset="https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/LyleNL.png/revision/latest/scale-to-width-down/350?cb=20140725170531 1x, https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/LyleNL.png/revision/latest/scale-to-width-down/700?cb=20140725170531 2x" class="pi-image-thumbnail" alt="" width="270" height="332" data-image-key="LyleNL.png" data-image-name="LyleNL.png"> <img src="https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/Raddle_HD.png/revision/latest/scale-to-width-down/350?cb=20180518162935" srcset="https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/Raddle_HD.png/revision/latest/scale-to-width-down/350?cb=20180518162935 1x, https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/Raddle_HD.png/revision/latest?cb=20180518162935 2x" class="pi-image-thumbnail" alt="" width="330" height="332" data-image-key="Raddle_HD.png" data-image-name="Raddle HD.png">'},
	{'x': 0, 'y': 3, 'value': '7 <br> Zell', 'description': '<img alt="Zell, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/c/c0/Zell_NH.png/175px-Zell_NH.png" decoding="async" width="175" height="294" srcset="https://dodo.ac/np/images/thumb/c/c0/Zell_NH.png/263px-Zell_NH.png 1.5x, https://dodo.ac/np/images/thumb/c/c0/Zell_NH.png/350px-Zell_NH.png 2x">'},
	{'x': 1, 'y': 3, 'value': '8 <br> Peanut', 'description': '<img alt="Peanut, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/d/d5/Peanut_NH.png/175px-Peanut_NH.png" decoding="async" width="175" height="173" srcset="https://dodo.ac/np/images/thumb/d/d5/Peanut_NH.png/263px-Peanut_NH.png 1.5x, https://dodo.ac/np/images/thumb/d/d5/Peanut_NH.png/350px-Peanut_NH.png 2x">'},
	{'x': 2, 'y': 3, 'value': '9 <br> Alfonso', 'description': '<img src="https://vignette.wikia.nocookie.net/animalcrossing/images/d/d8/Alfonso_NewHorizons.png/revision/latest?cb=20200408175408" srcset="https://vignette.wikia.nocookie.net/animalcrossing/images/d/d8/Alfonso_NewHorizons.png/revision/latest?cb=20200408175408 1x, https://vignette.wikia.nocookie.net/animalcrossing/images/d/d8/Alfonso_NewHorizons.png/revision/latest?cb=20200408175408 2x" class="pi-image-thumbnail" alt="" width="220" height="332" data-image-key="Alfonso_NewHorizons.png" data-image-name="Alfonso NewHorizons.png">'},
	{'x': 3, 'y': 3, 'value': '10 <br> Walker', 'description': '<img alt="Walker, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/0/0f/Walker_NH.png/175px-Walker_NH.png" decoding="async" width="175" height="291" srcset="https://dodo.ac/np/images/thumb/0/0f/Walker_NH.png/263px-Walker_NH.png 1.5x, https://dodo.ac/np/images/thumb/0/0f/Walker_NH.png/350px-Walker_NH.png 2x">'},
	{'x': 4, 'y': 3, 'value': '11 <br> Pudge', 'description': '<img alt="Pudge, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/8/87/Pudge_NH.png/175px-Pudge_NH.png" decoding="async" width="175" height="305" srcset="https://dodo.ac/np/images/thumb/8/87/Pudge_NH.png/263px-Pudge_NH.png 1.5x, https://dodo.ac/np/images/thumb/8/87/Pudge_NH.png/350px-Pudge_NH.png 2x">'},
	{'x': 5, 'y': 3, 'value': '12 <br> Bettina', 'description': '<img alt="Bettina, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/b/bd/Bettina_NH.png/175px-Bettina_NH.png" decoding="async" width="175" height="263" srcset="https://dodo.ac/np/images/thumb/b/bd/Bettina_NH.png/263px-Bettina_NH.png 1.5x, https://dodo.ac/np/images/thumb/b/bd/Bettina_NH.png/350px-Bettina_NH.png 2x">'},
	{'x': 6, 'y': 3, 'value': '13 <br> Scoot', 'description': '<img alt="Scoot, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/e/ec/Scoot_NH.png/175px-Scoot_NH.png" decoding="async" width="175" height="276" srcset="https://dodo.ac/np/images/thumb/e/ec/Scoot_NH.png/263px-Scoot_NH.png 1.5x, https://dodo.ac/np/images/thumb/e/ec/Scoot_NH.png/350px-Scoot_NH.png 2x">'},
	{'x': 0, 'y': 2, 'value': '14 <br> Pippy', 'description': '<img alt="Pippy, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/a/a1/Pippy_NH.png/175px-Pippy_NH.png" decoding="async" width="175" height="354" srcset="https://dodo.ac/np/images/thumb/a/a1/Pippy_NH.png/263px-Pippy_NH.png 1.5x, https://dodo.ac/np/images/thumb/a/a1/Pippy_NH.png/350px-Pippy_NH.png 2x">'},
	{'x': 1, 'y': 2, 'value': '15 <br> Maple', 'description': '<img alt="Maple, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/a/a2/Maple_NH.png/175px-Maple_NH.png" decoding="async" width="175" height="305" srcset="https://dodo.ac/np/images/thumb/a/a2/Maple_NH.png/263px-Maple_NH.png 1.5x, https://dodo.ac/np/images/thumb/a/a2/Maple_NH.png/350px-Maple_NH.png 2x">'},
	{'x': 2, 'y': 2, 'value': '16 <br> Roscoe', 'description': '<img alt="Roscoe, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/8/8e/Roscoe_NH.png/200px-Roscoe_NH.png" decoding="async" width="200" height="353" srcset="https://dodo.ac/np/images/thumb/8/8e/Roscoe_NH.png/300px-Roscoe_NH.png 1.5x, https://dodo.ac/np/images/thumb/8/8e/Roscoe_NH.png/400px-Roscoe_NH.png 2x">'},
	{'x': 3, 'y': 2, 'value': '17 <br> Spike & Tangy', 'description': '<img alt="Spike, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/1/13/Spike_NL.png/200px-Spike_NL.png" decoding="async" width="200" height="367" srcset="https://dodo.ac/np/images/1/13/Spike_NL.png 1.5x"> <img alt="Tangy, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/6/6f/Tangy_NH.png/175px-Tangy_NH.png" decoding="async" width="175" height="367" srcset="https://dodo.ac/np/images/thumb/6/6f/Tangy_NH.png/263px-Tangy_NH.png 1.5x, https://dodo.ac/np/images/thumb/6/6f/Tangy_NH.png/350px-Tangy_NH.png 2x">'},
	{'x': 4, 'y': 2, 'value': '18 <br> Cookie', 'description': '<img alt="Cookie, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/d/d9/Cookie_NH.png/175px-Cookie_NH.png" decoding="async" width="175" height="291" srcset="https://dodo.ac/np/images/thumb/d/d9/Cookie_NH.png/263px-Cookie_NH.png 1.5x, https://dodo.ac/np/images/thumb/d/d9/Cookie_NH.png/350px-Cookie_NH.png 2x">'},
	{'x': 5, 'y': 2, 'value': '19 <br> Sally', 'description': '<img alt="Sally, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/5/54/Sally_NLa.png/175px-Sally_NLa.png" decoding="async" width="175" height="233" srcset="https://dodo.ac/np/images/thumb/5/54/Sally_NLa.png/263px-Sally_NLa.png 1.5x, https://dodo.ac/np/images/thumb/5/54/Sally_NLa.png/350px-Sally_NLa.png 2x">'},
	{'x': 6, 'y': 2, 'value': '20 <br> Graham', 'description': '<img alt="Graham, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/a/a1/Graham_NH.png/150px-Graham_NH.png" decoding="async" width="150" height="219" srcset="https://dodo.ac/np/images/thumb/a/a1/Graham_NH.png/225px-Graham_NH.png 1.5x, https://dodo.ac/np/images/thumb/a/a1/Graham_NH.png/300px-Graham_NH.png 2x">'},
	{'x': 0, 'y': 1, 'value': '21 <br> Sydney', 'description': '<img alt="Sydney, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/3/3f/Sydney_NH.png/175px-Sydney_NH.png" decoding="async" width="175" height="209" srcset="https://dodo.ac/np/images/thumb/3/3f/Sydney_NH.png/263px-Sydney_NH.png 1.5x, https://dodo.ac/np/images/thumb/3/3f/Sydney_NH.png/350px-Sydney_NH.png 2x">'},
	{'x': 1, 'y': 1, 'value': '22 <br> Jacques', 'description': '<img alt="Jacques, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/0/03/Jacques_NH.png/175px-Jacques_NH.png" decoding="async" width="175" height="330" srcset="https://dodo.ac/np/images/thumb/0/03/Jacques_NH.png/263px-Jacques_NH.png 1.5x, https://dodo.ac/np/images/thumb/0/03/Jacques_NH.png/350px-Jacques_NH.png 2x">'},
	{'x': 2, 'y': 1, 'value': '23 <br> Tammy', 'description': '<img alt="Tammy, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/a/aa/Tammy_NH.png/175px-Tammy_NH.png" decoding="async" width="175" height="305" srcset="https://dodo.ac/np/images/thumb/a/aa/Tammy_NH.png/263px-Tammy_NH.png 1.5x, https://dodo.ac/np/images/thumb/a/aa/Tammy_NH.png/350px-Tammy_NH.png 2x">'},
	{'x': 3, 'y': 1, 'value': '24 <br> Bluebear', 'description': '<img alt="Bluebear, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/4/49/Bluebear_NH.png/200px-Bluebear_NH.png" decoding="async" width="200" height="349" srcset="https://dodo.ac/np/images/thumb/4/49/Bluebear_NH.png/300px-Bluebear_NH.png 1.5x, https://dodo.ac/np/images/thumb/4/49/Bluebear_NH.png/400px-Bluebear_NH.png 2x">'},
	{'x': 4, 'y': 1, 'value': '25 <br> Drake', 'description': '<img alt="Drake, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/e/e0/Drake_NH.png/175px-Drake_NH.png" decoding="async" width="175" height="276" srcset="https://dodo.ac/np/images/thumb/e/e0/Drake_NH.png/263px-Drake_NH.png 1.5x, https://dodo.ac/np/images/thumb/e/e0/Drake_NH.png/350px-Drake_NH.png 2x">'},
	{'x': 5, 'y': 1, 'value': '26 <br> Marina', 'description': '<img alt="Marina, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/2/25/Marina_NH.png/175px-Marina_NH.png" decoding="async" width="175" height="302" srcset="https://dodo.ac/np/images/thumb/2/25/Marina_NH.png/263px-Marina_NH.png 1.5x, https://dodo.ac/np/images/thumb/2/25/Marina_NH.png/350px-Marina_NH.png 2x">'},
	{'x': 6, 'y': 1, 'value': '27 <br> Deena', 'description': '<img alt="Deena, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/b/b8/Deena_NH.png/175px-Deena_NH.png" decoding="async" width="175" height="276" srcset="https://dodo.ac/np/images/thumb/b/b8/Deena_NH.png/263px-Deena_NH.png 1.5x, https://dodo.ac/np/images/thumb/b/b8/Deena_NH.png/350px-Deena_NH.png 2x">'},
	{'x': 0, 'y': 0, 'value': '28 <br> Kidd', 'description': '<img alt="Kidd, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/7/7a/Kidd_NH.png/200px-Kidd_NH.png" decoding="async" width="200" height="278" srcset="https://dodo.ac/np/images/thumb/7/7a/Kidd_NH.png/300px-Kidd_NH.png 1.5x, https://dodo.ac/np/images/thumb/7/7a/Kidd_NH.png/400px-Kidd_NH.png 2x">'},
	{'x': 1, 'y': 0, 'value': '29 <br> Merry', 'description': '<img alt="Merry, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/4/4f/Merry_NH.png/175px-Merry_NH.png" decoding="async" width="175" height="367" srcset="https://dodo.ac/np/images/thumb/4/4f/Merry_NH.png/263px-Merry_NH.png 1.5x, https://dodo.ac/np/images/thumb/4/4f/Merry_NH.png/350px-Merry_NH.png 2x">'},
	{'x': 2, 'y': 0, 'value': '30 <br> Broccolo & Weber', 'description': '<img alt="Broccolo, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/8/89/Broccolo_NLa.png/175px-Broccolo_NLa.png" decoding="async" width="175" height="271" srcset="https://dodo.ac/np/images/thumb/8/89/Broccolo_NLa.png/263px-Broccolo_NLa.png 1.5x, https://dodo.ac/np/images/8/89/Broccolo_NLa.png 2x"> <img alt="Weber, an Animal Crossing villager." src="https://dodo.ac/np/images/thumb/6/66/Weber_NH.png/200px-Weber_NH.png" decoding="async" width="200" height="316" srcset="https://dodo.ac/np/images/thumb/6/66/Weber_NH.png/300px-Weber_NH.png 1.5x, https://dodo.ac/np/images/thumb/6/66/Weber_NH.png/400px-Weber_NH.png 2x">'}
];

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
			text: 'source: <a href="https://en.wikipedia.org/wiki/Animal_Crossing">www.wikipedia.org</a >'
		},
		tooltip: {
			style: {
				width: 150
			}
		},
		series: [{
			dataLabels: {
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
				x: Date.UTC(2001, 4, 14),
				name: 'Animal Crossing',
				label: 'Animal Crossing',
				description: 'Platform: Nintendo 64 <br> Metacritic: 87',
				color: "#b19bcb"
			}, {
				x: Date.UTC(2005, 11, 23),
				name: 'Animal Crossing: Wild World',
				label: 'Animal Crossing: Wild World',
				description: 'Platform: Nintendo DS <br> Metacritic: 86',
				color: "#f3747b"
			}, {
				x: Date.UTC(2008, 11, 16),
				name: 'Animal Crossing: City Folk',
				label: 'Animal Crossing: City Folk',
				description: 'Platform: Wii <br> Metacritic: 73',
				color: "#93d6e3"
			}, {
				x: Date.UTC(2012, 11, 8),
				name: 'Animal Crossing: New Leaf',
				label: 'Animal Crossing: New Leaf',
				description: 'Platform: Nintendo 3DS <br> Metacritic: 88',
				color: "#14c8b9"
			}, {
				x: Date.UTC(2020, 3, 20),
				name: 'Animal Crossing: New Horizons',
				label: 'Animal Crossing: New Horizons',
				description: 'Platform: Nintendo Switch <br> Metacritic: 91',
				color: "#ecde78"
			}, {
				x: Date.UTC(2015, 7, 30),
				name: 'Animal Crossing: Happy Home Designer',
				label: 'Animal Crossing: Happy Home Designer',
				description: 'Platform: Nintendo 3DS',
				color: "#38f8d1"
			}, {
				x: Date.UTC(2015, 11, 13),
				name: 'Animal Crossing: Amiibo Festival',
				label: 'Animal Crossing: Amiibo Festival',
				description: 'Platform: Wii U',
				color: "#80a5fb"
			}, {
				x: Date.UTC(2017, 11, 21),
				name: 'Animal Crossing: Pocket Camp',
				label: 'Animal Crossing: Pocket Camp',
				description: 'Platform: mobile',
				color: "#82a0aa"
			}]
		}]
	});
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
			}
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
				title: 'ACNH officially released',
				text: 'large spike',
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
			text: "US Google Trends of Keyword 'Animal Crossing'"
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
var pieColor2 = ['#8e025a', '#e6027e', '#f39ac1', '#fbdeeb', '#122659', '#18407d', '#819fc4', '#d4dee9'];
function plotPie() {
	Highcharts.chart('pieGame', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
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
				['M50', 48.7*0.088],
			]
		}]
	});
}

function plotCloud() {
	var rectangularEgg = function cloud(t) {
		t *= 0.01;
		return {
			x: t * Math.cos(t) * 2,
			y: t * Math.sin(t) 
		};
	};    
		
	Highcharts.seriesTypes.wordcloud.prototype.spirals.rectangular = rectangularEgg;

	Highcharts.chart('wordCloud', {
		accessibility: {
			screenReaderSection: {
				beforeChartFormat: '<h5>{chartTitle}</h5>' +
					'<div>{chartSubtitle}</div>' +
					'<div>{chartLongdesc}</div>' +
					'<div>{viewTableButton}</div>'
			}
		},

		title: {
			text: 'Wordcloud of Animal Crossing on Twitter'
		},

		subtitle: {
			text: 'Source: Tweetroot app'
		},

		credits: {
			enabled: false
		},

		series: [{
			type: 'wordcloud',
			data: words,
			spiral: "rectangular", 
			rotation: {
				from: 0,
				to: 0
			},
			name: 'Relative Prominence'
		}]
	});
}

function plotCalendar() {
	Highcharts.chart('calendar', {
		chart: {
			type: 'heatmap',
		},
	  
		title: {
			text: 'June Calendar'
		},

		credits: {
			enabled: false
		},
	  
		xAxis: {
			categories: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
			opposite: true
		},
	  
		yAxis: {
		  	visible: false
		},
	  
		legend: {
		 	enabled: false
		},
	  
		plotOptions: {
			series: {
				borderWidth: 1,
				borderColor: "#000000",
			}
		},

		tooltip: {
			formatter: function() {
				return 'June ' + this.point.value + '<br>' + this.point.description;
			},
			useHTML: true,
		},
	  
		series: [{
			name: 'date',
			color: '#cdbddc',
			data: date,
			dataLabels: {
				enabled: true,
				align: 'left', 
				x: 30,
				style: {
					color: 'white',
					fontSize: '13px',
					textOutline: false
				}
			}
		}]	
	});
}

function init() { 
	plotTimeline();
	plotBar();
	plotStock();
	plotMap();
	plotPie();
	plotCloud();
	plotCalendar();
}