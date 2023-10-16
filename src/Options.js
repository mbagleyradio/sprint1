import './Options.css';
import NoInsurance from './NoInsurance.js';
import HasInsurance from './HasInsurance.js';

function Options( props ) {
    const isInsured = props.isInsured;
    if (isInsured === true) {
        return (<HasInsurance/>);
    } else if (isInsured === false) {
        return (<NoInsurance/>);
    }
}

export default Options;