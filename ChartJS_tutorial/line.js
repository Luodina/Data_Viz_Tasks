        // DATA 
        let neighbourhood = { private: {}, entire: {}, shared: {} };
        let line_private = [], line_entire = [], line_shared = [];
        let lineChartLabel =['Private Room','Entire Appartment', 'Shared Room',];
        
        for (i = 0; i < listings.length; i++) {
            let item = listings[i];
            // get data Bar chart & Radar Chart
            if (item["room_type"] === "Private room") {
                if (neighbourhood.private[item["neighbourhood"]]) {
                    neighbourhood.private[item["neighbourhood"]] = neighbourhood.private[item["neighbourhood"]] + 1;
                } else {
                    neighbourhood.private[item["neighbourhood"]] = 1;
                }
            } else if (item["room_type"] === "Entire home/apt") {
                if (neighbourhood.entire[item["neighbourhood"]]) {
                    neighbourhood.entire[item["neighbourhood"]] = neighbourhood.entire[item["neighbourhood"]] + 1;
                } else {
                    neighbourhood.entire[item["neighbourhood"]] = 1;
                }
            } else if (item["room_type"] === "Shared room") {
                if (neighbourhood.shared[item["neighbourhood"]]) {
                    neighbourhood.shared[item["neighbourhood"]] = neighbourhood.shared[item["neighbourhood"]] + 1;
                } else {
                    neighbourhood.shared[item["neighbourhood"]] = 1;
                }
            }
        }
        let lineChartLabels =Object.keys(neighbourhood.entire);

        for (i = 0; i < lineChartLabels.length; i++) {
            let distr = lineChartLabels[i]
            line_private.push(neighbourhood.private[distr] ? neighbourhood.private[distr] : 0);
            line_entire.push(neighbourhood.entire[distr] ? neighbourhood.entire[distr] : 0);
            line_shared.push(neighbourhood.shared[distr] ? neighbourhood.shared[distr] : 0);
        }

        let lineChartData= [line_private, line_entire, line_shared];
        let lineBckGrndColor =[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ]
        let lineBrdrColor=[
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ]
        let lineChartCtx =document.getElementById('lineChart').getContext('2d');
        let lineChart = new Chart(lineChartCtx, {
                type: 'line',
                data: {
                    labels: lineChartLabels,
                    datasets: [{
                        label: lineChartLabel[0],
                        data: lineChartData[0],
                        backgroundColor: lineBckGrndColor[0],
                        borderColor:lineBrdrColor[0],
                        borderWidth: 1
                    },
                    {
                        label: lineChartLabel[1],
                        data: lineChartData[1],
                        backgroundColor: lineBckGrndColor[1],
                        borderColor:lineBrdrColor[1],
                        borderWidth: 1
                    },
                    {
                        label: lineChartLabel[2],
                        data: lineChartData[2],
                        backgroundColor: lineBckGrndColor[2],
                        borderColor:lineBrdrColor[2],
                        borderWidth: 1
                    }
                    ]
                }
            });