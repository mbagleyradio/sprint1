import './Options.css';
import NoInsurance from './NoInsurance.js';
import HasInsurance from './HasInsurance.js';

function Options( props ) {
    const insuranceType = props.insuranceType;
    const hasInsurance = props.isInsured;
    if (hasInsurance === true) {
        return (<HasInsurance insuranceType={insuranceType}/>);
    } else if (hasInsurance === false) {
        return (<NoInsurance/>);
    } else if (hasInsurance === null || hasInsurance === undefined) {
        return (<></>);
    }
}

export default Options;