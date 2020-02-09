//const results = JSON.parse(localStorage.getItem('__votes'));
//console.log(result)

const votes = ['2', '5', '7', '11'];
const labels = ['red', 'blue', 'brown', 'orange', 'purple', 'yellow'];

// results.forEach(item => {
//     votes.push(item.votes);
//     labels.push(item.id);
// });

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