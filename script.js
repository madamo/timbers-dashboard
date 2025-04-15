// league 253 team 1617 2023
//import { api_key } from "./env.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//const teamWidget = document.getElementById("team-widget");
//const venueWidget = document.getElementById("venue-widget");
const teamLogo = document.getElementById("team-logo");
const formWidget = document.getElementById("form-widget");
const statCards = document.querySelectorAll(".stat");

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
    let totalPoints = 0
    for (let i = 0; i < formString.length; i++) {
        switch (formString[i]) {
            case "W":
                formWidget.innerHTML += `<match class="win">+3</match>`
                totalPoints += 3;
                break;
            case "L":
                formWidget.innerHTML += `<match class="loss">0</match>`
                break;
            case "D":
                formWidget.innerHTML += `<match class="draw">+1</match>`
                totalPoints += 1;
        }
    }
    document.getElementById("total-points").innerText = totalPoints;
}

const formatFixtureData = (fixtures) => {
    const record = [
        {
            label: "Wins",
            data: [fixtures.wins.home, fixtures.wins.away],
            backgroundColor: "#7BAF8B"
        },
        {
            label: "Losses",
            data: [fixtures.loses.home, fixtures.loses.away],
            backgroundColor: "#DA1A32"
        },
        {
            label: "Draws",
            data: [fixtures.draws.home, fixtures.draws.away],
            backgroundColor: "#D6C4A8"
        }
    ]

    record.forEach((entry) => console.log(`fixture: ${entry.amount}`))
    return record

}

// Get goals data from response and create a goals object
const formatGoalsData = (goals) => {

    const goalTotals = [

        {
            label: 'For',
            data: [goals.for.total.home, goals.for.total.away],
            backgroundColor: "#7BAF8B"
        },
        {
            label: "Against",
            data: [goals.against.total.home * -1, goals.against.total.away * -1],
            backgroundColor: "#DA1A32"
        }
    ]

    //goalTotals.forEach((entry) => console.log(entry))
    return goalTotals

}

const formatGoalsBreakdown = (goals) => {

    const goalsFor = []
    const goalsAgainst = []

    Object.entries(goals.for.minute).forEach((minute) => goalsFor.push(minute[1].total))
    Object.entries(goals.against.minute).forEach((minute) => goalsAgainst.push(minute[1].total * -1))

    const goalDistribution = [
        {
            label: "For",
            data: goalsFor,
            backgroundColor: "#7BAF8B"
        },
        {
            label: "Against",
            data: goalsAgainst,
            backgroundColor: "#DA1A32"
        }
    ]

    return goalDistribution
}

const formatYellowCards = (cards) => {
    const yellowCards = Object.entries(cards.yellow).map((el) => el[1].total != null ? el[1].total : 0)

    return yellowCards
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

  teamLogo.innerHTML += `
      <img src=${teamData.team.logo} />
  `

/*teamWidget.innerHTML += `
    <img src=${teamData.team.logo} />
    <p>${teamData.team.name}</p>
` */
//<p>Founded: ${teamData.team.founded}</p>


/*venueWidget.innerHTML += `
    <p>${teamData.venue.name}</p>
    <p>Capacity: ${teamData.venue.capacity}</p>
`*/

seasonSummary(teamStats.response.form)

statCards[0].innerText = teamStats.response.biggest.wins.home > teamStats.response.biggest.wins.away ? teamStats.response.biggest.wins.home : teamStats.response.biggest.wins.away
statCards[1].innerText = teamStats.response.biggest.loses.home > teamStats.response.biggest.loses.away ? teamStats.response.biggest.loses.home : teamStats.response.biggest.loses.away
statCards[2].innerText = teamStats.response.clean_sheet.total
statCards[3].innerText = teamStats.response.failed_to_score.total





/* ====== Set up Fixtures Chart ====== */

const fixturesData = formatFixtureData(teamStats.response.fixtures)

const fixturesChartCtx = document.getElementById("fixtures-chart");
const fixturesChart = new Chart(fixturesChartCtx, {
    type: 'bar',
    data: {
        labels: ['Home', 'Away'],
        datasets: fixturesData
    },
    options: {
        indexAxis: "y",
        scales: {
            y: {
                stacked: true
            },
            x: {
                stacked: true
            }
        },
        barThickness: 20
    }
})


/* Create Goals Chart */

const goals = formatGoalsData(teamStats.response.goals);
console.log(goals)

const ctx = document.getElementById("goals-chart").getContext("2d");

const goalsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Home', 'Away'],
      datasets: goals
    },
    options: {
        indexAxis: "y",
        scales: {
            y: {
            stacked: true
            },
            x: {
                stacked: true,
                max: 40
            }
        },
        barThickness: 20
    }
  });

const goalDist = formatGoalsBreakdown(teamStats.response.goals)
console.log(goalDist)

const goalDistCtx = document.getElementById("goal-distribution-chart")

const goalDistChart = new Chart(goalDistCtx, {
    type: 'bar',
    data: {
      labels: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
      datasets: goalDist
    },
    options: {
        scales: {
            y: {
            stacked: true
            },
            x: {
            stacked: true
            }
        },
        barThickness: 20
    }
})

const yellowCards = formatYellowCards(teamStats.response.cards)
console.log(yellowCards)

const yellowCardsCtx = document.getElementById("yellow-cards-chart")

const yellowCardsChart = new Chart(yellowCardsCtx, {
    type: 'bar',
    data: {
      labels: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
      datasets: [{
        label: "Yellow Cards",
        data: yellowCards,
        backgroundColor: "#B9975B"
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        barThickness: 20
    }
})

