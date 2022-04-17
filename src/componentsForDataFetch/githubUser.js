const GithubUser = ({user}) => {
  return (
    <li key={user.id}>
      <p>{user.login} </p>
      <p>{user.html_url} </p>
      {user.avatar_url
      ? <p>
          <img src={user.avatar_url} 
            alt="not provided" 
            width="200"
            height="200"/>
        </p>
      : null}
    </li>
  )
}

export default GithubUser;