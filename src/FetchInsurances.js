import { useEffect, useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup.js';

export default function FetchInsurances({src}) {
    // let insurancesArray = [];
    // async function getInsurances(src) {
	// 	const headers = {};
	// 	const response = await fetch(src, {
	// 		method: "GET",
	// 		mode: "cors",
	// 		headers: headers
	// 	});
	// 	const insurances = await response.json();
	// 	return insurances;
	// }
    // useEffect(() => {
    //     getInsurances("https://uvcsandbox.com/php/Commercial.php")
	// 		.then(result => {
	// 				console.log("This is before it is passed as a prop");
	// 				console.log(result);
	// 				insurancesArray = [...result];
	// 		}).catch(error => {
	// 			console.log(error);
	// 	    });
    // }, []);
    
    // console.log("This is after the prop is passed");
    // console.log(insurancesArray);

	const [insurances, setInsurances] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const headers = {};
		fetch("https://uvcsandbox.com/php/Commercial.php", {
			method: "GET",
			mode: "cors",
			headers: headers
		}).then(response => {
			return response.json()
		}).then(data => {
			console.log("This is after the data has been fetched");
			console.log(data);
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

/*
*
*
* I need another component layer to render the radio button
*
*/