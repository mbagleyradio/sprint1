import './HasInsurance.css';
import ComInsurance from './ComInsurance.js';
import Medicare from './Medicare.js';
import MedicareManaged from './MedicareManaged.js';
import Medicaid from './Medicaid.js';
import MedicaidManaged from './MedicaidManaged.js';
import Military from './Military.js';
import HealthcareExchange from './HealthcareExchange.js';
import International from './International.js';
import WorkersComp from './WorkersComp.js';
import Behavioral from './Behavioral.js';
import { useNavigate } from 'react-router-dom';

function HasInsurance(props) {
	const navigate = useNavigate();
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
			navigate("../contact-ins", {state: "Medicare"});
		break;

		case insuranceEnums.MEDICARE_MANAGED:
			return(<MedicareManaged/>);
		break;

		case insuranceEnums.MEDICAID:
			return(<Medicaid/>);
		break;

		case insuranceEnums.MEDICAID_MANAGED:
			return(<MedicaidManaged/>);
		break;

		case insuranceEnums.MILITARY:
			return(<Military/>);
		break;
	
		case insuranceEnums.HEALTHCARE_EXCHANGE:
			return(<HealthcareExchange/>);
		break;

		case insuranceEnums.INTERNATIONAL:
			return(<International/>);
		break;

		case insuranceEnums.WORKERS_COMP:
			return(<WorkersComp/>);
		break;

		case insuranceEnums.BEHAVIORAL_HEALTH:
			return(<Behavioral/>);
		break;

		default:
			return(<h1>ERROR: default case triggered</h1>);
		break;
	}
}

export default HasInsurance;