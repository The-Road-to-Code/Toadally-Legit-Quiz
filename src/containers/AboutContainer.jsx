import React from 'react';
import Bio from '../components/About/Bio';

function AboutContainer() {
    const person = [
        {
            name: 'Juli Vela',
            image: require('../assets/juli.jpg').default,
            bio: 'Juli is a quirky, neurodiverent software engineer based out of beautiful Bandon-By-The-Sea in Southern Oregon! Driven by their passion for learning and creativity, they strive to stay active and current with new technologies. Using their unique perspective of the world, they enjoy combining their passions for astronomy, creativity, and social wellbeing, with their love and expertise in software development.',
            linkedin: 'https://www.linkedin.com/in/juliannevela',
            github: 'https://github.com/juliannevela',
        },
        {
            name: 'Nicole Martin',
            image: require('../assets/nicole.png').default,
            bio: 'Nicole is a full stack software engineer located in Portland, OR. She enjoys working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with her dog, Cooper.',
            linkedin: 'https://www.linkedin.com/in/nicolemartinpdx/',
            github: 'https://github.com/nicole-m-martin',
        },
        {
            name: 'Patrick Hrabos',
            image: require('../assets/patrick.jpg').default,
            bio: 'Patrick is a software engineer with a background in public and private accounting and a proven track record of meeting deadlines and delivering impactful results. He is enthusiastic about using code to solve real-world problems. When he is not coding he likes to run long distances, observe nature, travel, and sip the best loose-leaf teas he can find.',
            linkedin: 'https://www.linkedin.com/in/patrick-hrabos/',
            github: 'https://github.com/phrabos',
        },
        {
            name: 'Paul Brubaker',
            image: require('../assets/paul.jpg').default,
            bio: 'Paul is a full stack software engineer who loves to collaborate on interesting problems.',
            linkedin: 'https://www.linkedin.com/in/paul-brubaker-a94597176/',
            github: 'https://github.com/p-brubaker',
        },
        {
            name: 'Josie M. Cantu',
            image: require('../assets/josie.jpeg').default,
            bio: 'Josie M. Cantu is a Software Engineer who is driven by her curiosity and desire to develop her skills. She thrives in a team setting and loves collaboration. She is a dog lover and dog mom to Noey.',
            linkedin: 'https://www.linkedin.com/in/josiemcantu',
            github: 'https://github.com/JosieMCantu',
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center mt-5">
            <h1 className="text-3xl font-Quicksand font-black mb-8">
                Meet the Developers!
            </h1>
            <Bio person={person} />
            </div>
        </div>
    );
}

export default AboutContainer;
