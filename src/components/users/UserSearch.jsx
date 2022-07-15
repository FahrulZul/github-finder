import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layouts/Alert";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
    const { users, dispatch } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === "") {
            setAlert("error", "Please Enter Something");
        } else {
            dispatch({ type: "SET_LOADING" });
            const users = await searchUsers(text);
            dispatch({ type: "GET_USERS", payload: users });
            setText("");
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-24 flex flex-col justify-end">
                <Alert />
                <form className="relative mb-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input w-full bg-base-200 rounded-l-lg pr-36 text-lg"
                        placeholder="Search.."
                        value={text}
                        onChange={handleChange}
                    />
                    <button className="btn absolute w-32 top-0 right-0 rounded-r-lg bg-stone-800">
                        Go
                    </button>
                </form>
            </div>

            {users.length > 0 && (
                <div className="h-24 flex items-center">
                    <button
                        className="btn btn-ghost rounded-lg md:ml-4"
                        onClick={() => {
                            dispatch({ type: "CLEAR_USERS" });
                        }}
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;
