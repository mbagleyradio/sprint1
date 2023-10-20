function Popup(props) {
    return (
        (props.trigger) ?
        <div id="popup">
            <button id="close-btn">Close</button>
        </div> : ""
    );
}

export default Popup;