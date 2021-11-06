import React from 'react';

const Footer = () => {
    return (
        <section className="fixed bottom-0 w-screen">
            <div className="flex justify-evenly items-center bg-red-500  h-10 text-black ">
                <h5 className="text-xs">
                    Images courtesy of:
                    <a
                        className="hover:bg-green-500 "
                        href="http://www.cristinaaucone.com/"
                    >
                        {' '}
                        Cristina Aucone
                    </a>
                    /Rootbound LLC. SadFrogTM All rights reserved. ©2021{' '}
                </h5>
                <a href="http://www.cristinaaucone.com/"></a>
            </div>
        </section>
    );
};

export default Footer;
