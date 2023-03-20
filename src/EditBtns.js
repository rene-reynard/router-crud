import React, {useContext} from 'react';
import PostContext from './PostContext';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const EditBtns = ({showEditBtns, editMode, setEditMode, post}) => {
  const history = useHistory();
  const [currentPost, setCurrentPost , updatePosts] = useContext(PostContext);

  const handleDelete = e => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${post.id}`, {
      method: "DELETE"
    })
    .then(() => {
      updatePosts();
      history.push('/');
    })
  }

  const handleEdit = e => {
    setEditMode(prevEditMode => {
      if (!prevEditMode) {
        setCurrentPost(post.content);
      } else {
        setCurrentPost('');
      }
      return true;
    });
  }

  const handleSave = e => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        id: post.id, //id === 0 сервер обрабатывает как новый пост, сам присваивает новый id
        content: currentPost
      })
    })
    .then(() => {
      setCurrentPost('');
      setEditMode(false);
      updatePosts();
      history.push(`/posts/${post.id}`);
    });
  }


  if (!showEditBtns) return null;

  if (editMode) {
    return (
      <div>
        <button className="btn btn-primary pull-right" onClick={handleSave}>Сохранить</button>
      </div>
    )
  }
  return (
      <div>
        <button className="btn btn-primary pull-right" onClick={handleEdit}>Изменить</button>
        <button className="btn btn-primary pull-right" onClick={handleDelete}>Удалить</button>
      </div>
  )
}

EditBtns.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
  showEditBtns: PropTypes.bool,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
}

export default EditBtns;