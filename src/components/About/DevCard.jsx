import React from 'react';
import PropTypes from 'prop-types';


function DevCard({name, image, bio, github, linkedin}) {
    return (
        <div>
            <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg h-full w-full">
                <div className="px-6 py-4 justify-center items-center h-full w-full">
                    <img className="rounded h-4/5 w-4/5 justify-center" src={image} alt={name} />
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                    {bio}
                    </p>
                    <div>
                        <a href={linkedin} alt="LinkedIn to ">LinkedIn</a><br/>
                        <a href={github} alt="GitHub to ">GitHub</a>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alchemycodelab</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#roadtocode</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softwareengineer</span>
                </div> 
            </div>
        </div>
    )
}
DevCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
}


export default DevCard