import React from "react";
import Button from '../Button/Button';


const Dashboard = () => {

  return (

    <section>
      <h2>Dashboard</h2>

      <div data-testid="dashboard">
        <Button statName="Strike" />
        <Button statName="Ball" />
        <Button statName="Hit" />
        <Button statName="Foul" />
      </div>

    </section>
  )

};

export default Dashboard;
