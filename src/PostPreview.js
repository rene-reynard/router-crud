import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PostView from './PostView';

const PostPreview = ({match, posts}) => {
  const [editMode, setEditMode] = useState(false);
  const {id} = match.params;
  let post = posts.find(post => parseInt(post.id) === parseInt(id));

  return <PostView post={post} showEditBtns editMode={editMode} setEditMode={setEditMode}/>
};

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
  match: PropTypes.object,
};

export default PostPreview;