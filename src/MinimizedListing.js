import './MinimizedListing.css';
import thumbs_up from '../src/sprint4/img/thumbs-up.png';

export default function MinimizedListing({header, handleExpand}) {
    return (
        <div className="minimizedListingTable">
            <div className="minimizedListingHeader">
                <p className="minimizedListingHeaderText">{header}</p>
            </div>
            <div className="keepButtonColumn">
                <img className="listingActionButtons" id="maximizeBtn" src={thumbs_up} alt="clicking this button keeps a listing" onClick={handleExpand}/>
            </div>
        </div>
    );
}