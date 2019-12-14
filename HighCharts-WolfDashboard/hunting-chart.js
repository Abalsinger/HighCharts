Highcharts.chart('huntingChartPie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Composition of Prey'
    },
    subtitle: {
        text: 'Based on confirmed wolf kills inside Yellowstone'
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
            name: 'Elk',
            y: 79,
            sliced: true,
            selected: true
        }, {
            name: 'Bison',
            y: 6
        }, {
            name: 'Deer',
            y: 3
        }, {
            name: 'Moose',
            y: 3
        }, {
            name: 'Coyotes',
            y: 1
        }, {
            name: 'Other Animals',
            y: 8
        }]
    }]
});