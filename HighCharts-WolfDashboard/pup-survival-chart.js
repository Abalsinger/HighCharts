
// Now create the chart
Highcharts.chart('pupGraphArea', {
    
    chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600
        }
    },

    title: {
        text: 'Pup Survival Rate'
    },

    subtitle: {
        text: '**Click and drag to enable zoom feature**'
    },
    
    annotations: [{
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2010,
                y: 50
            },
            text: 'Wolf Hunting Legalized Around Yellowstone'
        }       ]
    }],

    yAxis: {
        title: {
            text: 'Number of Pups'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1997
        }
    },

    series: [{
        name: 'Pups Born',
        data: [65,38,64,70,45,65,75,90,70,75,85,78,48,45,58,39,45,50,35,36,21,38]
    },{
        name: 'Pups Survived',
        data: [40,32,38,60,45,48,59,60,24,60,65,22,24,38,35,20,41,40,35,36,21,24 ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});