import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

//footer component
export const Footer = () => {
    return (
        <footer className="bg-gray-100 py-5">
            <div className="container mx-auto flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center space-x-6 mb-4">
                    <a 
                        href="https://github.com/Vrushabh48" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-blue-500 transition duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/vrushabhpatil48/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-blue-500 transition duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a 
                        href="https://x.com/vrushabhpatil48" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-blue-500 transition duration-200"
                    >
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                    <a 
                        href="https://www.instagram.com/vrushabhpatil_48/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-blue-500 transition duration-200"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <p className="text-gray-600">
                    &copy; {new Date().getFullYear()} Made by Vrushabh Patil. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
