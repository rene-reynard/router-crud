import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from './Posts';
import NewPost from './NewPost';
import PostPreview from './PostPreview';
import PostContext from './PostContext';

function App() {
  const [currentPost, setCurrentPost] = useState('');
  const [posts, setPosts] = useState([]);
  
  const updatePosts = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts`)
    .then(res => res.json())
    .then(res => setPosts(res))
  }

  useEffect(() => {
    updatePosts()
  }, []);

  return (
    <PostContext.Provider value={[currentPost, setCurrentPost, updatePosts]}>
      <div className="App">
        <Router>
          <Route exact path="/" render={props => <Posts {...props} posts={posts} />} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:id" render={(props) => <PostPreview {...props} posts={posts} />} />
        </Router>
      </div>
    </PostContext.Provider>
  );
}

export default App;
