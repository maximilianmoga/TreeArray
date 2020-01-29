const results = JSON.parse(localStorage.getItem('results'));


const result = [];
const labels = [];

results.clicks(item => {
   results.push(item.clicks);
    labels.push(item.id);
});

const ctx = document.getElementById('results').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# ofresults',
            data:results,
            backgroundColor: ['red', 'blue', 'brown', 'orange', 'purple', 'white']
        }]
    },
      options: {
      scales: {
      yAxes: [{
        ticks: {
        beginAtZero: true
                }
            }]
        }
    }
});

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);