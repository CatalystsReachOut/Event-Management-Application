import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from "../pages/Login/Login"
import SignUp from '../pages/SignUp/SignUp';
import forgotPassword from '../pages/Forgotpassword/forgotPassword';
import AddEvent from '../pages/AddEvent/AddEvent';
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
            <Route exact path={ROUTES.Dashboard} element={<RouteWithRole Element={Dashboard} />}></Route>
            <Route exact path={ROUTES.Forgotpassword} element={<RouteWithRole Element={forgotPassword} />}></Route>
            <Route exact path={ROUTES.AddEvent} element={<RouteWithRole Element={AddEvent} />}></Route>
        </Routes>
    </div>
  )
}

export default Router
