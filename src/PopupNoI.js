import { HandleInfo } from './handleInfo.js';

function PopupNoI(/*props*/) {
    return (
        <form>
            <label>
                Your Name: 
                <input type="text" name="name" />
            </label>
            <label>
                Your Phone Number: 
                <input type="text" name="phoneNumber" />
            </label>
            <label>
                Your Email: 
                <input type="text" name="email" />
            </label>
            <p>As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.</p>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default PopupNoI;