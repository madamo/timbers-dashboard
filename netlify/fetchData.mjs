
export default async (req, context) => {
    const season = new URL(req.url).searchParams.get("season")

    const API_KEY = process.env.API_KEY

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", API_KEY);
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        // Handle success in try
        const response = await fetch(`https://v3.football.api-sports.io/teams/statistics?league=253&team=1617&season=${season}`, requestOptions)
        const data = await response.json()

        return new Response(JSON.stringify(data))
    } catch (error) {
        // Handle error in catch
        //console.error(error)
        return new Response(error)
    }
}