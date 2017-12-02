import React, { PropTypes } from 'react';

import styles from './PostVote.css';

const PostVote = (props, context) => {
  return (
    <div className={styles['post-vote']}>
    <button 
      className={styles['post-vote-button']}
      onClick={props.handleThumbDown()} >
        -
    </button>
    Votes: {props.voteCount}
    <button 
      className={styles['post-vote-button']}
      onClick={props.handleThumbUp()} >
        +
    </button>
  </div>
  );
};

PostVote.propTypes = {
  voteCount: PropTypes.number.isRequired,
  handleThumbUp: PropTypes.func.isRequired,
  handleThumbDown: PropTypes.func.isRequired,
};

export default PostVote;