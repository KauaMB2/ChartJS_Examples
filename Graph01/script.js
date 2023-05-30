const ct1 = document.getElementById('barChart')

new Chart(ct1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'DATASET1',
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
            backgroundColor: [//It defines the bar background color
                'rgba(255,0,0,0.7)',
                'rgba(0,0,255,0.7)',
                'rgba(255, 255, 0, 0.7)',
                'rgba(0, 128, 0,0.7)',
                'rgba(28, 0, 128, 0.7)',
                'rgba(255, 165, 0, 0.7)'
            ]
        },
        {
            label: "DATASET2",
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
            backgroundColor: [//It defines the bar background color
                'rgba(128,0,0,1.0)',
                'rgba(0,0,128,1.0)',
                'rgba(128, 128, 0,1.0)',
                'rgba(0, 64, 0,1.0)',
                'rgba(14, 0, 64, 1.0)',
                'rgba(128, 82, 0, 1.0)'
            ]
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true//true-> It start in zero | false-> It is set automaticly 
            },
        }
    }
})

const ct2 = document.getElementById('lineChart')
new Chart(ct2, {
    type: 'line',
    data: {
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
        datasets: [{
            label: 'Pink',
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 10,//It defines the border width
            borderColor://It defines the line color
                'rgba(255,0,200,0.7)'
        },
        {
            label: "Gray",
            data: [5, 7, 20, 8, 2, 8],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
            //borderColor:
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true//true-> It start in zero | false-> It is set automaticly 
            }
        }
    }
})

const ct3 = document.getElementById('pieChart')
new Chart(ct3, {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
        datasets: [{
            label: 'Pie Chart',
            data: [300, 50, 100, 200, 500, 800, 200, 340, 500, 100],
            backgroundColor: [//It defines the bar background color
                'rgba(255,99,132,1.0)',
                'rgba(54,162,235,1.0)',
                'rgba(255,205,86,1.0)',
                'rgba(75,192,192,1.0)',
                'rgba(153,102,255,1.0)',
                'rgba(255,159,64,1.0)',
                'rgba(220,220,220,1.0)',
                'rgba(128,0,128,1.0)',
                'rgba(0,128,0,1.0)',
                'rgba(255,0,0,1.0)'
            ]
        }]
    }
})

const ct4 = document.getElementById('doughnutChart')
new Chart(ct4, {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
        datasets: [{
            label: 'Pie Chart',
            data: [300, 50, 100, 200, 500, 800, 200, 340, 500, 100],
            backgroundColor: [//It defines the bar background color
                'rgba(255,99,132,1.0)',
                'rgba(54,162,235,1.0)',
                'rgba(255,205,86,1.0)',
                'rgba(75,192,192,1.0)',
                'rgba(153,102,255,1.0)',
                'rgba(255,159,64,1.0)',
                'rgba(220,220,220,1.0)',
                'rgba(128,0,128,1.0)',
                'rgba(0,128,0,1.0)',
                'rgba(255,0,0,1.0)'
            ]
        }]
    }
})

const ct5 = document.getElementById('barChartModified')

new Chart(ct5, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'DATASET1',
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
            backgroundColor: [//It defines the bar background color
                'rgba(255,0,0,0.7)',
                'rgba(0,0,255,0.7)',
                'rgba(255, 255, 0, 0.7)',
                'rgba(0, 128, 0,0.7)',
                'rgba(28, 0, 128, 0.7)',
                'rgba(255, 165, 0, 0.7)'
            ]
        },
        {
            label: "DATASET2",
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
            backgroundColor: [//It defines the bar background color
                'rgba(128,0,0,1.0)',
                'rgba(0,0,128,1.0)',
                'rgba(128, 128, 0,1.0)',
                'rgba(0, 64, 0,1.0)',
                'rgba(14, 0, 64, 1.0)',
                'rgba(128, 82, 0, 1.0)'
            ]
        }
        ]
    },
    options: {
        scales: {
            yAxes: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            bar: {//Sets bar properties
                borderColor: 'rgba(0,0,0,1)',//border color
                borderWidth: 5,// border width
                borderRadius: 10// border radius
            }
        }
    }
})

const ct6 = document.getElementById('lineChartModified')
new Chart(ct6, {
    type: 'line',
    data: {
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
        datasets: [{
            label: 'Pink',
            data: [8, 16, 14, 5, 10, 15],//It defines the info will be shown
            borderWidth: 10,//It defines the border width
            borderColor: 'rgba(255,0,200,0.7)',//It defines the line color
            backgroundColor: 'rgba(255,0,200,0.3)'//It defines the background color of the line below part
        },
        {
            label: "Gray",
            data: [5, 7, 20, 8, 2, 8],//It defines the info will be shown
            borderWidth: 3,//It defines the border width
        }
        ]
    },
    options: {
        scales: {
            yAxes: {
                grid: {
                    display: false
                }
            },
            xAxes: {
                grid: {
                    display: false
                }
            },
        },
        elements: {
            line: {
                fill: true,//fill or not the line bellow part
                borderWidth: 5,//width
                borderRadius: 10,//radius
                tension: 0.5//curves
            },
        }

    }
})