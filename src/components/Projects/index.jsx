
import React, { useEffect, useState } from "react";
import './projects.css'
import Slider from "../Slider"; // Adjusted based on previous discussion

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/neyneyalldayday/repos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const sortedRepos = data.sort((a,b) => b.startgazers_count - a.stargazers_count);
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  console.log(repos)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="projects">
      <h2>Projects</h2>
      <Slider items={repos} /> {/* Adjust according to your needs */}
    </div>
  );
};

export default Projects;