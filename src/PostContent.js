import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import PostContext from './PostContext';

const PostContent = ({post, editMode}) => {
  const [currentPost, setCurrentPost] = useContext(PostContext);

  if (editMode) {
    return (
      <input value={currentPost} onChange={e => setCurrentPost(e.target.value)} />
    )
  }
  return <p>{post.content}</p>
}

PostContent.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
  editMode: PropTypes.bool,
}

export default PostContent;