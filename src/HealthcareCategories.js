import './HealthcareCategories.css';
import { useLocation } from 'react-router-dom';

export default function HealthcareCategories(props) {
    const location = useLocation();
    const sprint1Data = location.state;
    console.log(sprint1Data);
    return (
        <div id="landingPage">
            <h1>Sprint 2 - Landing Page</h1>
        </div>
    );
}