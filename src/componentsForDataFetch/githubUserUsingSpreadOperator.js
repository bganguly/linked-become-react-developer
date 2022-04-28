const GithubUserUsingSpreadOperator = ({login, html_url, avatar_url}) => {
  return (
    <>
      <p>{login} </p>
      <p>
        <a href={html_url}>{login}'s github link</a>
      </p>
      {avatar_url
      ? <p>
          <img src={avatar_url} 
            alt="not provided" 
            width="200"
            height="200"/>
        </p>
      : null}
    </>
  )
}

export default GithubUserUsingSpreadOperator;