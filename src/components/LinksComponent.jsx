import {
  FaHome,
  FaFileAlt,
  FaSearch,
  FaForumbee,
  FaReddit,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const LinksComponent = ({ crypto }) => {
  return (
    <div className="p-2 w-full  sm:w-[95%] mx-auto  border-gray-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-mono dark:text-white font-semibold text-gray-800 mb-6 text-center">
        Relevant Links
      </h2>
      <ul className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 ">
        {crypto.links.homepage[0] && (
          <li className="relative group">
            <a
              href={crypto.links.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaHome />
                <span className="font-medium">Homepage</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.homepage[0]}
              </div>
            </a>
          </li>
        )}
        {crypto.links.whitepaper && (
          <li className="relative group">
            <a
              href={crypto.links.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaFileAlt />
                <span className="font-medium">Whitepaper</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.whitepaper}
              </div>
            </a>
          </li>
        )}
        {crypto.links.blockchain_site[0] && (
          <li className="relative group">
            <a
              href={crypto.links.blockchain_site[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaSearch />
                <span className="font-medium">Blockchain Explorer</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.blockchain_site[0]}
              </div>
            </a>
          </li>
        )}
        {crypto.links.official_forum_url[0] && (
          <li className="relative group">
            <a
              href={crypto.links.official_forum_url[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaForumbee />
                <span className="font-medium">Official Forum</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.official_forum_url[0]}
              </div>
            </a>
          </li>
        )}
        {crypto.links.subreddit_url && (
          <li className="relative group">
            <a
              href={crypto.links.subreddit_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaReddit />
                <span className="font-medium">Subreddit</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.subreddit_url}
              </div>
            </a>
          </li>
        )}
        {crypto.links.twitter_screen_name && (
          <li className="relative group">
            <a
              href={`https://twitter.com/${crypto.links.twitter_screen_name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaTwitter />
                <span className="font-medium">Twitter</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                @{crypto.links.twitter_screen_name}
              </div>
            </a>
          </li>
        )}
        {crypto.links.facebook_username && (
          <li className="relative group">
            <a
              href={`https://facebook.com/${crypto.links.facebook_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start text-primary-light hover:text-primary-dark transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaFacebook />
                <span className="font-medium">Facebook</span>
              </div>
              <div className="ml-6 mt-1 text-gray-500 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {crypto.links.facebook_username}
              </div>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LinksComponent;
