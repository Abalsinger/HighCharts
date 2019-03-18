$(function () {
    $.getJSON('trends.json', function(data) {
    
    	$('#container').highcharts({
    	
		    chart: {
		        type: 'column'
		    },
		    
		    title: {
		        text: 'Temperature variation by day'
		    },
		
		    xAxis: {
		        type: 'datetime'
		    },
		    
		    yAxis: {
		        title: {
		            text: null
		        }
		    },
		
		    tooltip: {
		        crosshairs: true,
		        shared: true,
		        valueSuffix: '°C'
		    },
		    
		    legend: {
		        enabled: false
		    },
		
		    series: [{
		        name: 'Temperatures',
		        data: data,
		        color: '#FF0000',
		        negativeColor: '#0088FF'
		    }]
		
		});
    });
    
});