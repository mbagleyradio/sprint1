import './ModalOnSubmit.css';
import { useNavigate } from 'react-router-dom';

export default function ModalOnSubmit() {
    const navigateArg = {
        state: null,
        replace: true
    }
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/", navigateArg);
    }
    
    return (
        <div className="modalParent">
            <div className="modalChild">
                <h1>Thank you!</h1>
                <h3>Your info has been sent. Someone will get back to you shortly.</h3>
                <button onClick={handleRedirect}>Return</button>
            </div>
        </div>
    );
}