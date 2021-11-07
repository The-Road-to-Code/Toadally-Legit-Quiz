import React from 'react';
import PropTypes from 'prop-types';

function DevCard({ name, image, bio, github, linkedin }) {
    return (
        <div className="container mx-auto ">
            <div className=" max-w-sm rounded-lg overflow-hidden shadow-md h-full w-full bg-cream mb-4">
                <div className="px-6 py-4 justify-center items-center h-full w-full">
                    <img
                        className="rounded h-4/5 w-4/5 flex mx-auto mb-2"
                        src={image}
                        alt={name}
                    />
                    <div className="font-black text-xl mb-2 flex justify-center items-center font-Montserrat mb-3 ">
                        {name}
                    </div>
                    <p className="text-gray-700 text-base font-Montserrat">
                        {bio}
                    </p>
                    <div>
                        <div className="flex flex-wrap justify-center items-center space-x-8 mt-2">
                            <a
                                href={linkedin}
                                alt="LinkedIn to"
                                className="rounded-lg px-4 py-2 bg-gradient-to-r from-mint to-blue-500 text-white"
                            >
                                LinkedIn
                            </a>
                            <br />
                            <a
                                href={github}
                                alt="GitHub to"
                                className="rounded-lg px-4 py-2 bg-gradient-to-r from-mint to-blue-500 text-white"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #alchemycodelab
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #roadtocode
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #softwareengineer
                    </span>
                </div>
            </div>
        </div>
    );
}
DevCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

export default DevCard;
