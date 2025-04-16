import fetchData from "./netlify/functions/fetchData.mjs"


const teamLogo = document.getElementById("team-logo");
const formWidget = document.getElementById("form-widget");
const statCards = document.querySelectorAll(".stat");
const selectBox = document.getElementById("season-select")
var defaultSeason = "2023"
let teamStats = {}

window.onload = (event) => {
    updateStats(defaultSeason)
}


selectBox.addEventListener("change", (event) => {
    updateStats(event.target.value)
})

// Takes the "form" response and converts it to a graphical representation of Wins/Losses/Draws
const seasonSummary = (formString) => {
    formWidget.innerHTML = ""
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

/*const updateStats = (year) => {

    // Generate form summary and stat cards
    seasonSummary(teamStats.response.form)
    createStatCards();

    // Format fixtures data and create or update fixtures chart
    const fixturesData = formatFixtureData(teamStats.response.fixtures)
    createFixturesChart(fixturesData)

    // Format goals data and create or update goals chart
    const goalsData = formatGoalsData(teamStats.response.goals);
    createGoalsChart(goalsData)

    // Format goal distribution data and create or update goals chart
    const goalDistData = formatGoalsBreakdown(teamStats.response.goals)
    createGoalDistChart(goalDistData)

    // Format goal distribution data and create or update goals chart
    const yellowCardsData = formatYellowCards(teamStats.response.cards)
    createYellowCardsChart(yellowCardsData)
}*/


const updateStats = (year) => {
    fetchData(year).then((result) => { 
        teamStats = result

        // Generate form summary and stat cards
        seasonSummary(teamStats.response.form)
        createStatCards();

        // Format fixtures data and create or update fixtures chart
        const fixturesData = formatFixtureData(teamStats.response.fixtures)
        createFixturesChart(fixturesData)

        // Format goals data and create or update goals chart
        const goalsData = formatGoalsData(teamStats.response.goals);
        createGoalsChart(goalsData)

        // Format goal distribution data and create or update goals chart
        const goalDistData = formatGoalsBreakdown(teamStats.response.goals)
        createGoalDistChart(goalDistData)

        // Format goal distribution data and create or update goals chart
        const yellowCardsData = formatYellowCards(teamStats.response.cards)
        createYellowCardsChart(yellowCardsData)

    })
    .catch((error) => {
        console.error(error)
    })
}





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

/*const teamStats = {
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
        }*/



// Takes fixture data from response and creates a fixtures object to display in chart.js chart
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

    return record

}

// Takes goals data from response and creates a goals object to display in chart.js chart
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

    return goalTotals

}


// Takes goals by minute data from response and creates a goals breakdown object to display in chart.js chart
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


// Takes the yellow card data from response and creates a yellow cards array to display in chart.js chart
const formatYellowCards = (cards) => {
    const yellowCards = Object.entries(cards.yellow).map((el) => el[1].total != null ? el[1].total : 0)

    return yellowCards
}



/* ===== Generate HTML from response data ===== */

// Populate the stat cards with biggest win, worst loss, clean sheets, and failed to score data
const createStatCards = () => {
    statCards[0].innerText = teamStats.response.biggest.wins.home > teamStats.response.biggest.wins.away ? teamStats.response.biggest.wins.home : teamStats.response.biggest.wins.away
    statCards[1].innerText = teamStats.response.biggest.loses.home > teamStats.response.biggest.loses.away ? teamStats.response.biggest.loses.home : teamStats.response.biggest.loses.away
    statCards[2].innerText = teamStats.response.clean_sheet.total
    statCards[3].innerText = teamStats.response.failed_to_score.total
}






/* ====== Create Fixtures Chart ====== */
const createFixturesChart = (fixturesData) => {

    // Get the canvas id and set chart context
    const fixturesChartCtx = document.getElementById("fixtures-chart");

    // Check to see if there is already a chart using the canvas
    let existingChart = Chart.getChart(fixturesChartCtx);

    // If a chart exists, destory it
    if (existingChart != undefined) {
        existingChart.destroy()
    }

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

}


/* ===== Create Goals Chart ===== */
const createGoalsChart = (goalsData) => {

    // Get the canvas id and set chart context
    const goalsChartCtx = document.getElementById("goals-chart").getContext("2d");

    // Check to see if there is already a chart using the canvas
    let existingChart = Chart.getChart(goalsChartCtx);

    // If a chart exists, destory it
    if (existingChart != undefined) {
        existingChart.destroy()
    }

    const goalsChart = new Chart(goalsChartCtx, {
        type: 'bar',
        data: {
        labels: ['Home', 'Away'],
        datasets: goalsData
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
}



/* ===== Create Goal Distribution Chart ===== */
const createGoalDistChart = (goalDistData) => {

    // Get the canvas id and set chart context
    const goalDistCtx = document.getElementById("goal-distribution-chart")

    // Check to see if there is already a chart using the canvas
    let existingChart = Chart.getChart(goalDistCtx);

    // If a chart exists, destory it
    if (existingChart != undefined) {
        existingChart.destroy()
    }

    const goalDistChart = new Chart(goalDistCtx, {
        type: 'bar',
        data: {
        labels: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
        datasets: goalDistData
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

}


/* ===== Create Yellow Cards Chart ===== */

const createYellowCardsChart = (yellowCardsData) => {

    //const yellowCards = formatYellowCards(teamStats.response.cards)

    // Get the canvas id and set chart context
    const yellowCardsCtx = document.getElementById("yellow-cards-chart")

    // Check to see if there is already a chart using the canvas
    let existingChart = Chart.getChart(yellowCardsCtx);

    // If a chart exists, destory it
    if (existingChart != undefined) {
        existingChart.destroy()
    }

    const yellowCardsChart = new Chart(yellowCardsCtx, {
        type: 'bar',
        data: {
          labels: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
          datasets: [{
            label: "Yellow Cards",
            data: yellowCardsData,
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

}


