import './ApplyFilterToProviders.css';
import { useState, useEffect } from 'react';

function ApplyFilterToProviders( {isFiltered, insuranceName, insuranceType, healthCareCategory, collectedFilters } ) {
    const [ storedProviders, setStoredProviders ] = useState([]);
    
    const generateQueryFromFilters = () => {
        //let queryString = `SELECT * FROM Providers WHERE insuranceName = '${insuranceName}' AND insuranceType = '${insuranceType}' AND healthCareCategory = '${healthCareCategory}' `;

        let queryString = "";
        if (collectedFilters.length === 0) {
            queryString = "SELECT * FROM providers";
        }
        else {
            for (let filterElement = 0; filterElement < collectedFilters.length; filterElement++) {
                // during the loop's first iteration, the queryString needs to use a WHERE clause
                // during subsequent iterations, the queryString does not need a second WHERE clause, it needs an AND clause to bind clauses
                if (filterElement === 0) {
                    queryString = `SELECT * FROM providers WHERE `;
                } else {
                    queryString += ` AND `;
                }
    
                if (collectedFilters[filterElement].filterName.startsWith("Appointment")) {
                    // add query for Appointment
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
                    // add query for Area
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
                    // add query for Keyword
                    switch (collectedFilters[filterElement].filterName) {
                        case "Keyword: Sports Medicine":
                            queryString += `Specialty_Areas LIKE '%Sports Medicine%'`;
                        break;
    
                        case "Keyword: Pediatrics":
                            queryString += `Specialty_Areas LIKE '%Pediatrics%'`;
                        break;
    
                        case "Keyword: Senior Adults":
                            queryString += `Specialty_Areas LIKE '%Senior Adults%'`;
                        break;
    
                        case "Keyword: Knee & Hip":
                            queryString += `Specialty_Areas LIKE '%Knee & Hip%'`;
                        break;
    
                        case "Keyword: Neck & Shoulder":
                            queryString += `Specialty_Areas LIKE '%Neck & Shoulder%'`;
                        break;
    
                        case "Keyword: Hands Wrists & Elbows":
                            queryString += `Specialty_Areas LIKE '%Hands Wrists & Elbows%'`;
                        break;
    
                        case "Keyword: Foot & Ankle":
                            queryString += `Specialty_Areas LIKE '%Foot & Ankle%'`;
                        break;
    
                        case "Keyword: Arthritis":
                            queryString += `Specialty_Areas LIKE '%Arthritis%'`;
                        break;
    
                        case "Keyword: Physical Therapy":
                            queryString += `Specialty_Areas LIKE '%SPhysical Therapy%'`;
                        break;
    
                        case "Keyword: Surgery":
                            queryString += `Specialty_Areas LIKE '%Surgery%'`;
                        break;
    
                        case "Keyword: Diagnostic":
                            queryString += `Specialty_Areas LIKE '%Diagnostic%'`;
                        break;

                        case "Keyword: Joint Replacement":
                            queryString += `Specialty_Areas LIKE '%Joint Replacement%'`;
                        break;
                        
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Specialty")) {
                    // add query for Specialty
                    switch (collectedFilters[filterElement].filterName) {
                        case "Specialty: Pediatrics":
                            queryString += `Specialty_Areas LIKE '%Pediatrics%'`;
                        break;
    
                        case "Specialty: Geriatrics":
                            queryString += `Specialty_Areas LIKE '%Senior Adults%'`;
                        break;
    
                        case "Specialty: Internal Medicine":
    
                        break;
    
                        case "Specialty: Fractures":
                        break;
    
                        case "Specialty: None (exit)":
                        break;
    
                        default:
                        break;
                    }
    
                } else if (collectedFilters[filterElement].filterName.startsWith("Time")) {
                    // add query for Time
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
        }
        

        queryString += ';';
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
            setStoredProviders([...storedProviders, ...data])
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect( () => {
        fetchFilterResults();
    }, []);

    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber">{storedProviders.length}</span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

