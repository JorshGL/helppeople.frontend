import { Routes, Route } from "react-router-dom";
import RegisterCitizen from "../screens/RegisterCitizen/RegisterCitizen";
import React from "react";
import Layout from "./Layout";
import AdminCitizens from "../screens/AdminCitizens/AdminCitizens";

function Router() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout>
            <RegisterCitizen />
          </Layout>
        }
      />
      <Route
        path="/admin"
        element={
          <Layout>
            <AdminCitizens />
          </Layout>
        }
      />
      <Route
        path="/*"
        element={
          <Layout>
            <RegisterCitizen />
          </Layout>
        }
      />
    </Routes>
  );
}

export default Router;
