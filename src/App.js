import './App.css';
import CheckBoxUsingHooks from './components/checkBoxWithUseReducer';
import GithubUserList from './componentsForDataFetch/githubUserList';
import GithubUserById from './componentsForDataFetch/githubUserById';

import StarRating from './components/StarRating';

function App() {
  const user = {'login':'lukas'}
  return (
    // < CheckBoxUsingHooks />
    // <GithubUserList />
    <GithubUserById user={user}/>
    // <StarRating />
  );
}

export default App;
