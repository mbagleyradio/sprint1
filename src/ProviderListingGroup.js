import './ProviderListingGroup.css';

// provider[] elements like "Florida_Medical_License_Number" correspond to SQL columns

function ProviderListingGroup({provider}) {
    return (
    <div className="providerListingGroup">
        <div className="groupListingHeader">
            <p>{`${provider["First_Name"]} ${provider["Middle_Initial"]} ${provider["Last_Name"]}, ${provider["Title"]}`}</p>
        </div>
    </div>
    );
}

export default ProviderListingGroup;