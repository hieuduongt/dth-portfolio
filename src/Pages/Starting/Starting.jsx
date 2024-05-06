import { LoadingSpinner } from "../../components/LoadingSpinner"

const Starting = (props) => {
    const { started, displayText } = props;
    return (
        <div className={`starting-screen ${started ? "started" : ""}`}>
            <div className="starting-logo">
                <img src="starting-logo.png" alt="starting logo" />
            </div>
            <div className="startup-loading">
                <div className="startup-text">{displayText}</div>
                <div className={`loading-spin ${started ? "hidden" : ""}`}>
                    <LoadingSpinner />
                </div>
            </div>

        </div>

    )
}

export default Starting;