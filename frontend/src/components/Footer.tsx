import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="bg-gray-100 py-5">
            <div className="container mx-auto flex flex-col items-center text-center">
                <div className="flex space-x-6 mb-4">
                    <a href="https://github.com/Vrushabh48" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/vrushabhpatil48/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://x.com/vrushabhpatil48" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/vrushabhpatil_48/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <p className="text-gray-600">&copy; Made by Vrushabh Patil. All rights reserved.</p>
            </div>
        </footer>
    );
};
