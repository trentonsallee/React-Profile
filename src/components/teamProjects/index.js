import React from 'react';
import './style.css';
import { teamProjects } from '../../data/teamData';

const teamProjects = ({teamProjects}) => {
  return (
    <div className="col">
      <div className="card h-100" >
        <img 
          src={require(`../../assets/projects/${teamProjects.name}.jpg`)} 
          className="card-img-top" 
          alt={teamProjects.name}
        />
      <div className="">
        <p className="">
          {teamProjects.description}
        </p>
          <div  className="d-flex justify-content-space-between">
            <a href={teamProjects.link} class="btn btn-secondary name-bt">
              {teamProjects.name}
            </a>
            <a href={teamProjects.repo} class="btn btn-secondary git-bt">
              <i className="fab fa-github"></i>
            </a>
          </div>
      </div>
    </div>
    </div>
  );
};

export default TeamProjects;
