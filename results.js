const results = JSON.parse(localStorage.getItem('__votes'));


const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('results').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['red', 'blue', 'brown', 'orange', 'purple', 'yellow']
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