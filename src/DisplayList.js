/*
* MAP each element of the providers array as a <Listing/> component
* <Listing/> contains all of the providers' information from the database, displayed neatly
* it also contains buttons:
* red button discards (discard the listing)
* green button keeps
* brown button expands the listing info and turns into the yellow "share" button when clicked
* yellow button "shares" the listing
*
*/

import ProviderListingIndividual from './ProviderListingIndividual';
import A2CLogo from './A2CLogo_150x150.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DisplayList.css';

function DisplayList() {
    const location = useLocation();
    const numFilters = location.state.numFilters;
    const filters = location.state.filters;
    const insuranceType = location.state.insuranceType;
    const insuranceName = location.state.insuranceName;
    const healthCareCategory = location.state.healthCareCategory;

    const [sortedPractices, setSortedPractices] = useState(undefined);
    const [filterFlags, setFilterFlags] = useState({appointment: false, area: false, keyword: false, specialty: false, time: false});
    const [filterStrings, setFilterStrings] = useState({appointment: "", area: "", keyword: "", specialty: "", time: ""});
    

    useEffect(() => {
        // run on component mount
        generateBannerFromFilters();
        const providers = location.state.providers;
        const practices = getPracticesFromProviders(providers);
        setSortedPractices(...practices);
    }, []);

    const handlePrioritize = (sortParameter) => {
        console.log(`Prioritizing based on ... ${sortParameter}`);
    }

    const getPracticesFromProviders = (providers) => {
        const practices = {};
        providers.forEach(provider => {
            const practiceGroupName = provider["Name_of_Practice_Group_Locations"];
            const practiceName = provider["Practice_Name"];
            
            if (!practices[practiceGroupName] && !practices[practiceName]) {
                // create a new key value pair for the practice group or practice name
                if (practiceGroupName !== null) {
                    // they have a practice group, so store them in an array that can be found with a key/value pair. The key is their practice group name.
                    practices[practiceGroupName] = [];
                    practices[practiceGroupName].push(provider);
                } else {
                    // they do not have a practice group, so store them in an array that can be found with a key/value pair. The key is their practice name.
                    practices[practiceName] = [];
                    practices[practiceName].push(provider);
                } 
            } else {
                if (practiceGroupName !== null) {
                    practices[practiceGroupName].push(provider);
                } else {
                    practices[practiceName].push(provider);
                }
            }
        });

        const groupedPractices = Object.values(practices);
        return Object.values(groupedPractices);
    }

    const generateBannerFromFilters = () => {
        let appointmentString = filterStrings.appointment;
        let areaString = filterStrings.area;
        let timeString = filterStrings.time;
        let keywordString = filterStrings.keyword;
        let specialtyString = filterStrings.specialty;
        let displayKeyword = false;
        let displayTime = false;
        let displayArea = false; 
        let displaySpecialty = false; 
        let displayAppointment = false;

        for (let count = 0; count < numFilters; count++) {
            if (filters[count].filterName.startsWith("Appointment: ")) {
                displayAppointment = true;
                appointmentString = filters[count].filterName.slice(12, filters[count].filterName.length);
            }
            else if (filters[count].filterName.startsWith("Area: ")) {
                displayArea = true;
                areaString = filters[count].filterName.slice(5, filters[count].filterName.length);
            } 
            else if (filters[count].filterName.startsWith("Time: ")) {
                displayTime = true;
                timeString = filters[count].filterName.slice(5, filters[count].filterName.length);
            }
            else if (filters[count].filterName.startsWith("Keyword: ")) {
                displayKeyword = true;
                keywordString = filters[count].filterName.slice(8, filters[count].filterName.length);
            }
            else if (filters[count].filterName.startsWith("Specialty: ")) {
                displaySpecialty = true;
                specialtyString = filters[count].filterName.slice(10, filters[count].filterName.length);
            }
        }

        setFilterFlags({appointment: displayAppointment, area: displayArea, keyword: displayKeyword, specialty: displaySpecialty, time: displayTime});
        setFilterStrings({appointment: appointmentString, area: areaString, keyword: keywordString, specialty: specialtyString, time: timeString});
    }

    return (
        <div id="displayListingScreen">
            <div id="topOfListing">
                <img id="displaySelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div id="displaySelectionWhiteBanner">
                    <p className="displaySelectionText">TYPE: {insuranceType}</p>
                    <p className="displaySelectionText">NAME: {insuranceName}</p>
                    <p className="displaySelectionText">CATEGORY: {healthCareCategory}</p>
                    {filterFlags.appointment ? <p className="displaySelectionText">APPOINTMENT TYPE: {filterStrings.appointment}</p> : <></>}
                    {filterFlags.area ? <p className="displaySelectionText">AREA: {filterStrings.area}</p> : <></>}
                    {filterFlags.time ? <p className="displaySelectionText">TIME: {filterStrings.time}</p> : <></>}
                    {filterFlags.specialty ? <p className="displaySelectionText">SPECIALTY: {filterStrings.specialty}</p> : <></>}
                    {filterFlags.keyword ? <p className="displaySelectionText">KEYWORD: {filterStrings.keyword}</p> : <></>}
                </div>
            </div>
            <div id="listings">
            {
                sortedPractices.map((practice) => {
                    return <ProviderListingIndividual provider={sortedPractices} handlePrioritize={handlePrioritize}/>
                })
            }   
            </div>
        </div>
        
    );
}

export default DisplayList;