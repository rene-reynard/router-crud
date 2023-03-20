import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = ({editMode, setEditMode}) => {
  if (!editMode) return null;

  return (
    <div>
      <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => setEditMode(false)}>
        ×
      </button> 
    </div>
  );
};

CloseBtn.propTypes = {
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
};

export default CloseBtn;