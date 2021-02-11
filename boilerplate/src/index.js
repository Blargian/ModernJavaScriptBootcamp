
const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge','Aiden','Herbert','Sherry']
}

printTeam(team.name, team.coach, ...team.players)

const cities = ['Barcelona','Cape Town','Bordeaux']
const cityCopy = ['Voronezh',...cities]
console.log(cityCopy)