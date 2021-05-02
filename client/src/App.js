import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import Passenger from './screens/Passenger'
import 'antd/dist/antd.css'
const routes = [
  {
    key: 1,
    path: `/`,
    component: Home,
  },
  {
    key: 2,
    path: `/:passengerId`,
    component: Passenger,
  },
]
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} exact component={component} />
          ))}
          <Redirect to={routes[0].path} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
