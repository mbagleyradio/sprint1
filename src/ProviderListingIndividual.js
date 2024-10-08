import './ProviderListingIndividual.css';
import ProviderInfo from './ProviderInfo.js';
import MinimizedListing from './MinimizedListing.js';
import Provider_Group from '../src/sprint4/img/provider_group.png';
import thumbs_up from '../src/sprint4/img/thumbs-up.png';
import share from '../src/sprint4/img/share.png';
import thumbs_down from '../src/sprint4/img/thumbs-down.png';
import { useState } from 'react';

function ProviderListingIndividual({provider, handlePrioritize}) {
    const [minimize, setMinimize] = useState(false);
    
    const generateHeaderStringForIndividual = () => {
        if (provider[0]["Practice_Name"] !== null) {
            return provider[0]["Practice_Name"];
        }
        else if (provider[0]["Middle_Initial"] !== null) {
            return `${provider[0]["First_Name"]} ${provider[0]["Middle_Initial"]} ${provider[0]["Last_Name"]}, ${provider[0]["Title"]}`;
            
        } else {
            return `${provider[0]["First_Name"]} ${provider[0]["Last_Name"]}, ${provider[0]["Title"]}`;
        }
    }

    const generateNameForIndividual = () => {
        if (provider[0]["Middle_Initial"] !== null) {
            return `${provider[0]["First_Name"]} ${provider[0]["Middle_Initial"]} ${provider[0]["Last_Name"]}, ${provider[0]["Title"]}`;
        } else if (provider[0]["First_Name"] !== null && provider[0]["Last_Name"] !== null) {
            return `${provider[0]["First_Name"]} ${provider[0]["Last_Name"]}, ${provider[0]["Title"]}`;
        } else {
            return provider[0]["Practice_Name"];
        }
    }

    const convertTimeMilitaryToStandard = (milTime) => {
        let hourStandard = parseInt(milTime.slice(0, 2), 10);
        let minuteStandard = milTime.slice(2, 4);

        if (hourStandard >= 1 && hourStandard < 12) {
            return `${hourStandard}:${minuteStandard} am`;
        } else if (hourStandard === 0 || hourStandard === 12) {
            return `12:${minuteStandard} pm`;
        } else if (hourStandard > 12) {
            return `${(hourStandard - 12)}:${minuteStandard} pm`;
        }
    }

    const handleMinimize = () => {
        if (minimize === false) {
            setMinimize(true);
        }
    }

    const handleExpand = () => {
        if (minimize === true) {
            setMinimize(false);
        }
    }

    const onPrioritizeClick = () => {
        if (provider[0]["Name_of_Practice_Group_Locations"] !== null) {
            handlePrioritize(true, provider[0]["Name_of_Practice_Group_Locations"]);
        } else {
            handlePrioritize(false, provider[0]["Florida_Medical_License_Number"]);
        }
    }

    let individual = {
        // rewrite everything to generate in THIS object, not in a useEffect hook
        header: generateHeaderStringForIndividual(),
        name: generateNameForIndividual(),
        hours: `${convertTimeMilitaryToStandard(provider[0]["Office_Open"])} -- ${convertTimeMilitaryToStandard(provider[0]["Office_Close"])}`,
        ddress: provider[0]["Address"],
        city: provider[0]["City"],
        state: "FL",
        zip: provider[0]["ZIP"],
        phone_number: provider[0]["Phone_Number"],
        spanish: "Hablamos Español",
        dutch: "Wij spreken Nederlands",
        creole: "Nou pale kreyòl ayisyen",
        license: provider[0]["Florida_Medical_License_Number"],
        primary: provider[0]["Primary_Field"],
        secondary: provider[0]["Secondary_Field"],
        specialty: provider[0]["Specialty_Areas"],
        keywords: provider[0]["Keywords"]
    }
    
    return (
    minimize ? <MinimizedListing header={individual.header} handleExpand={handleExpand}/> :
    <div className="providerListingIndividual">
        <div className="individualListingHeader">
            <p className="individualListingText">{individual.header}</p>
        </div>
        <div className="individualListingLocationTime">
            <div className="individualListingLocation">
                <div className="individualListingThumbnailA">
                    <img src={Provider_Group} alt="an Individual Provider's practice"/>
                </div>
                <div className="individualListingAddress">
                    <p className="individualListingBold">{individual.name}</p>
                    <p className="individualListingText">{individual.address}</p>
                    <p className="individualListingText">{`${individual.city}, ${individual.state} ${individual.zip}`}</p>
                    <p className="individualListingText">{individual.phone_number}</p>
                    <div className="individualListingLanguages">
                        {provider[0]["Languages"] !== null && provider[0]["Languages"].includes("Spanish") ? <p className="individualListingText">{`${individual.spanish}`}</p> : <></>}
                        {provider[0]["Languages"] !== null && provider[0]["Languages"].includes("Dutch") ? <p className="individualListingText">{`${individual.dutch}`}</p> : <></>}
                        {provider[0]["Languages"] !== null && provider[0]["Languages"].includes("Haitian Creole") ? <p className="individualListingText">{`${individual.creole}`}</p> : <></>}
                    </div>
                </div>
            </div>
            <div className="individualListingTime">
                <div className="individualListingDays">
                    <p className="individualListingBold">Office Hours</p>
                    <p className="individualListingText">Monday</p>
                    <p className="individualListingText">Tuesday</p>
                    <p className="individualListingText">Wednesday</p>
                    <p className="individualListingText">Thursday</p>
                    <p className="individualListingText">Friday</p>
                    <p className="individualListingText">Saturday</p>
                    <p className="individualListingText">Sunday</p>
                </div>
                <div className="individualListingHours">
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("M") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("T") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("W") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("R") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("F") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("S") ? individual.hours : "Closed"}</p>
                    <p className="individualListingText">{provider[0]["Office_Days"].includes("U") ? individual.hours : "Closed"}</p>
                </div>
            </div>
        </div>
        {
            provider.map((practice) => {
                return <ProviderInfo provider={practice}/>
            })
        }
        <div className="individualListingProviderKeywords">
            <p className="individualListingText" id="keywordText">{individual.keywords}</p>
        </div>
        <div className="individualListingProviderActions">
            <div className="listingActionButtons" id="leftBtn">
                <img className="listingButtons" src={thumbs_down} alt="clicking this button discards a listing" onClick={handleMinimize}/>
                <p className="individualListingText">Discard</p>
            </div>
            <div className="listingActionButtons">
                <img className="listingButtons" src={share} alt="clicking this button shares a listing"/>
                <p className="individualListingText">Send</p>
            </div>
            <div className="listingActionButtons" id="rightBtn">
                <img className="listingButtons" src={thumbs_up} alt="clicking this button keeps a listing" onClick={onPrioritizeClick}/>
                <p className="individualListingText">Keep</p>
            </div>
        </div>
    </div>
    );
    
}

export default ProviderListingIndividual;