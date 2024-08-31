import './ProviderListingIndividual.css';
import { useEffect, useState } from 'react';
import Provider_Individual from '../src/sprint4/img/provider_individual.png';
// provider[] elements like "Florida_Medical_License_Number" correspond to SQL columns

function ProviderListingIndividual({provider}) {
    const [header, setHeader] = useState(null);
    const [hours, setHours] = useState(null);

    let individual = {
        address: provider["Address"],
        city: provider["City"],
        state: "FL",
        zip: provider["ZIP"],
        phone_number: provider["Phone_Number"],
        spanish: "Hablamos Español",
        dutch: "Wij spreken Nederlands",
        creole: "Nou pale kreyòl ayisyen",
        license: provider["Florida_Medical_License_Number"],
        primary: provider["Primary_Field"],
        secondary: provider["Secondary_Field"],
        specialty: provider["Specialty_Areas"],
        keywords: provider["Specialty_Areas"]
    }

    const generateHeaderStringForIndividual = () => {
        if (provider["Practice_Name"] !== null) {
            setHeader(provider["Practice_Name"]);
        }
        else if (provider["Middle_Initial"] !== null) {
            setHeader(`${provider["First_Name"]} ${provider["Middle_Initial"]} ${provider["Last_Name"]}, ${provider["Title"]}`);
        } else {
            setHeader(`${provider["First_Name"]} ${provider["Last_Name"]}, ${provider["Title"]}`);
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

    useEffect(() => {
        generateHeaderStringForIndividual();
        setHours(`${convertTimeMilitaryToStandard(provider["Office_Open"])} -- ${convertTimeMilitaryToStandard(provider["Office_Close"])}`);
    }, []);


    return (
    <div className="providerListingIndividual">
        <div className="individualListingHeader">
            <p className="individualListingText">{header}</p>
        </div>
        <div className="individualListingLocationTime">
            <div className="individualListingLocation">
                <div className="individualListingThumbnailA">
                    <img src={Provider_Individual} alt="Individual Provider IMG"/>
                </div>
                <div className="individualListingAddress">
                    <p className="individualListingBold">{header}</p>
                    <p className="individualListingText">{individual.address}</p>
                    <p className="individualListingText">{`${individual.city}, ${individual.state} ${individual.zip}`}</p>
                    <p className="individualListingText">{individual.phone_number}</p>
                    <div className="individualListingLanguages">
                        {provider["Languages"].includes("Spanish") ? <p className="individualListingText">{`${individual.spanish}`}</p> : <></>}
                        {provider["Languages"].includes("Dutch") ? <p className="individualListingText">{`${individual.dutch}`}</p> : <></>}
                        {provider["Languages"].includes("Haitian Creole") ? <p className="individualListingText">{`${individual.creole}`}</p> : <></>}
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
                    <p className="individualListingText">{provider["Office_Days"].includes("M") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("T") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("W") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("R") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("F") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("S") ? hours : "Closed"}</p>
                    <p className="individualListingText">{provider["Office_Days"].includes("U") ? hours : "Closed"}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProviderListingIndividual;