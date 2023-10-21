export default class HandleInfo {
    constructor() {
        this.checkBoxData = [];
        this.formData = [];
    }

    set checkBoxData(checkBoxData) {
        this.checkBoxData = [...checkBoxData];
    }

    set formData(formData) {
        this.formData = [...formData];
    }

    sendEmail() {
        console.log("The data is being emailed.");
    }
}