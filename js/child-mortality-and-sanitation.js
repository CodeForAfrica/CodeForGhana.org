var settings = {sanitation: {}, mortality: {}};
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	drawSanitationChart();
	drawUnder5Chart();
}

function setSanitationGraphFilter() {
	if ($('.san-chart-filter:checked').length <= 0) {
		$('.san-chart-filter:last').prop('checked', true);
	}
	settings.sanitation.chartFilter = $('.san-chart-filter:checked').val();
}

function drawSanitationChart() {
	var chart, options, data;
	setSanitationGraphFilter();

	data = new google.visualization.arrayToDataTable([
		['Year', '% of Population with Access'],
		['2010', 13.7],
		['2011', 14],
		['2012', 14.4],
		['2013', 14.7],
		['2014', 14.8],
		['2015', 14.9]
	]);

	options = {
	    height: 500,
	    vAxis: {title: '% of Population with Access'}
	  };

  if (settings.sanitation.chartFilter == 'bargraph') 
  	chart = new google.visualization.ColumnChart(document.getElementById('sanviz'));
  else 
  	chart = new google.visualization.LineChart(document.getElementById('sanviz'));

  chart.draw(data, options);
}

/**
* Child mortality chart filters
*/
function setMortalityChartFilter() {
  if ($('.mor-chart-filter:checked').length <= 0) {
    $('.mor-chart-filter:last').prop('checked', true);
  }
  settings.mortality.chartFilter = $('.mor-chart-filter:checked').val();
}

/* Under 5 mortality chart */
function drawUnder5Chart() {
  var data, options, chart;
  setMortalityChartFilter();

  data = new google.visualization.arrayToDataTable([
      ['Year', 'Under 5 Deaths Per 1,000 live births', 'Infant Deaths per 1,000 live births', 'Neonatal Deaths per 1,000 live births'],
      ['2010', 75, 50, 32],
      ['2011', 72, 49, 31],
      ['2012', 69, 47, 31],
      ['2013', 67, 46, 30],
      ['2014', 64, 44, 29],
      ['2015', 62, 43, 28]
    ]);

  options = {
        height: 500,
        vAxis: {title: 'Mortality Rate'},
        hAxis: {title: 'Year'}
      };

  if (settings.mortality.chartFilter == 'bargraph')
    chart = new google.visualization.ColumnChart(document.getElementById('childmortalityviz'));
  else 
    chart = new google.visualization.LineChart(document.getElementById('childmortalityviz'));

  chart.draw(data, options);
}