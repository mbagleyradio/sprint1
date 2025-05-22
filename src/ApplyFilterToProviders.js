/*
* NEED TO WRITE PSEUDO FOR REFACTORED REVIEW SELECTION. FETCH THE NEW ENDPOINT AT MOUNT, THEN RE-FETCH EVERY TIME collectedFilters CHANGES.
* AFTER FETCHING, CALL A FUNCTION TO APPLY THE FILTERS AND DISPLAY THE NUMBER OF PROVIDERS
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

        fetch("https://www.access2care-mc.biz/info/healthcareProvidersPerLocation", {
            method: "GET",
            //mode: "cors",
            headers: {},
            /*body: JSON.stringify({
                insuranceName,
                insuranceType,
                healthCareCategory,
                queryString
            })*/
        }).then(response => {
            return response.json()
        }).then(data => {
            filterPracticesFromFetch(data);
            
            /*
            onProvidersArrayRetrieved(data)
            setStoredProviders([...storedProviders, ...data])*/
        }).catch(error => {
            console.log(error)
        });
    }

    const filterPracticesFromFetch = (providers) => {
        let filteredProviders = [];
        
        for (let providerElement = 0; providerElement < providers.length; providerElement++) {
            if (isInsuranceAccepted(providers[providerElement]) === true && isPrimaryOrSecondaryFieldAccepted(providers[providerElement]) === true) {
                // insurance is accepted and the provider's primary or secondary field matches what we are sending, then filter the other selections
                // go through each filter and see if the provider survives the filters
                if (collectedFilters.length === 0) {
                    // no filters applied, so push the provider into the filteredProviders array
                    filteredProviders.push(providers[providerElement]);
                } else {
                    // filters applied, so check if each provider passes all the filters
                    // get the filters
                    for (let filterElement = 0; filterElement < collectedFilters.length; filterElement++) {
                        let filter = collectedFilters[filterElement].filterName.split(": ");
                        
                        switch (filter[0]) {
                            case "Area":
                            break;

                            case "Appointment":
                                if (isAppointmentAccepted(providers[providerElement], filter[1]) === true) {
                                    filteredProviders.push(providers[providerElement]);
                                }
                            break;

                            case "Keyword":
                            break;

                            case "Specialty":
                            break;

                            case "Time":
                            break;
                        }
                    }

                }
            }
        }

        console.log(filteredProviders);
        setNumPractices(filteredProviders.length);
    }

    const isInsuranceAccepted = (provider) => {
        if (provider["acceptedInsurances"].length === 0) {
            return true;
        } else {
            for (let i = 0; i < provider["acceptedInsurances"].length; i++) {
                if (provider["acceptedInsurances"][i]["insurance"]["primaryName"] === insuranceName && provider["acceptedInsurances"][i]["insurance"]["subName"] === insuranceType) {
                    return true;
                } 
            }

            // if you iterated through the whole loop and never found a matching primaryName or secondaryName, then return false.
            return false;
        }
    }

    const isPrimaryOrSecondaryFieldAccepted = (provider) => {
        for (let i = 0; i < provider["physicians"].length; i++) {
            if (provider["physicians"][i]["physician"]["primaryFieldOfMedicine"] !== null && provider["physicians"][i]["physician"]["primaryFieldOfMedicine"]["name"] === healthCareCategory) {
                // check if the physician's primary field matches the healthcare selection.
                return true;
            } else if (provider["physicians"][i]["physician"]["secondaryFieldOfMedicine"] !== null && provider["physicians"][i]["physician"]["secondaryFieldOfMedicine"]["name"] === healthCareCategory) {
                // check if the physician's secondary field matches the healthcare selection.
                return true;
            } 
        }

        // if you iterated through the physicians in a provider group, and could not find a matching healthcare selection, then return false
        return false; 
    }

    const isAppointmentAccepted = (provider, filter) => {
         // First, check that the provider has any appointment types. 
        if (Object.keys(provider["appointmentTypes"]).length === 1 && provider["appointmentTypes"]["other"] === "") {
            // the provider did not select any appointment types, so assume all user selections are good
            return true;
        } else {
            switch (filter) {
                case "Scheduled Appt.":
                    return provider["appointmentTypes"]["office"] !== undefined ? true : false;
                break;

                case "Walk-in":
                    return provider["appointmentTypes"]["walkIns"] !== undefined ? true : false;
                break;

                case "Telemedicine":
                    return provider["appointmentTypes"]["telemedicine"] !== undefined ? true : false;
                break;

                case "House Calls":
                    return provider["appointmentTypes"]["houseCalls"] !== undefined ? true : false;
                break;

                case "None (exit)":
                break;
    
                default:
                break;
            }
        }
    }
            
    useEffect( () => {
        fetchFilterResults();
    }, []);

    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber">{numPractices}</span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

