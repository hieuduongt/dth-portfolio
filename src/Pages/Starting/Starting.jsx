import { LoadingSpinner } from "../../components/LoadingSpinner"

const Starting = (props) => {
    const { started } = props;
    return (
        <div className={`starting-screen ${started ? "started" : ""}`}>
            <div className="starting-logo">
                <img src="starting-logo.png" alt="starting logo" />
            </div>
            <div className="loading-spin">
                <LoadingSpinner />
            </div>
            
        </div>

    )
}

export default Starting;