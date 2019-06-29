import React from "react";
import Button from '../Button/Button';


const Dashboard = (props) => {

  return (

    <section>
      <h2>Dashboard</h2>

      <div data-testid="dashboard">

        <Button {...props} statName="strikes" /> {/* here I spread props as an example to show - below is more specific as what is being passed as props vs just spreading everything in props */}
        <Button updateStat={props.updateStat} statName="balls" />
        <Button updateStat={props.updateStat} statName="hit" />
        <Button updateStat={props.updateStat} statName="foul" />
      </div>

    </section>
  )

};

export default Dashboard;
