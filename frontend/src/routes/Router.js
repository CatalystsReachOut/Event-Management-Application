import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';

import Login from "../pages/Login/Login"
import SignUp from '../pages/SignUp/SignUp';

const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>

            <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
            <Route exact path={ROUTES.SignUp} element={<RouteWithRole Element={SignUp} />}></Route>
        </Routes>
    </div>
  )
}

export default Router
