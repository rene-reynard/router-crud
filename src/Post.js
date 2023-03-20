import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import PostView from './PostView';

const Post = ({post}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${post.id}`);
  }

  return (
    <PostView post={post} handleClick={handleClick} />
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

export default Post;