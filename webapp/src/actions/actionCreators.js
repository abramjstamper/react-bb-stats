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

export function loadTeam() {
  return {
    type: "LOAD_TEAM"
  }
}