Highcharts.chart('mortalityChartPie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Causes of Death'
    },
    subtitle: {
        text: 'Based on confirmed wolf deaths inside Yellowstone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percent',
        colorByPoint: true,
        data: [{
            name: 'Shot Legally',
            y: 24,
            sliced: true,
            selected: true
        }, {
            name: 'Shot Illegally',
            y: 4
        }, {
            name: 'Vehicle',
            y: 7
        }, {
            name: 'Enviromental Causes',
            y: 30
        }, {
            name: 'Internal Pack Strife ',
            y: 16
        }, {
            name: 'External Pack Strife',
            y: 7
        }, {
            name: 'Disease',
            y: 7
        }]
    }]
});