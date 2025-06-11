import { useState, createRef } from 'react';
import { useScreenshot } from "use-react-screenshot";
import './ProviderListingIndividual.css';
import ShareListingModal from './ShareListingModal.js';
import ProviderInfo from './ProviderInfo.js';
import MinimizedListing from './MinimizedListing.js';
import Provider_Group from '../src/sprint4/img/provider_group.png';
import thumbs_up from '../src/sprint4/img/thumbs-up.png';
import share from '../src/sprint4/img/share.png';
import thumbs_down from '../src/sprint4/img/thumbs-down.png';

function ProviderListingIndividual({provider, handlePrioritize, minimizeController, handleMinimizeInController, handleExpandInController}) {
    const screenshotRef = createRef(null);
    const [ shareModalOpen, setShareModalOpen ] = useState(false);
    const [image, takeScreenShot] = useScreenshot();

    const convertTimeMilitaryToStandard = (milTime) => {
        let hourStandard = parseInt(milTime.slice(0, 2), 10);
        let minuteStandard = milTime.slice(3, 5);

        if (hourStandard >= 1 && hourStandard < 12) {
            return `${hourStandard}:${minuteStandard} am`;
        } else if (hourStandard === 0 || hourStandard === 12) {
            return `12:${minuteStandard} pm`;
        } else if (hourStandard > 12) {
            return `${(hourStandard - 12)}:${minuteStandard} pm`;
        }
    }

    const handleMinimize = () => {
        handleMinimizeInController(provider["name"]);
    }

    const handleExpand = () => {
        handleExpandInController(provider["name"]);
    }

    const onPrioritizeClick = () => {
        if (provider["name"] !== null) {
            handlePrioritize(true, provider["name"]);
        } else {
            handlePrioritize(false, provider["name"]);
        }
    }

    const handleShareModalOpen = () => {
        if (shareModalOpen === false) {
            // GENERATE THE SCREENSHOT HERE ...
            takeScreenShot(screenshotRef.current);

            setShareModalOpen(prev => {
                return true
            });
        }
    }
    
    const handleShareModalClose = () => {
        if (shareModalOpen === true) {
            setShareModalOpen(prev => {
                return false
            });
        }
    }

    const generateLanguagesForIndividual = () => {
        let languages = {
            spanish: undefined,
            creole: undefined,
            dutch: undefined,
        }

        if (provider["speaks_ned"] !== undefined && provider["speaks_ned"] === true) {
            languages.dutch = "Wij spreken Nederlands";
        }

        if (provider["speaks_crp"] === true) {
            languages.creole = "Nou pale kreyòl ayisyen";
        }

        if (provider["speaks_es"] === true) {
            languages.spanish = "Hablamos Español";
        }

        return languages;
    }

    const generateKeywordsForIndividual = () => {
        if (provider["keywords"].length === 0) {
            return "no keywords";
        } else if (provider["keywords"].length === 1) {
            if (provider["keywords"][0] !== "") {
                return provider["keywords"][0];
            } else {
                return "no keywords";
            }
        } else {
            let keywords = "";
            for (let i = 0; i < provider["keywords"].length; i++) {
                if (provider["keywords"][i] !== "") {
                    keywords += `${provider["keywords"][i]}, `;
                }
            }

            // trim the ", " off the end
            return keywords !== "" ? keywords.slice(0, -2) : "no keywords";
        } 
    }

    const displayOfficeHours = (times) => {
        return `${convertTimeMilitaryToStandard(times[0])} - ${convertTimeMilitaryToStandard(times[1])}`;
    }

    const generateAddressForIndividual = () => {
        if (provider["address2"] !== "") {
            return `${provider["address"]}, ${provider["address2"]}`;
        } else {
            return provider["address"];
        }
    }

    const generateServicesForIndividual = () => {
        if (provider["services"]["other"] !== "") {
            return provider["services"]["other"].split(", ");
        } else {
            return [];
        }
    }

    const generateAppointmentsForIndividual = () => {
        let appointments = [];
        // check for "other"
        if (provider["appointmentTypes"]["other"] && provider["appointmentTypes"]["other"] !== "") {
            appointments.push(provider["appointmentTypes"]["other"]);
        }
        // check for "office"
        if (provider["appointmentTypes"]["office"] && provider["appointmentTypes"]["office"] === "on") {
            appointments.push("Office");
        }
        // check for "walkIns"
        if (provider["appointmentTypes"]["walkIns"] && provider["appointmentTypes"]["walkIns"] === "on") {
            appointments.push("Walk-ins");
        }
        // check for "telemedicine"
        if (provider["appointmentTypes"]["telemedicine"] && provider["appointmentTypes"]["telemedicine"] === "on") {
            appointments.push("Telemedicine");
        }
        // check for "otherEnabled"
        if (provider["appointmentTypes"]["otherEnabled"] && provider["appointmentTypes"]["otherEnabled"] === "on") {
            appointments.push("Other Enabled");
        }
        // check for "consultations"
        if (provider["appointmentTypes"]["consultations"] && provider["appointmentTypes"]["consultations"] === "on") {
            appointments.push("Consultations");
        }
        // check for "houseCalls"
        if (provider["appointmentTypes"]["houseCalls"] && provider["appointmentTypes"]["houseCalls"] === "on") {
            appointments.push("House Calls");
        }

        return appointments;

    }

    let individual = {
        header: provider["name"],
        location_name: provider["name"],
        address: generateAddressForIndividual(),
        city: `${provider["city"]}`,
        state: "FL",
        zip: provider["zip"],
        phone_number: provider["phoneNumber"],
        email: provider["email"],
        office_number: provider["address2"],
        languages_spoken: generateLanguagesForIndividual(),
        keywords: generateKeywordsForIndividual(),
        services: generateServicesForIndividual(),
        appointment_types: generateAppointmentsForIndividual(),
        hospital: provider["hospital"]["name"],
        accepted_insurances: [...provider["acceptedInsurances"]]
    }

    return (
    (minimizeController && individual.header && minimizeController[individual.header] !== false) ? <MinimizedListing header={individual.header} handleExpand={handleExpand}/> :
    <div className="providerListingIndividual" ref={screenshotRef}>
        <div className="individualListingHeader">
            <p className="individualListingText">{individual.location_name}</p>
        </div>
        <div className="providerListingIMG_Name_Hours_Header">
            <div className="providerListingHeaderDivs">
                <img className="providerGroupIMG" src={Provider_Group} alt="an Individual Provider's practice"/>
            </div>
            <div className="providerListingHeaderDivs">
                <p className="individualListingBold">{individual.location_name} Office Hours</p>
            </div>
        </div>
        <div className="individualListingLocationTime">
            <div className="individualListingAddress">
                <p className="individualListingText">{individual.address}</p>
                <p className="individualListingText">{`${individual.city}, ${individual.state} ${individual.zip}`}</p>
                {individual.phone_number !== "" ? <p className="individualListingText">{individual.phone_number}</p> : <></>}
                <div className="individualListingLanguages">
                    {individual.languages_spoken.spanish !== undefined ? <p className="individualListingText">{`${individual.languages_spoken.spanish}`}</p> : <></>}
                    {individual.languages_spoken.dutch !== undefined ? <p className="individualListingText">{`${individual.languages_spoken.dutch}`}</p> : <></>}
                    {individual.languages_spoken.creole !== undefined ? <p className="individualListingText">{`${individual.languages_spoken.creole}`}</p> : <></>}
                </div>
            </div>
            <div className="individualListingDays">
                <p className="individualListingText">Mon. {provider["officeHours"]["monday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["monday"])}` : "Closed"}</p>
                <p className="individualListingText">Tue. {provider["officeHours"]["tuesday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["tuesday"])}` : "Closed"}</p>
                <p className="individualListingText">Wed. {provider["officeHours"]["wednesday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["wednesday"])}` : "Closed"}</p>
                <p className="individualListingText">Thu. {provider["officeHours"]["thursday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["thursday"])}` : "Closed"}</p>
                <p className="individualListingText">Fri. {provider["officeHours"]["friday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["friday"])}` : "Closed"}</p>
                <p className="individualListingText">Sat. {provider["officeHours"]["saturday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["saturday"])}` : "Closed"}</p>
                <p className="individualListingText">Sun. {provider["officeHours"]["sunday"].length > 0 ? `${displayOfficeHours(provider["officeHours"]["sunday"])}` : "Closed"}</p>
                <p className="individualListingText">{provider["officeHoursNotes"] !== "" ? provider["officeHoursNotes"] : ""}</p>
            </div>
        </div>
        <div className="individualListingAppointmentServices">
            <div className="listsOfAppointmentsAndServices">
                <p className="individualListingText">Appointment Types Available</p>
                {
                    (individual.appointment_types !== undefined && individual.appointment_types.length > 0) &&
                    individual.appointment_types.map((appointment) => {
                        return <p className="individualListingText">{appointment}</p>
                    })
                }
            </div>
            <div className="listsOfAppointmentsAndServices">
                <p className="individualListingText">In-Clinic Services</p>
                {
                    (individual.services !== undefined && individual.services.length > 0) &&
                    individual.services.map((service) => {
                        return <p className="individualListingText">{service}</p>
                    })
                }
            </div>
        </div>
        <div className="individualListingProviderKeywords">
            <p className="individualListingText" id="keywordText">{individual.keywords}</p>
        </div>
        {
            provider["physicians"].map((physician) => {
                return <ProviderInfo physician={physician}/>
            })
        }
        <div className="individualListingProviderActions">
            <div className="listingActionButtons" id="leftBtn">
                <img className="listingButtons" src={thumbs_up} alt="clicking this button keeps a listing" onClick={onPrioritizeClick}/>
                <p className="individualListingText">Keep</p>
            </div>
            <div className="listingActionButtons">
                <img className="listingButtons" src={share} alt="clicking this button shares a listing" onClick={handleShareModalOpen}/>
                <p className="individualListingText">Send</p>
            </div>
            <div className="listingActionButtons" id="rightBtn">
                <img className="listingButtons" src={thumbs_down} alt="clicking this button discards a listing" onClick={handleMinimize}/>
                <p className="individualListingText">Discard</p>
            </div>
        </div>
        {
            shareModalOpen ? <ShareListingModal shareModalOpen={shareModalOpen} handleShareModalClose={handleShareModalClose} screenshot={image}/> : <></>
        }
    </div>
    );
}

export default ProviderListingIndividual;


