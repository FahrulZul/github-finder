import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineStorefront } from "react-icons/md";
import { FaCodepen } from "react-icons/fa";
import { BiUserPlus, BiUserCheck } from "react-icons/bi";
import Spinner from "../components/layouts/Spinner";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";

function User() {
    const { user, repos, isLoading, dispatch } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        dispatch({ type: "SET_LOADING" });
        const getUserAndReposData = async () => {
            const userData = await getUserAndRepos(params.login);
            dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
        };

        getUserAndReposData();
    }, [dispatch, params.login]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="w-full mx-auto">
            <div className="mt-3 mb-6">
                <Link to="/" className="btn btn-ghost">
                    <IoIosArrowBack size={20} />
                    <span className="text-left capitalize inline-block ml-4">
                        Back
                        <span className="block font-light">to Search</span>
                    </span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-14">
                <div className="card bg-base-100 shadow-xl image-full mr-16">
                    <figure>
                        <img src={user.avatar_url} alt="Shoes" />
                    </figure>
                    <div className="card-body justify-end">
                        <h2 className="card-title">{user.name}</h2>
                        <p className="flex-grow-0">{user.login}</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-4xl font-extrabold card-title mb-6">
                        {user.name}
                        <div className="badge badge-outline text-emerald-500 ml-2 mr-1">
                            {user.type}
                        </div>
                        {user.hireable && (
                            <div className="badge badge-outline text-purple-500 mx-1">
                                Hireable
                            </div>
                        )}
                    </h1>

                    <p className="mb-6">{user.bio}</p>

                    <div className="card-actions mb-10">
                        <a
                            href={user.html_url}
                            className="btn btn-outline btn-accent capitalize rounded-lg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Github Profile
                        </a>
                    </div>

                    <div className="stats w-full shadow">
                        {user.location && (
                            <div className="stat">
                                <div className="stat-title text-sm">
                                    Location
                                </div>
                                <div className="stat-value text-base">
                                    {user.location}
                                </div>
                            </div>
                        )}

                        {user.blog && (
                            <div className="stat">
                                <div className="stat-title text-sm">
                                    Website
                                </div>
                                <div className="stat-value text-base">
                                    <a
                                        href={user.blog}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-link hover:text-blue-500"
                                    >
                                        {user.blog}
                                    </a>
                                </div>
                            </div>
                        )}

                        {user.twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-sm">
                                    Twitter
                                </div>
                                <div className="stat-value text-base">
                                    <a
                                        href={`https://twitter.com/${user.twitter_username}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-link hover:text-blue-500"
                                    >
                                        @{user.twitter_username}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="stats w-full shadow mb-14">
                <div className="stat">
                    <div className="stat-figure text-zinc-400">
                        <BiUserPlus size={53} />
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value">{user.followers}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-zinc-400">
                        <BiUserCheck size={53} />
                    </div>
                    <div className="stat-title">Following</div>
                    <div className="stat-value">{user.following}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-zinc-400">
                        <FaCodepen size={42} />
                    </div>
                    <div className="stat-title">Public Repos</div>
                    <div className="stat-value">{user.public_repos}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-zinc-400">
                        <MdOutlineStorefront size={45} />
                    </div>
                    <div className="stat-title">Public Gist</div>
                    <div className="stat-value">{user.public_gists}</div>
                </div>
            </div>

            <RepoList repos={repos} />
        </div>
    );
}

export default User;
