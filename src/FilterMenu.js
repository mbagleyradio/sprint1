import FilterKeyword from './FilterKeyword.js';
import FilterSpecialty from './FilterSpecialty.js';
import FilterTime from './FilterTime.js';
import FilterArea from './FilterArea.js';
import FilterAppointment from './FilterAppointment.js';

function FilterMenu( { filterType } ) {
    switch (filterType) {
        case "Specialty":
            return (<FilterSpecialty/>);
        break;

        case "Appointment":
            return (<FilterAppointment/>);
        break;
        
        case "Area":
            return (<FilterArea/>);
        break;

        case "Time":
            return (<FilterTime/>);
        break;

        case "Keyword":
            return (<FilterKeyword/>);
        break;

        default:
            return (<>Default</>);
        break;
    }
}

export default FilterMenu;