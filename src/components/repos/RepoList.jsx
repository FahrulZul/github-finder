import PropTypes from "prop-types";
import RepoItems from "./RepoItems";

function RepoList({ repos }) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-10">Latest Repositories</h1>
            <ul>
                {repos.map((repo) => (
                    <RepoItems key={repo.id} repo={repo} />
                ))}
            </ul>
        </div>
    );
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;
