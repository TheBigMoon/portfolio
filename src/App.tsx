import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PostsPageContainer from "./components/PostsPage/PostsPageContainer";
import PostPageContainer from "./components/PostsPage/PostPageContainer";

function App() {
  return (
    <div>
    <Route path={'/posts'} render={() => <PostsPageContainer/>}/>
    <Route path={'/post/:postId'} render={() => <PostPageContainer/>}/>
    </div>
  );
}

export default App;
