import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import { fetchUser, fetchRepos } from "./services/githubApi";

function App() {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {

    setLoading(true);
    setError("");

    try {

      const userData = await fetchUser(username);
      const repoData = await fetchRepos(username);

      setUser(userData);
      setRepos(repoData);

    } catch {

      setError("User not found");
      setUser(null);
      setRepos([]);

    }

    setLoading(false);
  };

  return (
    <div>

      <h1>GitHub Profile Analyzer</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && <ProfileCard user={user} />}

      {repos.length > 0 && (
        <RepoList repos={repos} />
      )}

    </div>
  );
}

export default App;