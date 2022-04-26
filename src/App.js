import './App.css';
import CheckBoxUsingHooks from './components/checkBoxWithUseReducer';
import GithubUserList from './componentsForDataFetch/githubUserList';
import GithubUserById from './componentsForDataFetch/githubUserById';
import GithubUserUsingSpreadOperator from './componentsForDataFetch/githubUserUsingSpreadOperator';

import StarRating from './components/StarRating';

function App() {
  const user = {'login':'lukas'}
  const userUsingSpreadOperator = {
    login:'lukas', 
    html_url:'https://github.com/lukas',
    avatar_url:'https://avatars.githubusercontent.com/u/29?v=4'
  }

  return (
    // < CheckBoxUsingHooks />
    // <GithubUserList />
    // <GithubUserById user={user}/>
    <GithubUserUsingSpreadOperator {...userUsingSpreadOperator}/>
    // <StarRating />
  );
}

export default App;
