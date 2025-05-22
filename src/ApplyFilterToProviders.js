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
                                if (isAreaAccepted(providers[providerElement], filter[1]) === true) {
                                    filteredProviders.push(providers[providerElement]);
                                }
                            break;

                            case "Appointment":
                                if (isAppointmentAccepted(providers[providerElement], filter[1]) === true) {
                                    filteredProviders.push(providers[providerElement]);
                                }
                            break;

                            case "Keyword":
                                if (isKeywordAccepted(providers[providerElement], filter[1]) === true) {
                                    filteredProviders.push(providers[providerElement]);
                                }
                            break;

                            case "Specialty":
                                if (isSpecialtyAccepted(providers[providerElement], filter[1]) === true) {
                                    filteredProviders.push(providers[providerElement]);
                                }
                            break;

                            case "Time":
                                if (isTimeAccepted(providers[providerElement], filter[1]) === true ) {
                                    filteredProviders.push(providers[providerElement]);
                                }
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

    const isSpecialtyAccepted = (provider, filter) => {
        for (let i = 0; i < provider["physicians"].length; i++) {
            if (provider["physicians"][i]["specialtyAreas"].includes(filter) || provider["physicians"][i]["specialtyAreas"] === "") {
                return true;
            }
        }

        // if none of the specialty areas matched, return false
        return false;
    }

    const isKeywordAccepted = (provider, filter) => {
        for (let i = 0; i < provider["keywords"].length; i++) {
            if (provider["keywords"][i].includes(filter) || provider["keywords"][i] === "") {
                return true;
            }
        }

        // if none of the keywords matched, return false
        return false;
    }

    const isAreaAccepted = (provider, filter) => {
        if (filter === provider["city"]) {
            return true;
        } else {
            switch (filter) {
                case "None":
                break;
    
                case "Key West":
                    if (provider["zip"] === "33040" || provider["zip"] === "33041") {
                        return true;
                    }
                break;
    
                case "Marathon":
                    if (provider["zip"] === "33050") {
                        return true;
                    }
                break;           
                
                case "Tavernier":
                    if (provider["zip"] === "33070") {
                        return true;
                    }
                break;
    
                case "Key Largo":
                    if (provider["zip"] === "33037") {
                        return true;
                    }
                break;
    
                case "Lower Keys":
                    if (provider["zip"] === "33040") {
                        return true;
                    }
                break;

                case "Middle Keys":
                    if (provider["zip"] === "33001" || provider["zip"] === "33041" || provider["zip"] === "33042" || provider["zip"] === "33043" || provider["zip"] === "33050" || provider["zip"] === "33051") {
                        return true;
                    }
                break;

                case "Upper Keys":
                    if (provider["zip"] === "33036" || provider["zip"] === "33037" || provider["zip"] === "33070") {
                        return true;
                    }
                break;

                default:
                break;
            }
            return false;
        }
        
    }

    const isTimeAccepted = (provider, filter) => {

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

