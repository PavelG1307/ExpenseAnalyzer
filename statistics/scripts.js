const page = 'statistics'
const url = 'http:/localhost:8080'
const buttons = document.getElementsByClassName('menu_btn')
for (const i in buttons){
    buttons[i].onclick = (ev) => {
        const id = ev.target.id
        if (id === page) return
        document.location.href = `/${id}`
    }
}
const labels = []
const series = []
for (let i =1; i <= 30; i++) {
    labels.push(i)
    series.push(Math.floor(Math.random() * 50000))
}
var data = {
    labels,
    series: [series]
  };
  
//   var options = {
//     seriesBarDistance: 15
//   };
  
//   var responsiveOptions = [
//     ['screen and (min-width: 641px) and (max-width: 1024px)', {
//       seriesBarDistance: 10,
//       axisX: {
//         labelInterpolationFnc: function (value) {
//           return value;
//         }
//       }
//     }],
//     ['screen and (max-width: 640px)', {
//       seriesBarDistance: 5,
//       axisX: {
//         labelInterpolationFnc: function (value) {
//           return value[0];
//         }
//       }
//     }]
//   ];
  
  new Chartist.Bar('.ct-chart', data);

  new Chartist.Bar('.ct-chart2', data);