import axios from "axios";

const API = "https://api.github.com/users";

export const fetchUser = async (username) => {
    const res = await axios.get(`${API}/${username}`);
    return res.data;
};
export const fetchRepos = async (username) => {
    const res = await axios.get(`${API}/${username}/repos`);
    return res.data;
};