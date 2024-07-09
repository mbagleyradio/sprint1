import './ApplyFilterToProviders.css';
import { useState, useEffect } from 'react';

function ApplyFilterToProviders( {isFiltered, insuranceName, insuranceType, healthCareCategory, collectedFilters } ) {
    const [ storedProviders, setStoredProviders ] = useState([]);
    
    const generateQueryFromFilters = () => {
        //let queryString = `SELECT * FROM Providers WHERE insuranceName = '${insuranceName}' AND insuranceType = '${insuranceType}' AND healthCareCategory = '${healthCareCategory}' `;
        let queryString = `SELECT * FROM providers`;
        for (let filterElement = 0; filterElement < collectedFilters.length; filterElement++) {
            if (collectedFilters[filterElement].filterName.startsWith("Appointment")) {
                // add query for Appointment
                switch (collectedFilters[filterElement].filterName) {
                    case "Appointment: Scheduled Appt.":
                    break;

                    case "Appointment: Walk-in":
                    break;

                    case "Appointment: Telemedicine":
                    break;

                    case "Appointment: House Calls":
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
                    break;

                    case "Area: Marathon":
                    break;

                    case "Area: Tavernier":
                    break;

                    case "Area: Key Largo":
                    break;

                    case "Area: Lower Keys":
                    break;

                    case "Area: Middle Keys":
                    break;

                    case "Area: Upper Keys":
                    break;

                    default:
                    break;
                }

            } else if (collectedFilters[filterElement].filterName.startsWith("Keyword")) {
                // add query for Keyword
                switch (collectedFilters[filterElement].filterName) {
                    case "Keyword: Sports Medicine":
                    break;

                    case "Keyword: Pediatrics":
                    break;

                    case "Keyword: Senior Adults":
                    break;

                    case "Keyword: Knee & Hip":
                    break;

                    case "Keyword: Neck & Shoulder":
                    break;

                    case "Keyword: Hands Wrists & Elbows":
                    break;

                    case "Keyword: Foot & Ankle":
                    break;

                    case "Keyword: Arthritis":
                    break;

                    case "Keyword: Physical Therapy":
                    break;

                    case "Keyword: Women's Care":
                    break;

                    case "Keyword: Diagnostic":
                    break;
                    
                    default:
                    break;
                }

            } else if (collectedFilters[filterElement].filterName.startsWith("Specialty")) {
                // add query for Specialty
                switch (collectedFilters[filterElement].filterName) {
                    case "Specialty: Pediatrics":
                    break;

                    case "Specialty: Geriatrics":
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
                    break;

                    case "Time: Morning":
                    break;

                    case "Time: Mid Day":
                    break;

                    case "Time: Afternoon":
                    break;

                    case "Time: Early Evening":
                    break;
                    
                    case "Time: Evening":
                    break;

                    case "Time: Late Nite":
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

