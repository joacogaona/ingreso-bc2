function getServerHost() {
  const apiUrl = process.env.REACT_APP_API_URL
  if (apiUrl != null) {
    return apiUrl
  } else {
    return `http://${window.location.hostname}:4000`
  }
}
//URL
export const SERVER_HOST = getServerHost()

export const API_BASE_URL = `${SERVER_HOST}/api`
