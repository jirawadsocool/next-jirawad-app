import React from 'react';
import Link from 'next/link';

const navLinks = [
    { title: "Home", icon: "fas fa-home", href: "/" },
    { title: "About Me", icon: "fas fa-user", href: "/aboutme" },
    { title: "Resume/CV", icon: "fas fa-file-alt", href: "/eduexp" },
    { title: "Portfolio/Works", icon: "fas fa-briefcase", href: "/projects" },
    { title: "Services/Skills", icon: "fas fa-cogs", href: "/skills" },
    { title: "Testimonials/Feedback", icon: "fas fa-comments", href: "#" },
    { title: "Contact", icon: "fas fa-envelope", href: "/contactme" },
];

const PRIMARY_COLOR = '#FF5C00'; 
const BACKGROUND_COLOR = '#1D1C1D';
const CARD_BACKGROUND = '#1a1a1a';

export default function HomePage() {
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
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Featured <span className="text-primary-orange">Projects</span>
                    </h1>
                    
                    <div className="bg-dark-card p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-primary-orange">
                        
                        <h2 className="text-2xl font-semibold mb-2">
                            Manage Task App - <span className="text-primary-orange">fullstack web development</span>
                        </h2>
                        <p className="text-gray-400 text-base mb-6">
                            Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end. Watch the video to see the responsive landing page in action!
                        </p>
                        
                        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mb-6">
                            <img 
                                src="https://placehold.co/800x450/374151/ffffff?text=Project+Video+Mockup" 
                                alt="Project Screenshot Placeholder" 
                                className="w-full h-full object-cover opacity-50"
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-16 h-16 bg-primary-orange/80 backdrop-blur-sm rounded-full flex items-center justify-center transition duration-300 hover:scale-110 shadow-lg shadow-primary-orange/50">
                                    <i className="fas fa-play text-white text-2xl"></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-2 mt-4">
                            <span className="h-2 w-6 bg-primary-orange rounded-full"></span>
                            <span className="h-2 w-2 bg-gray-700 rounded-full"></span>
                            <span className="h-2 w-2 bg-gray-700 rounded-full"></span>
                        </div>
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
                      className={`p-2 rounded-full hover:text-primary-orange transition duration-200 ${index === 3 ? 'sidebar-active' : 'hover:bg-gray-700'}`}
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