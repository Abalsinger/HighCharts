  

Highcharts.chart('funnelMapContainer', {
    chart: {
        type: 'funnel'
    },
    title: {
        text: 'Funnel Map'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            },
            center: ['40%', '50%'],
            neckWidth: '30%',
            neckHeight: '25%',
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Unique users',
        data: [
            ['Bandwidth', 15654],
            ['Downloads', 4064],
            ['Uploads', 1987],
            ['Requests sent', 976],
            ['Finalized', 846]
        ]
    }]
});