import { useNavigate } from 'react-router-dom';

export default function Medicare() {
    const navigate = useNavigate();
    const navigateToNextScreen = () => {
        navigate("../healthcare-categories", {state: "Medicare: Medicare"});
    }

    return (
    <>
        <button id="submitFromRadioBTN" type="submit" onClick={navigateToNextScreen}>Submit</button><br/>
    </>
    );
}