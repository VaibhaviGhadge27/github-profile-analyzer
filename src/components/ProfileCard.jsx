function ProfileCard({ user }){
    return (
        <div className="profile">
            <img src = {user.avatar_url} alt="avatar"/>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>

            <div className="stats">
              <span>Followers:{user.followers}</span> |
              <span>Following: {user.following}</span> |
              <span>Repos: {user.public_repos}</span>
            </div>
        </div>
    );
}
export default ProfileCard;