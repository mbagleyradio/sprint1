import { useEffect, useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup.js';

export default function Behavioral() {
    const [insurances, setInsurances] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const headers = {};
		fetch("http://uvcsandbox.com/php/Behavioral.php", {
			method: "GET",
			mode: "cors",
			headers: headers
		}).then(response => {
			return response.json()
		}).then(data => {
			setInsurances(data);
		}).catch(error => {
			console.log(error);
		}).finally(() => {
			setLoaded(true);
		});
	}, []);

    return (
        <div>
            {insurances && <RadioButtonGroup insurances={insurances} isLoaded={loaded}/>}
        </div>
		
	);
}