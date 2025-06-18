/*
* 
* 
*/

import './ApplyFilterToProviders.css';
import { useState, useEffect } from 'react';

function ApplyFilterToProviders( {isFiltered, insuranceName, insuranceType, healthCareCategory, collectedFilters, onProvidersArrayRetrieved, setSpecialtyAreas, setKeywords } ) {
    const [ storedProviders, setStoredProviders ] = useState([]);
    const [ numPractices, setNumPractices ] = useState(0);

    const fetchFilterResults = () => {
        fetch("https://www.access2care-mc.biz/info/healthcareProvidersPerLocation", {
            method: "GET",
            headers: {},
        }).then(response => {
            return response.json()
        }).then(data => {
            collectSpecialtiesFromFetch(data);
            collectKeywordsFromFetch(data);
            filterPracticesFromFetch(data);
        }).catch(error => {
            console.log(error)
        });
    }

     const collectSpecialtiesFromFetch = (providers) => {
        let matchingSpecialties = new Set([]);
        for (let i = 0; i < providers.length; i++) {
            for (let j = 0; j < providers[i]["physicians"].length; j++) {
                if (providers[i]["physicians"][j]["physician"]["primaryFieldOfMedicine"] !== null && providers[i]["physicians"][j]["physician"]["secondaryFieldOfMedicine"] !== null) {
                    if (providers[i]["physicians"][j]["physician"]["primaryFieldOfMedicine"]["name"] === healthCareCategory || providers[i]["physicians"][j]["physician"]["secondaryFieldOfMedicine"]["name"] === healthCareCategory) {
                        const tokenizedSpecialties = providers[i]["physicians"][j]["specialtyAreas"].split(", ");
                        for (let k = 0; k < tokenizedSpecialties.length; k++) {
                            if (tokenizedSpecialties[k] !== "") {
                                matchingSpecialties.add(tokenizedSpecialties[k]);
                            }
                        }
                    }
                }

            }
        }

        setSpecialtyAreas([...matchingSpecialties]);
     }

    const collectKeywordsFromFetch = (providers) => {
        let matchingKeywords = new Set([]);
        // search the providers for a matching healthcare category, then take all the keywords
        // put all the keywords in a set
        // filter the set for "" and undefined

        for (let i = 0; i < providers.length; i++) {
            for (let j = 0; j < providers[i]["physicians"].length; j++) {
                if (providers[i]["physicians"][j]["physician"]["primaryFieldOfMedicine"] !== null && providers[i]["physicians"][j]["physician"]["secondaryFieldOfMedicine"] !== null) {
                    if (providers[i]["physicians"][j]["physician"]["primaryFieldOfMedicine"]["name"] === healthCareCategory || providers[i]["physicians"][j]["physician"]["secondaryFieldOfMedicine"]["name"] === healthCareCategory) {
                        for (let k = 0; k < providers[i]["keywords"].length; k++) {
                            if (providers[i]["keywords"][k] !== '' && providers[i]["keywords"][k] !== undefined) {
                                matchingKeywords.add(providers[i]["keywords"][k]);
                            }
                        }
                    }
                }

            }
        }

        setKeywords([...matchingKeywords]);
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
                    let isValidProvider = true;
                    let filterElement = 0;

                    while (filterElement < collectedFilters.length && isValidProvider === true) {
                        let filter = collectedFilters[filterElement].filterName.split(": ");
                        
                        switch (filter[0]) {
                            case "Area":
                                isValidProvider = isAreaAccepted(providers[providerElement], filter[1])
                            break;

                            case "Appointment":
                                isValidProvider = isAppointmentAccepted(providers[providerElement], filter[1])
                            break;

                            case "Keyword":
                                isValidProvider = isKeywordAccepted(providers[providerElement], filter[1]) 
                            break;

                            case "Specialty":
                                isValidProvider = isSpecialtyAccepted(providers[providerElement], filter[1])
                            break;

                            case "Time":
                                isValidProvider = isTimeAccepted(providers[providerElement], filter[1])
                            break;

                            default:
                            break;
                        }

                        filterElement++;
                    }

                    // if the provider passes all the applied filters, add it to filteredProviders []
                    if (isValidProvider === true) {
                        filteredProviders.push(providers[providerElement]);
                    }

                }
            }
        }

        setStoredProviders([...filteredProviders]);
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
            } else {

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
            if (provider["physicians"][i]["specialtyAreas"].includes(filter)) {
                return true;
            }
        }

        // if none of the specialty areas matched, return false
        return false;
    }

    const isKeywordAccepted = (provider, filter) => {
        for (let i = 0; i < provider["keywords"].length; i++) {
            if (provider["keywords"][i].includes(filter)) {
                
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
        // convert the user open/close times to numbers
        const userTime = convertUITimeToDBTime(filter);
        let providerTime = undefined;

        // convert the provider times to numbers
        if (provider["officeHours"]["monday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["monday"]);
        } else if (provider["officeHours"]["tuesday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["tuesday"]);
        } else if (provider["officeHours"]["wednesday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["wednesday"]);
        } else if (provider["officeHours"]["thursday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["thursday"]);
        } else if (provider["officeHours"]["friday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["friday"]);
        } else if (provider["officeHours"]["saturday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["saturday"]);
        } else if (provider["officeHours"]["sunday"].length === 2) {
            providerTime = convertStringToFloat(provider["officeHours"]["sunday"]);
        }

        // if the user open is greater or equal than provider open, and the user close is greater or equal than the provider close, return true
        if (userTime.open >= providerTime.open && userTime.closed <= providerTime.closed) {
            return true;
        } else {
            return false;
        }

    }

    const convertStringToFloat = (arrayOfStrings) => {
        const openStr = arrayOfStrings[0].split(":");
        const closedStr = arrayOfStrings[1].split(":");
        const openFinal = parseFloat(openStr[0]) + (parseFloat(openStr[1]) / 60);
        const closedFinal = parseFloat(closedStr[0]) + (parseFloat(closedStr[1]) / 60);
        
        return {
            open: openFinal,
            closed: closedFinal
        }
    }

    const convertUITimeToDBTime = (str) => {
        switch (str) {
            case "Early Morning":
                return {open: 5, closed: 8};
            break;
            
            case "Morning":
                return {open: 8, closed: 11};
            break;

            case "Mid Day":
                return {open: 11, closed: 14};
            break;

            case "Afternoon":
                return {open: 14, closed: 17};
            break;

            case "Early Evening":
                return {open: 17, closed: 20};
            break;

            case "Evening":
                return {open: 20, closed: 23};
            break;

            case "Late Nite":
                return {open: 23, closed: 2};
            break;

            case "None (exit)":
                return {open: 0, closed: 0};
            break;

            default:
            break;
        }
    }

    const countProvidersFromFilteredProviders = () => {
        
    }
            
    useEffect( () => {
        fetchFilterResults();
        onProvidersArrayRetrieved(storedProviders);
        countProvidersFromFilteredProviders();
    }, []);

    useEffect( () => {
        collectSpecialtiesFromFetch(storedProviders);
        collectKeywordsFromFetch(storedProviders);
        countProvidersFromFilteredProviders();
        onProvidersArrayRetrieved(storedProviders);
    }, [storedProviders]);

    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber">{numPractices}</span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

