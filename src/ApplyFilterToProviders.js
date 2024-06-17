import './ApplyFilterToProviders.css';

function ApplyFilterToProviders( {isFiltered} ) {
    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber"> 2 </span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

