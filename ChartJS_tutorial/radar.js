        let radar_avg_private_price = 0,
            radar_avg_entire_price = 0,
            radar_avg_shared_price = 0,
            radar_shared_price = 0, 
            radar_entire_price = 0, 
            radar_private_price = 0;

        for (i = 0; i < listings.length; i++) {
            let item = listings[i];
            // get data Bar chart & Radar Chart
            if (item["room_type"] === "Private room") {
                //bar_private++;
                radar_private_price = radar_private_price + item["price"];
               
            } else if (item["room_type"] === "Entire home/apt") {
                //bar_entire++;
                radar_entire_price = radar_entire_price + item["price"];
                
            } else if (item["room_type"] === "Shared room") {
                //bar_shared++
                radar_shared_price = radar_shared_price + item["price"];
            }
        }

        // get data for Radar Chart
        radar_avg_private_price = radar_private_price / bar_private;
        radar_avg_entire_price = radar_entire_price / bar_entire;
        radar_avg_shared_price = radar_shared_price / bar_shared;

        let radarChartLabel = 'AVG Price for Accomodation';
        let radarChartData = [radar_avg_private_price, radar_avg_entire_price, radar_avg_shared_price];
        let radarBckGrndColor =[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ];
        let radarBrdrColor=[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ];

        let radarChartCtx =document.getElementById('radarChart').getContext('2d');
        let radarChart = new Chart(radarChartCtx, {
                type: 'radar',
                data: {
                    labels: barChartLabels,
                    datasets: [{
                        label: [radarChartLabel],
                        data: radarChartData,
                        backgroundColor: radarBckGrndColor,
                        borderColor:radarBrdrColor,
                        borderWidth: 1
                    }]
                }
            });