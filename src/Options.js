import './Options.css';
import NoInsurance from './NoInsurance.js';
import HasInsurance from './HasInsurance.js';

function Options( props ) {
    const hasInsurance = props.isInsured;
    if (hasInsurance === true) {
        return (<HasInsurance/>);
    } else if (hasInsurance === false) {
        return (<NoInsurance/>);
    } else if (hasInsurance === null || hasInsurance === undefined) {
        return (<></>);
    }
}

export default Options;