import React from 'react';
import Link from 'next/link';

const navLinks = [
    { title: "Home", icon: "fas fa-home", href: "/" },
    { title: "About Me", icon: "fas fa-user", href: "/aboutme" },
    { title: "Resume/CV", icon: "fas fa-file-alt", href: "/eduexp" },
    { title: "Portfolio/Works", icon: "fas fa-briefcase", href: "/projects" },
    { title: "Specializations", icon: "fas fa-comments", href: "/spec" },
    { title: "Services/Skills", icon: "fas fa-cogs", href: "/skills" },
    { title: "Contact", icon: "fas fa-envelope", href: "/contactme" },
];

const PRIMARY_COLOR = '#FF5C00'; 
const BACKGROUND_COLOR = '#1D1C1D';
const CARD_BACKGROUND = '#1a1a1a';

const SkillIcon = ({ icon, label, percentage }) => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="relative w-24 h-24 mb-2">
                <div className="w-full h-full rounded-full flex items-center justify-center border-2 border-gray-700 hover:border-primary-orange transition duration-300">
                    <div className="text-6xl text-primary-orange opacity-80" aria-label={label}>
                        {label === 'React' && (
                            <i className="fab fa-react animate-spin-slow" style={{ animationDuration: '8s' }}></i>
                        )}
                        {label === 'Figma' && (
                            <i className="fab fa-figma text-white"></i>
                        )}
                        {label === 'HTML/CSS' && (
                            <i className="fas fa-code text-white"></i>
                        )}
                        {label === 'Next.js' && (
                            <span className="font-extrabold text-white">N</span> 
                        )}
                        {label === 'Java Script' && (
                            <i className="fab fa-js-square text-yellow-500"></i>
                        )}
                        {label === 'GitHub' && (
                            <i className="fab fa-github text-white"></i>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-sm font-medium text-primary-orange mb-1">{percentage}%</p>
            <p className="text-gray-300 text-base">{label}</p>
        </div>
    );
};

export default function HomePage() {
    
    const skills = [
        { label: "React", percentage: 60, icon: "fab fa-react" },
        { label: "Figma", percentage: 85, icon: "fab fa-figma" },
        { label: "HTML/CSS", percentage: 80, icon: "fas fa-code" },
        { label: "Next.js", percentage: 80, icon: "N" },
        { label: "Java Script", percentage: 60, icon: "fab fa-js-square" },
        { label: "GitHub", percentage: 90, icon: "fab fa-github" },
    ];

  return (
    <>
        <title>Jirawad - Interactive Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        
        <script src="https://cdn.tailwindcss.com" async></script>
        
        <style>
          {`
            body {
                font-family: 'Inter', sans-serif;
                background-color: ${BACKGROUND_COLOR};
                color: #f0f0f0;
            }
            .text-primary-orange {
                color: ${PRIMARY_COLOR};
            }
            .bg-primary-orange {
                background-color: ${PRIMARY_COLOR};
            }
            .shadow-primary-orange {
                box-shadow: 0 0 15px 5px ${PRIMARY_COLOR}33;
            }
            .sidebar-active {
                color: ${PRIMARY_COLOR};
                background-color: #2a2a2a;
            }
            /* Custom focus style for inputs */
            .input-field:focus {
                outline: none;
                border-color: ${PRIMARY_COLOR};
            }
            /* Custom animation for React icon */
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin-slow 8s linear infinite;
            }
          `}
        </style>
        
        <script>
          {`
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            'dark-card': '${CARD_BACKGROUND}',
                            'primary-orange': '${PRIMARY_COLOR}',
                        }
                    }
                }
            }
          `}
        </script>
      
      <div className="p-4 md:p-8 lg:p-12 min-h-screen flex items-center justify-center">

        <div className="main-container w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="profile-card lg:col-span-1 p-6 md:p-8 rounded-2xl shadow-2xl bg-dark-card border border-gray-700/50">
                    <h2 className="text-3xl font-bold mb-4"><span className="text-primary-orange">J</span>irawad</h2>
                    
                    <div className="mb-6 overflow-hidden rounded-2xl border-4 border-gray-700">
                        <img 
                            src="/avatar.png" 
                            alt="Profile Avatar" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="text-center space-y-2 mb-8">
                        <p className="text-lg font-medium">STU ID: 6652410033</p>
                        <p className="text-sm text-gray-400">Fullstack Web Developer</p>
                    </div>

                    <div className="flex justify-center space-x-4 mb-10 text-gray-400">
                        <a href="#" className="hover:text-primary-orange transition duration-300 transform hover:scale-110"><i className="fab fa-facebook-f text-xl"></i></a>
                        <a href="#" className="hover:text-primary-orange transition duration-300 transform hover:scale-110"><i className="fab fa-twitter text-xl"></i></a>
                        <a href="#" className="hover:text-primary-orange transition duration-300 transform hover:scale-110"><i className="fab fa-instagram text-xl"></i></a>
                        <a href="#" className="hover:text-primary-orange transition duration-300 transform hover:scale-110"><i className="fab fa-linkedin-in text-xl"></i></a>
                        <a href="#" className="hover:text-primary-orange transition duration-300 transform hover:scale-110"><i className="fab fa-google text-xl"></i></a>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-primary-orange text-black font-bold text-lg shadow-lg hover:shadow-primary-orange/50 transition duration-300 transform hover:scale-[1.02]">
                        HIRE ME !
                    </button>
                </div>

                <div className="main-content lg:col-span-2 p-6 md:p-8 rounded-2xl">
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                        My <span className="text-primary-orange">Skills</span>
                    </h1>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                        {skills.map((skill, index) => (
                            <SkillIcon 
                                key={index}
                                label={skill.label}
                                percentage={skill.percentage}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 p-3 bg-dark-card/80 backdrop-blur-sm rounded-full border border-gray-700/50 hidden lg:block shadow-2xl">
            <nav className="flex flex-col space-y-4 text-gray-400">
                {navLinks.map((link, index) => (
                    <Link 
                      key={index}
                      href={link.href} 
                      className={`p-2 rounded-full hover:text-primary-orange transition duration-200 ${index === 5 ? 'sidebar-active' : 'hover:bg-gray-700'}`}
                      title={link.title}
                    >
                      <i className={`${link.icon} text-xl`}></i>
                    </Link>
                ))}
            </nav>
        </div>
      </div>
    </>
  );
}
