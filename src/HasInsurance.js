import './HasInsurance.css';
import ComInsurance from './ComInsurance.js';

function HasInsurance(props) {
	const insuranceEnums = {
		NONE: 1,
		COMMERCIAL: 2,
		MEDICARE: 3,
		MEDICARE_MANAGED: 4,
		MEDICAID: 5,
		MEDICAID_MANAGED: 6,
		MILITARY: 7,
		HEALTHCARE_EXCHANGE: 8,
		INTERNATIONAL: 9,
		WORKERS_COMP: 10,
		BEHAVIORAL_HEALTH: 11
	};

	const insuranceType = props.insuranceType;
    switch(insuranceType) {
		case insuranceEnums.COMMERCIAL:
			return(<ComInsurance/>);
		break;

		case insuranceEnums.MEDICARE:
		break;

		case insuranceEnums.MEDICARE_MANAGED:
		break;

		case insuranceEnums.MEDICAID:
		break;

		case insuranceEnums.MEDICAID_MANAGED:
		break;

		case insuranceEnums.MILITARY:
		break;
	
		case insuranceEnums.HEALTHCARE_EXCHANGE:
		break;

		case insuranceEnums.INTERNATIONAL:
		break;

		case insuranceEnums.WORKERS_COMP:
		break;

		case insuranceEnums.BEHAVIORAL_HEALTH:
		break;

		default:
			return(<h1>ERROR: default case triggered</h1>);
		break;
	}
}

export default HasInsurance;