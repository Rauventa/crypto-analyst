import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { PlansPage } from '../pages/PlansPage/PlansPage';

export const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/plans' element={<PlansPage />} />
        </Routes>
    )
}