import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { PortfolioSection } from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
export const Dashboard = () => {
    return (
        <DashboardLayout title="Dashboard" bg="#F3F3F7">
           <PortfolioSection/>
           <PriceSection/>
        </DashboardLayout>
    )
}
