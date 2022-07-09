import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { BiErrorCircle } from "react-icons/bi";

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        alert !== null && (
            <div className="flex items-center">
                {alert.type === "error" && (
                    <div>
                        <BiErrorCircle
                            size="25"
                            className="text-red-400 mr-1"
                        />
                    </div>
                )}
                <p className="font-semibold">Please enter something</p>
            </div>
        )
    );
}

export default Alert;
