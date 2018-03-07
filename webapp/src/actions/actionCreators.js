export function startClock() {
  return {
    type: 'START_CLOCK'
  }
}

export function stopClock() {
  return {
    type: 'STOP_CLOCK'
  }
}

export function loadTeamList() {
  return {
    type: "LOAD_TEAM_LIST"
  }
}

export function createNewGame(game) {
  return {
    game: game,
    type: "CREATE_NEW_GAME"
  }
}

export function createNewPlayer(player, teamId) {
  return {
    player: player,
    teamId: teamId,
    type: "CREATE_NEW_PLAYER"
  }
}

export function createNewSeason(season) {
  return {
    season: season,
    type: "CREATE_NEW_SEASON"
  }
}

export function createNewTeam(team) {
  return {
    team: team,
    type: "CREATE_NEW_TEAM"
  }
}

export function updatePlayerActiveStatus(team, player){
  return {
    player: player,
    team: team,
    type: "UPDATE_PLAYER_ACTIVE_STATUS"
  }
}

export function loadTeam() {
  return {
    type: "LOAD_TEAM"
  }
}