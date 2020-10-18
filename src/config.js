const config = {
  project_name: process.env.REACT_APP_PROJECT_NAME || 'starship_web',
  node_env: process.env.REACT_APP_NODE_ENV || 'development',
  store_app: process.env.REACT_APP_AUTH_COOKIE_NAME || 'starship_store_app',
  api_url: process.env.REACT_APP_URL_APP || 'https://swapi.dev/api',
}

export default config