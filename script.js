// league 253 team 1617 2023
import { api_key } from "./env.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const teamWidget = document.getElementById("team-widget");
const venueWidget = document.getElementById("venue-widget");
const statsWidget = document.getElementById("stats-widget");

const teamData = {
    "team":
            {
                "id":1617,
                "name":"Portland Timbers",
                "code":"POR",
                "country":"USA",
                "founded":2009,
                "national":false,
                "logo":"https:\/\/media.api-sports.io\/football\/teams\/1617.png"
            },
    "venue":
            {
                "id":1748,
                "name":"Providence Park",
                "address":"1844 SW Morrison Street",
                "city":"Portland, Oregon",
                "capacity":25518,
                "surface":"artificial turf",
                "image":"https:\/\/media.api-sports.io\/football\/venues\/1748.png"
            }
}

const teamStats = {
    "get": "teams\/statistics",
    "parameters": {
        "league":"253",
        "team":"1617",
        "season":"2023"
    },
    "errors":[],
    "results":11,
    "paging":{
        "current":1,
        "total":1
    },
    "response":{
        "league":{
            "id":253,
            "name":"Major League Soccer",
            "country":"USA",
            "logo":"https:\/\/media.api-sports.io\/football\/leagues\/253.png",
            "flag":"https:\/\/media.api-sports.io\/flags\/us.svg",
            "season":2023
        },
            "team":{
                "id":1617,
                "name":"Portland Timbers",
                "logo":"https:\/\/media.api-sports.io\/football\/teams\/1617.png"
            },
                "form":"WLLLDDLWLWDWDLLDWDLDLDWLLWDWWWWDLL",
                "fixtures":{
                    "played":{
                        "home":17,
                        "away":17,
                        "total":34
                    },
                    "wins":{
                        "home":9,
                        "away":2,
                        "total":11
                    },
                    "draws":{
                        "home":3,
                        "away":7,
                        "total":10
                    },
                    "loses":{
                        "home":5,
                        "away":8,
                        "total":13
                    }
                },
                "goals":{
                    "for":{
                        "total":{
                            "home":29,
                            "away":17,
                            "total":46
                        },
                        "average":{
                            "home":"1.7",
                            "away":"1.0",
                            "total":"1.4"
                        },
                        "minute":{
                            "0-15":{
                                "total":6,
                                "percentage":"12.50%"
                            },
                            "16-30":{
                                "total":8,
                                "percentage":"16.67%"
                            },
                            "31-45":{
                                "total":5,
                                "percentage":"10.42%"
                            },
                            "46-60":{
                                "total":7,
                                "percentage":"14.58%"
                            },
                            "61-75":{
                                "total":10,
                                "percentage":"20.83%"
                            },
                            "76-90":{
                                "total":11,
                                "percentage":"22.92%"
                            },
                            "91-105":{
                                "total":1,
                                "percentage":"2.08%"
                            },
                            "106-120":{
                                "total":null,
                                "percentage":null
                            }
                        },
                        "under_over":{
                            "0.5":{
                                "over":26,
                                "under":8
                            },
                            "1.5":{
                                "over":14,
                                "under":20
                            },
                            "2.5":{
                                "over":5,
                                "under":29
                            },
                            "3.5":{
                                "over":1,
                                "under":33
                            },
                            "4.5":{
                                "over":0,
                                "under":34
                            }
                        }
                    },
                    "against":{
                        "total":{
                            "home":22,
                            "away":36,
                            "total":58
                        },
                        "average":{
                            "home":"1.3",
                            "away":"2.1",
                            "total":"1.7"
                        },
                        "minute":{
                            "0-15":{
                                "total":8,
                                "percentage":"14.29%"
                            },
                            "16-30":{
                                "total":4,
                                "percentage":"7.14%"
                            },
                            "31-45":{
                                "total":9,
                                "percentage":"16.07%"
                            },
                            "46-60":{
                                "total":15,
                                "percentage":"26.79%"
                            },
                            "61-75":{
                                "total":11,
                                "percentage":"19.64%"
                            },
                            "76-90":{
                                "total":6,
                                "percentage":"10.71%"
                            },
                            "91-105":{
                                "total":3,
                                "percentage":"5.36%"
                            },
                            "106-120":{
                                "total":null,
                                "percentage":null
                            }
                        },
                        "under_over":{
                            "0.5":{
                                "over":26,
                                "under":8
                            },
                            "1.5":{
                                "over":16,
                                "under":18
                            },
                            "2.5":{
                                "over":9,
                                "under":25
                            },
                            "3.5":{
                                "over":5,
                                "under":29
                            },
                            "4.5":{
                                "over":2,
                                "under":32
                            }
                        }
                    }
                },
                "biggest":{
                    "streak":{
                        "wins":4,
                        "draws":2,
                        "loses":3
                    },
                    "wins":{
                        "home":"4-1",
                        "away":"1-2"
                    },
                    "loses":{
                        "home":"1-3",
                        "away":"5-0"
                    },
                    "goals":{
                        "for":{
                            "home":4,
                            "away":3
                        },
                        "against":{
                            "home":3,
                            "away":5
                        }
                    }
                },
                "clean_sheet":{
                    "home":4,
                    "away":4,
                    "total":8
                },
                "failed_to_score":{
                    "home":2,
                    "away":6,
                    "total":8
                },
                "penalty":{
                    "scored":{
                        "total":1,
                        "percentage":"100.00%"
                    },
                    "missed":{
                        "total":0,
                        "percentage":"0%"
                    },
                    "total":1
                },
                "lineups":[
                    {
                        "formation":"4-2-3-1",
                        "played":16
                    },
                    {
                        "formation":"4-3-3",
                        "played":12
                    },
                    {
                        "formation":"4-4-2",
                        "played":4
                    },
                    {
                        "formation":"5-3-2",
                        "played":2
                    }
                ],
                "cards":{
                    "yellow":{
                        "0-15":{
                            "total":2,
                            "percentage":"2.44%"
                        },
                        "16-30":{
                            "total":6,
                            "percentage":"7.32%"
                        },
                        "31-45":{
                            "total":8,
                            "percentage":"9.76%"
                        },
                        "46-60":{
                            "total":15,
                            "percentage":"18.29%"
                        },
                        "61-75":{
                            "total":24,
                            "percentage":"29.27%"
                        },
                        "76-90":{
                            "total":12,
                            "percentage":"14.63%"
                        },
                        "91-105":{
                            "total":15,
                            "percentage":"18.29%"
                        },
                        "106-120":{
                            "total":null,
                            "percentage":null
                        }
                    },
                    "red":{
                        "0-15":{
                            "total":null,
                            "percentage":null
                        },
                        "16-30":{
                            "total":null,
                            "percentage":null
                        },
                        "31-45":{
                            "total":null,
                            "percentage":null
                        },
                        "46-60":{
                            "total":null,
                            "percentage":null
                        },
                        "61-75":{
                            "total":null,
                            "percentage":null
                        },
                        "76-90":{
                            "total":null,
                            "percentage":null
                        },
                        "91-105":{
                            "total":null,
                            "percentage":null
                        },
                        "106-120":{
                            "total":null,
                            "percentage":null
                        }
                    }
                }
            }
        }

