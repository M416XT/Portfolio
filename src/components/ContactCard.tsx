import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

const ContactCard: React.FC = () => {
  return (
    <div id='contact'>
        <h2 className="text-2xl font-bold mb-2 text-center">Check out my socials below! ✨</h2>
        <div className="bg-transparent border p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
            <div className="flex justify-between items-center ">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Akhil Marni</h2>
                    <p className="text-sm mb-4"> Undergraduate | Bachelor of Technology, IIT Madras | Electrical Engineering</p>
                    
                    <div className="flex mb-4 space-x-4 sm:hidden">
                        <a href="https://github.com/sandybme" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/sandhanakrishnanr/" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=_Yb1FFUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                            <FaGoogle size={24} />
                        </a>
                    </div>
                    
                    <button className="bg-inherit border text-purple-200 px-4 py-2 rounded shadow hover:bg-gray-100 hover:text-black transition-colors duration-200">
                        <Link href='https://drive.google.com/file/d/1BqUaFVUGCzrrskflvcJ8LLzUkxjImwDr/view?usp=sharing' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div>
                
                <div className="hidden space-x-4 sm:flex">
                    <a href="https://github.com/sandybme" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaGithub size={44} />
                    </a>
                    <a href="https://www.linkedin.com/in/sandhanakrishnanr/" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaLinkedin size={44} />
                    </a>
                    <a href="https://scholar.google.com/citations?user=_Yb1FFUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaGoogle size={44} />
                    </a>
                    {/* <a href="https://discord.gg/wDdeQ2bEbG" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaDiscord size={44} />
                    </a> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactCard;
