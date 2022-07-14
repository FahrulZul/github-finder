import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import Spinner from "../components/layouts/Spinner";
import GithubContext from "../context/github/GithubContext";

function User() {
    const { getUser, user, isLoading } = useContext(GithubContext);
    const params = useParams();

    useEffect(() => {
        getUser(params.login);
    }, []);

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
                    <h1 className="text-3xl card-title mb-6">
                        {user.name}
                        <div className="badge badge-outline badge-success ml-2 mr-1">
                            {user.type}
                        </div>
                        {user.hireable && (
                            <div className="badge badge-outline badge-info mx-1">
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
                                        className="btn-link hover:text-indigo-500"
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
                                        className="btn-link hover:text-indigo-500"
                                    >
                                        @{user.twitter_username}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="stats w-full shadow">
                <div className="stat">
                    <div className="stat-figure text-6xl text-indigo-500">
                        <MdGroups />
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value">{user.followers}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-6xl text-indigo-500">
                        <MdGroups />
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value">{user.followers}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-6xl text-indigo-500">
                        <MdGroups />
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value">{user.followers}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-6xl text-indigo-500">
                        <MdGroups />
                    </div>
                    <div className="stat-title">Followers</div>
                    <div className="stat-value">{user.followers}</div>
                </div>
            </div>
        </div>
    );
}

export default User;

// login
// id
// node_id
// avatar_url
// gravatar_id
// url
// html_url
// followers_url
// following_url
// gists_url
// starred_url
// subscriptions_url
// organizations_url
// repos_url
// events_url
// received_events_url
// type
// site_admin
// name
// company
// blog
// location
// email
// hireable
// bio
// twitter_username
// public_repos
// public_gists
// followers
// following
// created_at
// updated_at
