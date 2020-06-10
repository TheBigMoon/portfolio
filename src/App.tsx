import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PostsPageContainer from "./components/PostsPage/PostsPageContainer";
import PostPageContainer from "./components/PostsPage/PostPageContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/common/WelcomePage/WelcomePage";

function App() {
  return (
    <div>
      <Route exact path={'/'}>
        <WelcomePage/>
      </Route>
      <Route path={'/posts'}>
        <Header/>
        <div className={'content'}>
          <Route exact path={'/posts'} render={() => <PostsPageContainer/>}/>
          <Route path={'/posts/:postId'} render={() => <PostPageContainer/>}/>
        </div>
        <Footer/>
      </Route>
    </div>
  );
}

export default App;
