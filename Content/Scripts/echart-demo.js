var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
    type: 'value'
    },
    series: [
    {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
        }
    }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

ue.interface.ue2js = function (ueData) {
    var jsonObj = JSON.parse(ueData);
    myChart.setOption(jsonObj);

    ue4("js2ue", "/odom");
};