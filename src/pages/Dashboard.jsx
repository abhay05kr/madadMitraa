import React from 'react';
import IntroBanner from '../components/dashboard/IntroBanner';
import LiveCounters from '../components/dashboard/LiveCounters';
import ImpactGraph from '../components/dashboard/ImpactGraph';
import CategoryContributions from '../components/dashboard/CategoryContributions';
import FutureGoals from '../components/dashboard/FutureGoals';
import DashboardCTA from '../components/dashboard/DashboardCTA';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <IntroBanner />
      <LiveCounters />
      <ImpactGraph />
      <CategoryContributions />
      <FutureGoals />
      <DashboardCTA />
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard; 