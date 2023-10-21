export default class HandleInfo {
    constructor() {
        this.checkBoxData = [];
        this.formData = [];
    }

    static set checkBoxData(checkBoxData) {
        this.checkBoxData = [...checkBoxData];
    }

    static set formData(formData) {
        this.formData = [...formData];
    }

    static sendEmail() {
        console.log("The data is being emailed.");
    }
}