import React from 'react';
import PropTypes from 'prop-types';

const TwitterButton = ({ frog }) => {
    return (
        <>
            <div className="rounded-lg px-4 py-4 bg-gradient-to-r from-pink to-bluegreen text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a className="flex space-x-1" href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Ftoadally-legit-quiz.netlify.app&text=Look%20at%20my%20Toadally%20Cool%20quiz%20results\u0021%20Follow%20the%20link%20below%20to%20see%20your%20hobby%20frog\u0021%20${frog.twitterImage}%202021%20\u00A9%20SadFrogTM%20Cristina%20Aucone/Rootbound%20LLC.%20All%20rights%20reserved&hashtags=roadtocode,hackathon,alchemycodelab,softwareengineer`}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="w-9"
                    alt="twitter icon"
                    src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png"
                /><p>Post to twitter</p>
            </a> 
            </div>
        </>
    );
};

TwitterButton.propTypes = {
    frog: PropTypes.object,
};

export default TwitterButton;
