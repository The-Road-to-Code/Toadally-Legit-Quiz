import React from 'react';
import nicole from '../../assets/nicole.png';
import juli from '../../assets/juli.jpg';
import patrick from '../../assets/patrick.jpg';
import josie from '../../assets/josie.jpeg';

function DevCard() {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <img className="rounded" src={nicole} alt="Nicole Martin" />
                    <div className="font-bold text-xl mb-2">Hi, my name is Nicole!</div>
                    <p className="text-gray-700 text-base">
                    I am a full stack software engineer located in Portland, OR. I enjoy working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with my dog, Cooper.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/nicolemartinpdx/" alt="LinkedIn to Nicole Martin">LinkedIn</a> 
                        <a href="https://github.com/nicole-m-martin" alt="GitHub to Nicole Martin">GitHub</a>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alchemycodelab</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#roadtocode</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softwareengineer</span>
                </div>
                <div className="px-6 py-4">
                    <img className="rounded" src={juli} alt="Juli Vela" />
                    <div className="font-bold text-xl mb-2">Hi, my name is Juli!</div>
                    <p className="text-gray-700 text-base">I am quirky, neurodiverent software engineer based out of beautiful Bandon-By-The-Sea in Southern Oregon! Driven by my passion for learning and creativity, I strive to stay active and current with new technologies. Using my unique perspective of the world, I enjoy combining my passions for astronomy, creativity, social wellbeing, with my love and expertise in software development.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/juliannevela" alt="LinkedIn to Juli Vela">LinkedIn</a><br/>
                        <a href="https://github.com/juliannevela" alt="GitHub to Juli Vela">GitHub</a>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alchemycodelab</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#roadtocode</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softwareengineer</span>
                </div>
                <div className="px-6 py-4">
                    <img className="rounded" src={patrick} alt="Patrick Hrabos" />
                    <div className="font-bold text-xl mb-2">Hi, my name is Patrick!</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec varius lectus. Integer in scelerisque est, quis finibus ex. Phasellus egestas libero non libero pulvinar sodales. Vestibulum nisl neque, commodo vitae leo nec, gravida convallis metus. Pellentesque molestie non felis et tempus.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/patrick-hrabos/" alt="LinkedIn to Patrick Hrabos">LinkedIn</a><br/>
                        <a href="https://github.com/phrabos" alt="GitHub to Patrick Hrabos">GitHub</a>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alchemycodelab</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#roadtocode</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softwareengineer</span>
                </div>
                <div className="px-6 py-4">
                    <img className="rounded" src={josie} alt="Josie M. Cantu" />
                    <div className="font-bold text-xl mb-2">Hi, my name is Josie!</div>
                    <p className="text-gray-700 text-base">Josie M. Cantu is a Software Engineer who is driven by her curiosity and desire to develop her skills. She thrives in a team setting and loves collaboration. She is a dog lover and dog mom to Noey.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/josiemcantu" alt="LinkedIn to Josie M. Cantu">LinkedIn</a><br/>
                        <a href="https://github.com/JosieMCantu" alt="GitHub to Josie M. Cantu">GitHub</a>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alchemycodelab</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#roadtocode</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#softwareengineer</span>
                </div>
                <div className="px-6 py-4">
                    {/* <img className="rounded" src={josie} alt="Paul Brubaker" /> */}
                    <div className="font-bold text-xl mb-2">Hi, my name is Paul!</div>
                    <p className="text-gray-700 text-base">
                    </p>
                    <div>
                        <a href="" alt="LinkedIn to">LinkedIn</a><br/>
                        <a href="" alt="GitHub to">GitHub</a>
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

export default DevCard