// Takes the "form" response and converts it to a graphical representation of Wins/Losses/Draws
const seasonSummary = (formString) => {
    for (let i = 0; i < formString.length; i++) {
        switch (formString[i]) {
            case "W":
                statsWidget.innerText += "🟢"
                break;
            case "L":
                statsWidget.innerText += "🔴"
                break;
            case "D":
                statsWidget.innerText += "◻️"
        }
    }
}

const formatFixtureData = (fixtures) => {
    const record = [
        {
            "loc": "home",
            "result": "wins",
            "amount": fixtures.wins.home,
        },
        {
            "loc": "home",
            "result": "losses",
            "amount": fixtures.loses.home,
        },
        {
            "loc": "home",
            "result": "draws",
            "amount": fixtures.draws.home
        },
        {
            "loc": "away",
            "result": "wins",
            "amount": fixtures.wins.away,
        },
        {
            "loc": "away",
            "result": "losses",
            "amount": fixtures.loses.away,
        },
        {
            "loc": "away",
            "result": "draws",
            "amount": fixtures.draws.away
        }
    ]

    record.forEach((entry) => console.log(entry))
    return record

}

// Get goals data from response and create a goals object
const formatGoalsData = (goals) => {

    const goalTotals = [
        {
            "loc": "home",
            "result": "for",
            "amount": goals.for.total.home
        },
        {
            "loc": "home",
            "result": "against",
            "amount": goals.against.total.home
        },
        {
            "loc": "away",
            "result": "for",
            "amount": goals.for.total.away
        },
        {
            "loc": "away",
            "result": "against",
            "amount": goals.against.total.away
        }
    ]

    goalTotals.forEach((entry) => console.log(entry))
    return goalTotals

}



            

/*var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", api_key);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/teams/statistics?league=253&team=1617&season=2023", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */

teamWidget.innerHTML += `
    <p>${teamData.team.name}</p>
    <p>Founded: ${teamData.team.founded}</p>
    <img src=${teamData.team.logo} />
`

