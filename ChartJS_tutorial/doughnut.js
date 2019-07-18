 // DATA 
let airbnbData = listings;
let doughnutChartLabels = [
    "< 500HKD",
    "500HKD-1000HKD",
    "1000HKD-2000HKD",
    "2000HKD-4000HKD",
    ">4000HKD"
];
let doughnut_priceLt500 = 0,
    doughnut_priceLt1000 = 0,
    doughnut_priceLt2000 = 0,
    doughnut_priceLt4000 = 0,
    doughnut_priceGt3999 = 0;


for (i = 0; i < listings.length; i++) {
    let item = listings[i];
    // get data for Doughnut Chart
    if (item["price"] < 500) {
        doughnut_priceLt500++
    } else if (item["price"] < 1000) {
        doughnut_priceLt1000++
    } else if (item["price"] < 2000) {
        doughnut_priceLt2000++
    } else if (item["price"] < 4000) {
        doughnut_priceLt4000++
    } else if (item["price"] > 3999) {
        doughnut_priceGt3999++;
    }
}
let doughnutChartLabel = '# of Places'
let doughnutChartData= [doughnut_priceLt500,
        doughnut_priceLt1000,
        doughnut_priceLt2000,
        doughnut_priceLt4000,
        doughnut_priceGt3999]
let doughnutBckGrndColor =[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
let doughnutBrdrColor=[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ]
//Chart template with data            
let doughnutChartCtx =document.getElementById('doughnutChart').getContext('2d');
let doughnutChart = new Chart(doughnutChartCtx, {
        type: 'doughnut',
        data: {
            labels: doughnutChartLabels,
            datasets: [{
                label: [doughnutChartLabel],
                data: doughnutChartData,
                backgroundColor: doughnutBckGrndColor,
                borderColor:doughnutBrdrColor,
                borderWidth: 1
            }]
        }
    });