export default function RadioButtonGroup(props) {
    
    return (
    <>
        {
            props.insurances.map((element) =>
                <div id={`radioDiv_${element.id}`}>
                    <input type="radio" id={`button_${element.id}`} name="insGroup"/>
                    <label for={`button_${element.id}`}>{element.name}</label><br/>
                </div>
                
            )
        }
    </>
    );
}