import React from "react";
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import {MarketPage} from "../pages/MarketPage/MarketPage";

export const RootRouter = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <DashboardPage />
        }
      />
      <Route
        path={'/market'}
        element={
          <MarketPage />
        }
      />
    </Routes>
  )
}