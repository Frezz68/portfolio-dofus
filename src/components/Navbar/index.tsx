import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black border-t-4 border-[#96a702] p-1 md:p-3 lg:p-4 ">
            <div className="container mx-auto flex justify-center items-center text-base md:text-lg lg:text-2xl">
                <div className="font-bold text-right pr-4 sm:pr-8">
                    <div className="flex text-white">
                        <div className='border-r border-[#333] pr-5 sm:pr-7'>
                            <a href="#home" className="hover:text-[#aab700]">Accueil</a>
                        </div>
                        <div className='pl-5 sm:pl-7'>
                            <a href="#about" className="hover:text-[#aab700]">À propos</a>
                        </div>
                    </div>
                </div>
                <div className="w-33">
                    <a href='/'><Image src="/photo/emeraude.png" alt="logo" width={33} height={41} /></a>
                </div>
                <div className="font-bold text-left pl-4 sm:pl-8">
                    <div className="flex text-white">
                        <div className='border-r border-[#333] pr-5 sm:pr-7'>
                            <a href="#projects" className="hover:text-[#aab700]">Projets</a>
                        </div>
                        <div className='pl-5 sm:pl-7'>
                            <a href="#contact" className="hover:text-[#aab700]">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;