import React from 'react';
import PropTypes from 'prop-types';

const TwitterButton = ({ frog }) => {
    return (
        <>
            <a
                href={`https://twitter.com/intent/tweet?url=www.deployed.com&text=look%20at%20my%20cool%20quiz%20results%20${frog.twitterImage}%202021%20\u00A9%20SadFrogTM%20Cristina%20Aucone/Rootbound%20LLC.%20All%20rights%20reserved%20follow%20link%20to%20take%20the%20quiz`}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    height="50px"
                    width="50px"
                    alt="twitter icon"
                    src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png"
                />
                Post to twitter
            </a>
        </>
    );
};

TwitterButton.propTypes = {
    frog: PropTypes.object,
};

export default TwitterButton;
