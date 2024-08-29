import './ProviderListingIndividual.css';

// provider[] elements like "Florida_Medical_License_Number" correspond to SQL columns

function ProviderListingIndividual({provider}) {
    return (
    <div className="providerListingIndividual">
        <div className="individualListingHeader">
            <p>{`${provider["First_Name"]} ${provider["Middle_Initial"]} ${provider["Last_Name"]}, ${provider["Title"]}`}</p>
        </div>
    </div>
    );
}

export default ProviderListingIndividual;