venueWidget.innerHTML += `
    <p>${teamData.venue.name}</p>
    <p>Capacity: ${teamData.venue.capacity}</p>
`

seasonSummary(teamStats.response.form)
/*statsWidget.innerHTML += `
        <p>${teamStats.response.form}</p>
`*/



/* ====== Set up Fixtures Chart ====== */

const createStackedBarChart = (data) => {
    // Set up chart dimensions
const margin = { top: 50, right: 0, bottom: 0, left: 50 }
const width = 660 - margin.left - margin.right
//const height = 400 - margin.top - margin.bottom


const series = d3.stack()
    .keys(d3.union(data.map(d => d.result)))
    .value(([, D], key) => D.get(key).amount)
    (d3.index(data, d=> d.loc, d=> d.result))

const height = series[0].length * 25 + margin.top + margin.bottom

// Prepare the scales for positional and color encodings.
const x = d3.scaleLinear()
.domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
.range([margin.left, width - margin.right]);

const y =  d3.scaleBand()
.domain(d3.groupSort(data, D => -d3.sum(D, d => d.amount), d => d.loc))
.range([margin.top, height - margin.bottom])
.padding(0.08);

const color = d3.scaleOrdinal()
.domain(series.map(d => d.key))
.range(["green", "red", "yellow"])
.unknown("#ccc");

  // A function to format the value in the tooltip.
  const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en")

const svg = d3.select("#fixtures-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

// Append a group for each series, and a rect for each element in the series.
svg.append("g")
.selectAll()
.data(series)
.join("g")
  .attr("fill", d => color(d.key))
.selectAll("rect")
.data(D => D.map(d => (d.key = D.key, d)))
.join("rect")
  .attr("x", d => x(d[0]))
  .attr("y", d => y(d.data[0]))
  .attr("height", y.bandwidth())
  .attr("width", d => x(d[1]) - x(d[0]))
.append("title")
  .text(d => `${d.data[0]} ${d.key}\n${formatValue(d.data[1].get(d.key).amount)}`);

// Append the horizontal axis.
svg.append("g")
  .attr("transform", `translate(0,${margin.top})`)
  .call(d3.axisTop(x).ticks(width / 100, "s"))
  .call(g => g.selectAll(".domain").remove());

// Append the vertical axis.
svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).tickSizeOuter(0))
  .call(g => g.selectAll(".domain").remove());
}

const data = formatFixtureData(teamStats.response.fixtures)
createStackedBarChart(data)


/* Create Goals Chart */

const createGoalsBarChart = (data) => {
    console.log("creating goals chart...");
    // Set up chart dimensions
const margin = { top: 50, right: 0, bottom: 0, left: 50 }
const width = 660 - margin.left - margin.right
//const height = 400 - margin.top - margin.bottom


const series = d3.stack()
    .keys(d3.union(data.map(d => d.result)))
    .value(([, D], key) => D.get(key).amount)
    (d3.index(data, d=> d.loc, d=> d.result))

const height = series[0].length * 25 + margin.top + margin.bottom

// Prepare the scales for positional and color encodings.
const x = d3.scaleLinear()
.domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
.range([margin.left, width - margin.right]);

const y =  d3.scaleBand()
.domain(d3.groupSort(data, D => -d3.sum(D, d => d.amount), d => d.loc))
.range([margin.top, height - margin.bottom])
.padding(0.08);

const color = d3.scaleOrdinal()
.domain(series.map(d => d.key))
.range(["green", "red"])
.unknown("#ccc");

  // A function to format the value in the tooltip.
  const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en")

const svg = d3.select("#goals-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

// Append a group for each series, and a rect for each element in the series.
svg.append("g")
.selectAll()
.data(series)
.join("g")
  .attr("fill", d => color(d.key))
.selectAll("rect")
.data(D => D.map(d => (d.key = D.key, d)))
.join("rect")
  .attr("x", d => x(d[0]))
  .attr("y", d => y(d.data[0]))
  .attr("height", y.bandwidth())
  .attr("width", d => x(d[1]) - x(d[0]))
.append("title")
  .text(d => `${d.data[0]} ${d.key}\n${formatValue(d.data[1].get(d.key).amount)}`);

// Append the horizontal axis.
svg.append("g")
  .attr("transform", `translate(0,${margin.top})`)
  .call(d3.axisTop(x).ticks(width / 100, "s"))
  .call(g => g.selectAll(".domain").remove());

// Append the vertical axis.
svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).tickSizeOuter(0))
  .call(g => g.selectAll(".domain").remove());
}


const goals = formatGoalsData(teamStats.response.goals);
//console.log(goals)

createGoalsBarChart(goals)


