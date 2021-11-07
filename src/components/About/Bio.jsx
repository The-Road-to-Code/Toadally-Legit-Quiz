import React from 'react';
import PropTypes from 'prop-types';
import DevCard from './DevCard';

function Bio({ person }) {
    return (
        <div className="mb-20 flex items-center justify-center py-20 px-20">
            <ul className="flex flex-wrap space-x-9 justify-center">
                {person.map((item) => (
                    <li key={item.name}>
                        <DevCard
                            name={item.name}
                            bio={item.bio}
                            image={item.image}
                            linkedin={item.linkedin}
                            github={item.github}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
Bio.propTypes = {
    person: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            linkedin: PropTypes.string.isRequired,
            github: PropTypes.string.isRequired,
        })
    ),
};

export default Bio;
