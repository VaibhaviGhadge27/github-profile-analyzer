import { useState } from "react";

function RepoList({ repos }) {

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("stars");

  let filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortType === "stars") {
    filteredRepos = filteredRepos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }

  if (sortType === "name") {
    filteredRepos = filteredRepos.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  const topRepos = filteredRepos.slice(0, 10);

  return (
    <div>

      <h3>Repositories</h3>

      <input
        type="text"
        placeholder="Search repository..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setSortType("stars")}>
          Sort by Stars
        </button>

        <button onClick={() => setSortType("name")}>
          Sort by Name
        </button>
      </div>

      {topRepos.map((repo) => (
        <div key={repo.id} className="repo">

          <h4>{repo.name}</h4>

          <p>{repo.description}</p>

          <p>⭐ {repo.stargazers_count}</p>

          <p>🍴 {repo.forks_count}</p>

          <p>💻 {repo.language || "Not specified"}</p>

          <a href={repo.html_url} target="_blank">
            View Repository
          </a>

        </div>
      ))}

    </div>
  );
}

export default RepoList;