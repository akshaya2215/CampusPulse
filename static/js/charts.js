const occupancy = document.getElementById('occupancyChart');

new Chart(occupancy, {

    type: 'bar',

    data: {

        labels: ['Block A','Block B','Block C','Block D'],

        datasets: [{

            label:'Occupied Classrooms',

            data:[18,30,15,24],

            backgroundColor:'#2563EB'

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                labels:{
                    color:'white'
                }
            }

        },

        scales:{

            x:{
                ticks:{
                    color:'white'
                }
            },

            y:{
                ticks:{
                    color:'white'
                }
            }

        }

    }

});

const energy=document.getElementById('energyChart');

new Chart(energy,{

    type:'line',

    data:{

        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

        datasets:[{

            label:'Energy Usage',

            data:[420,450,430,470,490,455,440],

            borderColor:'#22C55E',

            tension:.4

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                labels:{
                    color:'white'
                }

            }

        },

        scales:{

            x:{
                ticks:{
                    color:'white'
                }
            },

            y:{
                ticks:{
                    color:'white'
                }
            }

        }

    }

});