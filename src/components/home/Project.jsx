import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
  image: null, // Add image field
};

const API = "https://api.github.com";

const Project = ({ heading, gitHubUsers }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let allRepos = [];

    for (const user of gitHubUsers) {
      const { username, reposLength, specificRepos, images } = user;
      const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
      const specificReposAPI = `${API}/repos/${username}`;

      try {
        if (reposLength > 0) {
          const response = await axios.get(allReposAPI);
          const repos = response.data.slice(0, reposLength).map((repo, index) => ({
            ...repo,
            image: images ? images[index] : null,
          }));
          allRepos = [...allRepos, ...repos];
        }

        if (specificRepos && specificRepos.length > 0) {
          const specificReposData = await Promise.all(
            specificRepos.map(async (repoName, index) => {
              const { data } = await axios.get(`${specificReposAPI}/${repoName}`);
              return {
                ...data,
                image: images ? images[reposLength + index] : null,
              };
            })
          );
          allRepos = [...allRepos, ...specificReposData];
        }
      } catch (error) {
        console.error(`Error fetching repos for ${username}:`, error.message);
      }
    }

    setProjectsArray(allRepos);
    console.log("All fetched repos:", allRepos);
  }, [gitHubUsers]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : gitHubUsers.flatMap(user =>
                new Array(user.reposLength + user.specificRepos.length).fill(dummyProject)
              ).map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
