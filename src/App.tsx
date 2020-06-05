import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PostsPageContainer from "./components/PostsPage/PostsPageContainer";
import PostPageContainer from "./components/PostsPage/PostPageContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <div className={'content'}>
        <Route path={'/posts'} render={() => <PostsPageContainer/>}/>
        <Route path={'/post/:postId'} render={() => <PostPageContainer/>}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
