import React, { Fragment } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AddProduct from "../../pages/AddProduct";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import PrivateRoute from "./PrivateRoute";

const isLogedIn = true;
const NavRoutes = () => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Dashboard />} />
          <Route path="purchase-history" element={<AddProduct />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default NavRoutes;
