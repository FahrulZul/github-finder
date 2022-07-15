import PropTypes from "prop-types";
import { BsLink45Deg } from "react-icons/bs";
import { FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";

function RepoItems({ repo }) {
    return (
        <div className="card bg-zinc-50 mb-4 hover:bg-zinc-100 shadow">
            <div className="card-body">
                <h3 className="text-xl font-bold mb-2">
                    <a
                        className="text-lg text-zinc-700 hover:text-blue-500"
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLink45Deg className="inline" size={27} /> {repo.name}
                    </a>
                </h3>
                <p className="mb-2 text-sm">{repo.description}</p>
                <div>
                    <div className="badge badge-outline badge-lg text-sky-400 rounded-xl mr-2">
                        <FaEye className="mr-2" /> {repo.watchers_count}
                    </div>
                    <div className="badge badge-outline badge-lg text-yellow-400 rounded-xl mr-2">
                        <FaStar className="mr-2" /> {repo.stargazers_count}
                    </div>
                    <div className="badge badge-outline badge-lg text-red-400 rounded-xl mr-2">
                        <FaInfo className="mr-2" /> {repo.open_issues}
                    </div>
                    <div className="badge badge-outline badge-lg text-green-400 rounded-xl mr-2">
                        <FaUtensils className="mr-2" /> {repo.forks}
                    </div>
                </div>
            </div>
        </div>
    );
}

RepoItems.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItems;
