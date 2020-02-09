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
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'red', 'lightgreen', 'pink', 'black', 'blanchedalmond', 'darkblue', 'salmon', 'brown', 'teal', 'yellowgreen']
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