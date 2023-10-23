class HandleInfo {
    constructor() {
        this.checkBoxData = [];
        this.formData = [];
    }

    static set storeCB(cbParam) {
        this.checkBoxData = [...cbParam];
    }

    static set storeForm(formParam) {
        this.formData = [...formParam];
    }

    static sendEmail() {
        console.log("The data is being emailed.");
    }
}

export default HandleInfo;