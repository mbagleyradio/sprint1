/*
* NEED TO WRITE PSEUDO FOR REFACTORED REVIEW SELECTION. FETCH THE NEW ENDPOINT AT MOUNT, THEN RE-FETCH EVERY TIME collectedFilters CHANGES.
* AFTER FETCHING, CALL A FUNCTION TO APPLY THE FILTERS AND DISPLAY THE NUMBER OF PROVIDERS
* 
* NEED TO REWRITE UI. MIGHT BE BETTER OFF REWRITING FROM SCRATCH, FUCK.
* CODE TO FILTER 
const filterPractices = (data) => {
        let filtered = [];
    
        for (let i = 0; i < collectedFilters.length; i++) {
            const pair = collectedFilters[i].filterName.split(": ");
            const key = pair[0];
            const value = pair[1];
            filtered = [...filtered, data.filter(individualProvider => 
                individualProvider[key] === value
            )]
        }

        setStoredProviders([...filtered]);
    }

in ReviewSelection onProvidersArrayRetrieved,sort by ["name"]
in ApplyFilterToProviders countPractices, count the ["name"] key
*/

import './ApplyFilterToProviders.css';
import { useState, useEffect } from 'react';

function ApplyFilterToProviders( {isFiltered, insuranceName, insuranceType, healthCareCategory, collectedFilters, onProvidersArrayRetrieved } ) {
    const [ storedProviders, setStoredProviders ] = useState([]);
    const [ numPractices, setNumPractices ] = useState(0);

    const generateQueryFromFilters = () => {
        let queryString = "";
        if (collectedFilters.length === 0) {
            queryString = "SELECT * FROM providers;";
        }
        else {
            for (let filterElement = 0; filterElement < collectedFilters.length; filterElement++) {
                if (filterElement === 0) {
                    queryString = `SELECT * FROM providers WHERE `;
                } else {
                    queryString += ` AND `;
                }
    
                if (collectedFilters[filterElement].filterName.startsWith("Appointment")) {
                    switch (collectedFilters[filterElement].filterName) {
                        case "Appointment: Scheduled Appt.":
                            queryString += `Appointment_Scheduled = true`;
                        break;
    
                        case "Appointment: Walk-in":
                            queryString += `Appointment_Walk_In = true`;
                        break;
    
                        case "Appointment: Telemedicine":
                            queryString += `Appointment_Telemedicine = true`;
                        break;
    
                        case "Appointment: House Calls":
                            queryString += `Appointment_House_Calls = true`;
                        break;
    
                        case "Appointment: None (exit)":
                        break;
    
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Area")) {
                    switch (collectedFilters[filterElement].filterName) {
                        case "Area: None":
                        break;
    
                        case "Area: Key West":
                            queryString += `ZIP IN ('33040', '33041')`;
                        break;
    
                        case "Area: Marathon":
                            queryString += `ZIP = '33050'`;
                        break;
    
                        case "Area: Tavernier":
                            queryString += `ZIP = '33070'`;
                        break;
    
                        case "Area: Key Largo":
                            queryString += `ZIP = '33037'`;
                        break;
    
                        case "Area: Lower Keys":
                            queryString += `ZIP = '33040'`;
                        break;
    
                        case "Area: Middle Keys":
                            queryString += `ZIP IN ('33001', '33041', '33042', '33043', '33050', '33051')`;
                        break;
    
                        case "Area: Upper Keys":
                            queryString += `ZIP IN ('33036', '33037', '33070')`;
                        break;
    
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Keyword")) {
                    switch (collectedFilters[filterElement].filterName) {
                        case "Keyword: Sports Medicine":
                            queryString += `Keywords LIKE '%Sports Medicine%'`;
                        break;
    
                        case "Keyword: Pediatrics":
                            queryString += `Keywords LIKE '%Pediatrics%'`;
                        break;
    
                        case "Keyword: Senior Adults":
                            queryString += `Keywords LIKE '%Senior Adults%'`;
                        break;
    
                        case "Keyword: Knee & Hip":
                            queryString += `Keywords LIKE '%Knee & Hip%'`;
                        break;
    
                        case "Keyword: Neck & Shoulder":
                            queryString += `Keywords LIKE '%Neck & Shoulder%'`;
                        break;
    
                        case "Keyword: Hands Wrists & Elbows":
                            queryString += `Keywords LIKE '%Hands Wrists & Elbows%'`;
                        break;
    
                        case "Keyword: Foot & Ankle":
                            queryString += `Keywords LIKE '%Foot & Ankle%'`;
                        break;
    
                        case "Keyword: Arthritis":
                            queryString += `Keywords LIKE '%Arthritis%'`;
                        break;
    
                        case "Keyword: Physical Therapy":
                            queryString += `Keywords LIKE '%SPhysical Therapy%'`;
                        break;
    
                        case "Keyword: Surgery":
                            queryString += `Keywords LIKE '%Surgery%'`;
                        break;
    
                        case "Keyword: Diagnostic":
                            queryString += `Keywords LIKE '%Diagnostic%'`;
                        break;

                        case "Keyword: Joint Replacement":
                            queryString += `Keywords LIKE '%Joint Replacement%'`;
                        break;
                        
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Specialty")) {
                    switch (collectedFilters[filterElement].filterName) {
                        case "Specialty: Joint Replacement":
                            queryString += `Specialty_Areas LIKE '%Joint Replacement%'`;
                        break;
    
                        case "Specialty: Foot & Ankle":
                            queryString += `Specialty_Areas LIKE '%Foot & Ankle%'`;
                        break;
    
                        case "Specialty: Women's Care":
                            queryString += `Specialty_Areas LIKE '%Womens Care%'`;
                        break;
    
                        case "Specialty: Pediatrics":
                            queryString += `Specialty_Areas LIKE '%Pediatrics%'`
                        break;

                        case "Specialty: Neck & Shoulder":
                            queryString += `Specialty_Areas LIKE '%Neck & Shoulder%'`;
                        break;

                        case "Specialty: Sports Medicine":
                            queryString += `Specialty_Areas LIKE '%Sports Medicine%'`;
                        break;

                        case "Specialty: Arthritis":
                            queryString += `Specialty_Areas LIKE '%Arthritis%'`;
                        break;
    
                        case "Specialty: None (exit)":
                        break;
    
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Time")) {
                    switch (collectedFilters[filterElement].filterName) {
                        case "Time: Early Morning":
                            queryString += `Time_Early_Morning = true`;
                        break;
    
                        case "Time: Morning":
                            queryString += `Time_Morning = true`;
                        break;
    
                        case "Time: Mid Day":
                            queryString += `Time_Mid_Day = true`;
                        break;
    
                        case "Time: Afternoon":
                            queryString += `Time_Afternoon = true`;
                        break;
    
                        case "Time: Early Evening":
                            queryString += `Time_Early_Evening = true`;
                        break;
                        
                        case "Time: Evening":
                            queryString += `Time_Evening = true`;
                        break;
    
                        case "Time: Late Nite":
                            queryString += `Time_Late_Nite = true`;
                        break;
    
                        case "Time: None (exit)":
                        break;
                        
                        default:
                        break;
                    }
                } else {
                    // add query for default?
                }
            }
        
            queryString += `;`
        }
    
        return queryString;
    }
    
    const fetchFilterResults = () => {
        const queryString = generateQueryFromFilters();

        fetch("https://uvcsandbox.com/php/FilterHealthCareSelection.php", {
            method: "POST",
            mode: "cors",
            headers: {},
            body: JSON.stringify({
                insuranceName,
                insuranceType,
                healthCareCategory,
                queryString
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            onProvidersArrayRetrieved(data)
            setStoredProviders([...storedProviders, ...data])
        }).catch(error => {
            console.log(error)
        });
    }

    const countPractices = () => {
        let practices = 0;
        for (let i = 0; i < storedProviders.length; i++) {
            if (storedProviders[i]["Practice_Name"] !== null) {
                practices += 1;
            }
        }

        setNumPractices(practices);
    }

    useEffect( () => {
        fetchFilterResults();
    }, []);

    useEffect ( () => {
        countPractices();
    }, [storedProviders])

    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber">{numPractices}</span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

