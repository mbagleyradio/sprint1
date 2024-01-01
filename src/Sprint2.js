import './Sprint2.css';
import { useLocation } from 'react-router-dom';

export default function Sprint2(props) {
    const location = useLocation();
    const sprint1Data = location.state;
    console.log(sprint1Data);
    return (
        <div id="sprint2">
            <h1>Sprint 2 - Landing Page</h1>
        </div>
    );
}