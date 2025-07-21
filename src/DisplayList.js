/*
* 
*/

import ProviderListingIndividual from './ProviderListingIndividual';
import A2CLogo from './A2CLogo_150x150.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './DisplayList.css';
import './ReviewSelection.css';

function DisplayList() {
    const location = useLocation();
    const numFilters = location.state.numFilters;
    const filters = location.state.filters;
    const insuranceType = location.state.insuranceType;
    const insuranceName = location.state.insuranceName;
    const healthCareCategory = location.state.healthCareCategory;

    const [sortedProviders, setSortedProviders] = useState([...location.state.providers]);
    const [filterFlags, setFilterFlags] = useState({appointment: false, area: false, keyword: false, specialty: false, time: false});
    const [filterStrings, setFilterStrings] = useState({appointment: "", area: "", keyword: "", specialty: "", time: ""});
    const [minimizeController, setMinimizeController] = useState(null);

    useEffect(() => {
        // run on component mount
        generateBannerFromFilters();
        initializeMinimizeStatus();
    }, []);
    
    const handleMinimizeInController = (targetName) => {
        // find the key that matches the target, set it's value (passed as a prop minimizeController in the render) to true
        setMinimizeController(prev => ({
            ...prev,
            [targetName]: true 
        }));
    }

    const handleExpandInController = (targetName) => {
        // find the key that matches the target, set it's value (passed as a prop minimizeController in the render) to false
        setMinimizeController(prev => ({
            ...prev,
            [targetName]: false
        }));
    }

    
    const initializeMinimizeStatus = () => {
        const practices = {};
        sortedProviders.forEach(provider => {
            const name_as_key = provider["name"];
            practices[name_as_key] = false;
        });
        
        setMinimizeController(prev => ({
            ...prev,
            ...practices
        }));
    }
    
    const handlePrioritize = (flag, targetName) => {
        if (flag === true) {
            setSortedProviders([...sortedProviders.filter(a => a["name"] === targetName), ...sortedProviders.filter(a => a["name"] !== targetName)])
        } else if (flag === false) {
            setSortedProviders([...sortedProviders.filter(a => a["name"] === targetName), ...sortedProviders.filter(a => a["name"] !== targetName)])
        }
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
            <div className="reviewSelectionBanner">
                <img className="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div className="reviewSelectionWhiteBanner">
                    <p className="reviewSelectionText">TYPE: {insuranceType}</p>
                    <p className="reviewSelectionText">NAME: {insuranceName}</p>
                    <p className="reviewSelectionText">CATEGORY: {healthCareCategory}</p>
                    {filterFlags.appointment ? <p className="reviewSelectionText">APPOINTMENT TYPE: {filterStrings.appointment}</p> : <></>}
                    {filterFlags.area ? <p className="reviewSelectionText">AREA: {filterStrings.area}</p> : <></>}
                    {filterFlags.time ? <p className="reviewSelectionText">TIME: {filterStrings.time}</p> : <></>}
                    {filterFlags.specialty ? <p className="reviewSelectionText">SPECIALTY: {filterStrings.specialty}</p> : <></>}
                    {filterFlags.keyword ? <p className="reviewSelectionText">KEYWORD: {filterStrings.keyword}</p> : <></>}
                </div>
            </div>
            {sortedProviders !== null && <div id="listings">
            {
                sortedProviders.map((practice) => {
                    return <ProviderListingIndividual provider={practice} handlePrioritize={handlePrioritize} minimizeController={minimizeController} handleMinimizeInController={handleMinimizeInController} handleExpandInController={handleExpandInController} healthCareCategory={healthCareCategory}/>
                })
            }   
            </div>}
        </div>
        
    );
}

export default DisplayList;