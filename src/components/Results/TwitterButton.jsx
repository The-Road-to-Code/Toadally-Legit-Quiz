import React from 'react';
import PropTypes from 'prop-types';

const TwitterButton = ({ frog }) => {
    return (
        <>
            <a
                href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Ftoadally-legit-quiz.netlify.app&text=Look%20at%20my%20Toadally%20Cool%20quiz%20results\u0021%20Follow%20the%20link%20below%20to%20see%20your%20hobby%20frog\u0021%20${frog.twitterImage}%202021%20\u00A9%20SadFrogTM%20Cristina%20Aucone/Rootbound%20LLC.%20All%20rights%20reserved&hashtags=roadtocode,hackathon,alchemycodelab,softwareengineer`}
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
