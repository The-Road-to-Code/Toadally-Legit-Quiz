import React from 'react';
import PropTypes from 'prop-types';

const TwitterButton = ({frog}) => {
  return (
    <a href={`https://twitter.com/intent/tweet?url=www.deployed.com&text=look%20at%20my%20cool%20quiz%20results%20${frog.twitterImage}`} target="_blank" rel="noreferrer">post to Twitter</a>
  )
}

TwitterButton.propTypes = {
  frog: PropTypes.object
}

export default TwitterButton;