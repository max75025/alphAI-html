function generateDayWiseTimeSeries(e, a, t) {
    for (var n = 0, i = []; n < a;) {
        var o = e,
            r = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min;
        i.push([o, r]), e += 864e5, n++
    }
    return i
}
var options = {

    zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: false
      },
    chart: {
        zoom: false,
        height: 320,
        type: "area",
        stacked: !0,
        toolbar: {
            show: !1
        },
        events: {
            selection: function(e, a) {
                console.log(new Date(a.xaxis.min))
            }
        }
    },
    colors: [ "#3bafda", "#1abc9c", "#6c757d"],
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: [2],
        curve: "smooth"
    },
    series: [{
        name: "Атаки",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 100,
            max: 1500
        })
    }, {
        name: "Боты",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 100,
            max: 1e3
        })
    }, {
        name: "Файлы",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 100,
            max: 1e3
        })
    }],
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: .3,
            opacityTo: .9
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "center"
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        title: {
            text: "Recent Signups",
            offsetX: -20,
            style: {
                color: void 0,
                fontSize: "13px",
                cssClass: "apexcharts-yaxis-title"
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#apex-area"), options)).render();
options = {
    chart: {
        height: 320,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
    	 name: "Количество",
        data: [400, 230, 348, 70, 40, 8]
    }],
    colors: ["#3bafda"],
    xaxis: {
        categories: ["Атаки на базу", "Атаки на сервер", "Атаки на клиент", "Базовые аномалии", "Критические аномалии", "Фатальные аномалии"]
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#apex-bar-1"), options)).render();



var chart;
options = {
    chart: {
        height: 320,
        type: "donut"
    },
    series: [5, 25, 40, 15, 14,1],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: -10
    },
    labels: ["база", "сервер", "клиент", "Базовые аномалии", "Критические аномалии", "Фатальные аномалии"],
    colors: ["#3bafda", "#26c6da", "#00b19d", "#6e7886","#00b59d", "#02b19d",],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 210
            },
            legend: {
                show: !1
            }
        }
    }]
};




(chart = new ApexCharts(document.querySelector("#apex-pie-2"), options)).render(), $("#world-map-markers").vectorMap({

    map: "world_mill_en",
    normalizeFunction: "polynomial",
    hoverOpacity: .7,
    hoverColor: !1,
    regionStyle: {
        initial: {
            fill: "#6e7886"
        }
    },
    markerStyle: {
        initial: {
            r: 9,
            fill: "#1abc9c",
            "fill-opacity": .9,
            stroke: "#fff",
            "stroke-width": 7,
            "stroke-opacity": .4
        },
        hover: {
            stroke: "#fff",
            "fill-opacity": 1,
            "stroke-width": 1.5
        }
    },
    backgroundColor: "transparent",
    markers: [{
        latLng: [41.9, 12.45],
        name: "Vatican City"
    }, {
        latLng: [43.73, 7.41],
        name: "Monaco"
    }, {
        latLng: [-.52, 166.93],
        name: "Nauru"
    }, {
        latLng: [-8.51, 179.21],
        name: "Tuvalu"
    }, {
        latLng: [43.93, 12.46],
        name: "San Marino"
    }, {
        latLng: [47.14, 9.52],
        name: "Liechtenstein"
    }, {
        latLng: [7.11, 171.06],
        name: "Marshall Islands"
    }, {
        latLng: [17.3, -62.73],
        name: "Saint Kitts and Nevis"
    }, {
        latLng: [3.2, 73.22],
        name: "Maldives"
    }, {
        latLng: [35.88, 14.5],
        name: "Malta"
    }, {
        latLng: [12.05, -61.75],
        name: "Grenada"
    }, {
        latLng: [13.16, -61.23],
        name: "Saint Vincent and the Grenadines"
    }, {
        latLng: [13.16, -59.55],
        name: "Barbados"
    }, {
        latLng: [17.11, -61.85],
        name: "Antigua and Barbuda"
    }, {
        latLng: [-4.61, 55.45],
        name: "Seychelles"
    }, {
        latLng: [7.35, 134.46],
        name: "Palau"
    }, {
        latLng: [42.5, 1.51],
        name: "Andorra"
    }, {
        latLng: [14.01, -60.98],
        name: "Saint Lucia"
    }, {
        latLng: [6.91, 158.18],
        name: "Federated States of Micronesia"
    }, {
        latLng: [1.3, 103.8],
        name: "Singapore"
    }, {
        latLng: [.33, 6.73],
        name: "SÃ£o TomÃ© and PrÃ­ncipe"
    }]
});



options = {
    chart: {
        height: 320,
        type: "donut"
    },
    series: [19, 256, 507],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: -10
    },
    labels: ["база", "сервер", "клиент"],
    colors: ["#3bafda", "#26c6da", "#00b19d", "#6e7886","#00b59d", "#02b19d",],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 210
            },
            legend: {
                show: !1
            }
        }
    }]
};




(chart = new ApexCharts(document.querySelector("#apex-pie-3"), options)).render();