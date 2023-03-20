import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import NewPost from './NewPost';

const Posts = ({posts}) => {
  return (
    <div>
      <NewPost />
      {
        posts.map(post => {
          return (
            <Post key={post.id} post={post} />
          )
        })
      }
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  )
};

export default Posts;