import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import EditBtns from './EditBtns';
import PostContent from './PostContent';
import CloseBtn from './CloseBtn';

const PostView = ({post, handleClick, showEditBtns, editMode, setEditMode}) => {
  if (!post) return null;
  return (
    <div className="container">
      <div className={clsx('col-md-5', 'panel', 'panel-default', !showEditBtns && 'clickable' )} onClick={handleClick || null}>
        <CloseBtn editMode={editMode} setEditMode={setEditMode} />
          <div className="panel-body">
            <section className="post-heading">
                  <div className="row">
                      <div className="col-md-11">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="avatar" />
                              </a>
                            </div>
                            <div className="media-body">
                              <a href="#" className="anchor-username"><h4 className="media-heading">Bayu Darmantra</h4></a> 
                              <a href="#" className="anchor-time">{moment(post.created).fromNow(true)}</a>
                            </div>
                          </div>
                      </div>
                  </div>             
            </section>
            <section className="post-body">
                <PostContent editMode={editMode} post={post} />
            </section>
            <section className="post-footer">
                <hr />
                <div className="post-footer-option container">
                      <ul className="list-unstyled">
                          <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                          <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                          <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                      </ul>
                </div>
                <EditBtns showEditBtns={showEditBtns} post={post} editMode={editMode} setEditMode={setEditMode} />
            </section>
          </div>
      </div>   
    </div>
  );
}

PostView.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func,
  showEditBtns: PropTypes.bool,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
};

export default PostView;