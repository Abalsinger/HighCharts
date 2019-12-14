Highcharts.chart('ageChartStacked', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Age Dispersion'
    },
    xAxis: {
        categories: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Wolves'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Surviving Pups',
        data: [40,32,38,60,45,48,59,60,24,60,65,22,24,38,35,20,41,40,35,36,21,24]
    }, {
        name: 'Breeding Pairs',
        data: [14, 6, 14, 16, 18, 16, 12, 16, 16, 12, 12, 20, 20, 14, 32, 26, 44, 26, 26, 20, 12, 18]
    }, {
        name: 'Other Adults',
        data: [22, 59, 56, 22, 41, 31, 12, 22, 57, 24, 47, 129, 92, 66, 104, 128, 187, 134, 116, 62, 79, 47]
    }]
});
