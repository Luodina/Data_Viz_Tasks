let pie_dataset= {};
for (i = 0; i < listings.length; i++) {
    let item = listings[i];
    if (item["price"] > 3999) {
        if (pie_dataset[item["room_type"]]) {
            pie_dataset[item["room_type"]] = pie_dataset[item["room_type"]] + 1;
        } else {
            pie_dataset[item["room_type"]] = 1;
        }
    }
}
let pieChartLabels =barChartLabels;
let pieChartLabel = ['# of Votes', '# of Votes', '# of Votes']
let pieChartData = [
                    pie_dataset[barChartLabels[0]],
                    pie_dataset[barChartLabels[1]],
                    pie_dataset[barChartLabels[2]]
                ]

let pieBckGrndColor =[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ]

let pieBrdrColor=[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
console.log("pieChartData",pieChartData)
let pieChartCtx =document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(pieChartCtx, {
        type: 'pie',
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: pieChartLabel,
                data: pieChartData,
                backgroundColor: pieBckGrndColor,
                borderColor:pieBrdrColor,
                borderWidth: 1
            }]
        }
    });