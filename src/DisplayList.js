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

import ProviderListing from './ProviderListing';
import A2CLogo from './A2CLogo_150x150.png';
import { useLocation } from 'react-router-dom';
import './DisplayList.css';

function DisplayList() {
    const location = useLocation();
    const providers = location.state.providers;
    const insuranceType = location.state.insuranceType;
    const insuranceName = location.state.insuranceName;
    const healthCareCategory = location.state.healthCareCategory;
    const filters = location.state.filters;
    const numFilters = location.state.numFilters;

    // determine what filters are in the filters array, to display in the component
    let displayAppointment = false;
    let displayArea = false;
    let displayKeyword = false;
    let displaySpecialty = false;
    let displayTime = false;
    let appointmentString = "";
    let areaString = "";
    let keywordString = "";
    let specialtyString = "";
    let timeString = "";
    
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

    return (
        <div id="displayListingScreen">
            <div id="topOfListing">
                <img id="displaySelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div id="displaySelectionWhiteBanner">
                    <p className="displaySelectionText">TYPE: {insuranceType}</p>
                    <p className="displaySelectionText">NAME: {insuranceName}</p>
                    <p className="displaySelectionText">CATEGORY: {healthCareCategory}</p>
                    {displayAppointment ? <p className="displaySelectionText">APPOINTMENT TYPE: {appointmentString}</p> : <></>}
                    {displayArea ? <p className="displaySelectionText">AREA: {areaString}</p> : <></>}
                    {displayTime ? <p className="displaySelectionText">TIME: {timeString}</p> : <></>}
                    {displaySpecialty ? <p className="displaySelectionText">SPECIALTY: {specialtyString}</p> : <></>}
                    {displayKeyword ? <p className="displaySelectionText">KEYWORD: {keywordString}</p> : <></>}
                </div>
            </div>
            <div id="listings">
            {
                providers.map((provider) => (
                    <ProviderListing provider={provider} />
                ))
            }   
            </div>
        </div>
        
    );
}

export default DisplayList;