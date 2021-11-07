import React from 'react';
import Bio from '../components/About/Bio';

function AboutContainer() {
    const person = [
        {
            name: 'Juli Vela',
            image: require('../assets/juli.jpg').default,
            bio: 'I am quirky, neurodiverent software engineer based out of beautiful Bandon-By-The-Sea in Southern Oregon! Driven by my passion for learning and creativity, I strive to stay active and current with new technologies. Using my unique perspective of the world, I enjoy combining my passions for astronomy, creativity, social wellbeing, with my love and expertise in software development.',
            linkedin: 'https://www.linkedin.com/in/juliannevela',
            github: 'https://github.com/juliannevela',
        },
        {
            name: 'Nicole Martin',
            image: require('../assets/nicole.png').default,
            bio: 'I am a full stack software engineer located in Portland, OR. I enjoy working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with my dog, Cooper.',
            linkedin: 'https://www.linkedin.com/in/nicolemartinpdx/',
            github: 'https://github.com/nicole-m-martin',
        },
        {
            name: 'Patrick Hrabos',
            image: require('../assets/patrick.jpg').default,
            bio: 'I am a software engineer with a background in public and private accounting and a proven track record of meeting deadlines and delivering impactful results. I am enthusiastic about using code to solve real-world problems. When I am not coding I like to run long distances, observe nature, travel, and sip the best loose-leaf teas I can find.',
            linkedin: 'https://www.linkedin.com/in/patrick-hrabos/',
            github: 'https://github.com/phrabos',
        },
        {
            name: 'Paul Brubaker',
            image: require('../assets/paul.jpg').default,
            bio: 'I am a full stack software engineer who loves to collaborate on interesting problems.',
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
