import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from 'screens/Home'
import Admin from 'screens/Admin'
import Passenger from 'screens/Passenger'
import Header from 'screens/Header'
import 'antd/dist/antd.css'

const routes = [
  {
    key: 1,
    path: `/admin`,
    component: Admin,
  },
  {
    key: 2,
    path: `/admin/:passengerId`,
    component: Passenger,
  },
  {
    key: 3,
    path: `/`,
    component: Home,
  },
]
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
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
