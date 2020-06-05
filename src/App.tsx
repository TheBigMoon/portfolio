import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PostsPageContainer from "./components/PostsPage/PostsPageContainer";
import PostPageContainer from "./components/PostsPage/PostPageContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Route path={'/posts'} render={() => <PostsPageContainer/>}/>
      <Route path={'/post/:postId'} render={() => <PostPageContainer/>}/>
    </div>
  );
}

export default App;
