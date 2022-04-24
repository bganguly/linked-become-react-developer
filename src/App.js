import './App.css';
import CheckBoxUsingHooks from './components/checkBoxWithUseReducer';
import GithubUserList from './componentsForDataFetch/githubUserList';
import GithubUserById from './componentsForDataFetch/githubUserById';

import StarRating from './components/StarRating';

function App() {
  return (
    // < CheckBoxUsingHooks />
    // <GithubUserList />
    <GithubUserById login='gaearon'/>
    // <StarRating />
  );
}

export default App;
