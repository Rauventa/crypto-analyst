import React from "react";
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import {MarketPage} from "../pages/MarketPage/MarketPage";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {ProfilePage} from "../pages/ProfilePage/ProfilePage";

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
        path={'/auth'}
        element={
          <AuthPage />
        }
      />
      <Route
        path={'/market'}
        element={
          <MarketPage />
        }
      />
      <Route
        path={'/profile'}
        element={
          <ProfilePage />
        }
      />
    </Routes>
  )
}