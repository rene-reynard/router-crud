import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import CurrentPostContext from './PostContext';
import {useHistory} from 'react-router-dom';

const NewPost = ({match}) => {
  const [currentPost, setCurrentPost, updatePosts] = useContext(CurrentPostContext);
  const history = useHistory();
  const isNewPostPage = match && match.path === '/posts/new';

  const close = isNewPostPage 
    ? <button type="button" className="close" onClick={() => history.push('/')}>
        ×
      </button> 
    : null;
  
  const handleSubmit = e => {
    e.preventDefault();
    if (isNewPostPage) {
      fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
        method: "POST",
        body: JSON.stringify({
          id: 0, //id === 0 сервер обрабатывает как новый пост, сам присваивает новый id
          content: currentPost
        })
      })
      .then(() => {
        updatePosts();
        setCurrentPost('');
        history.push('/');
      });
    }
    history.push('/posts/new');
  }

  return (
    <div className="container">
      <div className="well col-md-5"> 
        <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
          {close}
          <h4>What's New</h4>
            <div className="form-group" style={{padding: 14}}>
              <textarea className="form-control" placeholder="Create new post" value={currentPost} onChange={e => setCurrentPost(e.target.value)} />
            </div>
          <button className="btn btn-primary pull-right" type="submit">{isNewPostPage ? 'Опубликовать': 'Создать пост'}</button>
          <ul className="list-inline">
            <li><a href=""><i className="glyphicon glyphicon-upload"></i></a></li>
            <li><a href=""><i className="glyphicon glyphicon-camera"></i></a></li>
            <li><a href=""><i className="glyphicon glyphicon-map-marker"></i></a></li>
          </ul>
        </form>
      </div>
    </div>
  );
}

NewPost.propTypes = {
  match: PropTypes.object,
}

export default NewPost;