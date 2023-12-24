// if else statements to display proejcts by skill
import React from 'react';
import sosloData from '../data/soloData';
import {teamData} from '../data/teamData';
import teamProjects from '../components/teamProjects';
import soloPojects from '../data/soloProjects';

const Portfolio = () => {
  return (

  <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
    {teamData.map((teamProjects, i) => (
      <TeamProjects TeamProjects={Teamprojects} key={i} />
    ))}
    </div>


  );
};

export default Portfolio;
