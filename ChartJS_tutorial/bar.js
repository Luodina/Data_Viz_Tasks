// DATA 
let barChartLabel = '# of Places'
let barChartLabels =["Private room", "Entire home/apt", "Shared room"];
let bar_private = 0, bar_entire = 0, bar_shared = 0;

for (i = 0; i < listings.length; i++) {
    let item = listings[i];
    if (item["room_type"] === "Private room") {
        bar_private++;
    } else if (item["room_type"] === "Entire home/apt") {
        bar_entire++;
    } else if (item["room_type"] === "Shared room") {
        bar_shared++; 
    }
}

let barChartData= [bar_private, bar_entire, bar_shared]
var barBckGrndColor =[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ]
let barBrdrColor=[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
//console.log("barChartData", barChartData)
//Chart template with data
let barChartCtx =document.getElementById('barChart').getContext('2d');
let barChart = new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: barChartLabels,
            datasets: [{
                label: [barChartLabel],
                data: barChartData,
                backgroundColor: barBckGrndColor,
                borderColor:barBrdrColor,
                borderWidth: 1
            }]
        }
    });