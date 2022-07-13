import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { BiErrorCircle } from "react-icons/bi";

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        alert !== null && (
            <div className="flex items-center mb-2">
                {alert.type === "error" && (
                    <div>
                        <BiErrorCircle
                            size="25"
                            className="text-red-300 mr-1"
                        />
                    </div>
                )}
                <p className="text-stone-600">{alert.msg}</p>
            </div>
        )
    );
}

export default Alert;
