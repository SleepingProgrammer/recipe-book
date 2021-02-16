
import _ from "lodash";
import bootstrap from "bootstrap";

export default class FormHelper {
    constructor(ReactComponent) {  // Constructor
        this.component = ReactComponent;
        this.defaultModalID = 'defaultModal';

        this.modalOptions = {
            backdrop: true,
            keyboard: true,
            focus: true
        }

        this.modal = null;

        this.defaultToastID = "defaultToast";
        this.toastOptions = {
            animation: true,
            autohide: true,
            delay: 5000
        }

        this.toast = null;
        this.toastElList = null;
        this.toastList = null;
    }

    HandleInputChange = (e) => {
        console.log(e.target.name + " changed");
        this.component.setState({
            [e.target.name]: e.target.value
        })
    };


    RenderTemplate = function (template, data) {
        var node = document.createElement("div");
        document.body.appendChild(node);
        console.log(node);
        UI.renderWithData(template, data, node);
        return node;
    };

    ReplaceModalBody = function (template, data) {
        document.getElementById(this.defaultModalID + "Body").innerHTML = this.RenderTemplate(template, data);
    }

    InitializeHelper = function () {
        this.InitializeModal();
        this.InitializeToasts();
    }

    InitializeModal = function () {
        this.modal = new bootstrap.Modal(document.getElementById(this.defaultModalID), this.modalOptions);
    }

    InitializeToasts = function () {
        this.toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastOptions = this.toastOptions;

        this.toastList = this.toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl, toastOptions)
        })

        this.toast = new bootstrap.Toast(document.getElementById(this.defaultToastID), toastOptions);

        this.HideToast();
    }

    LoadComponent = function (component) {
        this.component = component;
    }

    Toast = function (toastMessage, toastTitle, toastVariant = "", toastTime = 5000, toastTimeline = "") {
        document.getElementById(this.defaultToastID + "Title").innerHTML = toastTitle;
        document.getElementById(this.defaultToastID + "Body").innerHTML = toastMessage;
        document.getElementById(this.defaultToastID + "Timestamp").innerHTML = toastTimeline;
        document.getElementById(this.defaultToastID).className = "toast " + toastVariant + ((toastVariant != "") ? " text-white" : "");
        this.ShowToast();
        setTimeout(() => {
            this.HideToast();
        }, toastTime);
    }

    ShowToast = function (toastIndex = null) {
        if (toastIndex)
            this.toastList[toastIndex].show();
        else {
            document.getElementById(this.defaultToastID).style.display = "block";
            this.toast.show();
        }
    }

    HideToast = function (toastIndex = null) {
        if (toastIndex)
            this.toastList[toastIndex].hide();
        else {
            this.toast.hide();
            document.getElementById(this.defaultToastID).style.display = "none";
            console.log("Toast Hidden");
        }
    }

    ShowModal = function () {
        this.modal.show();
    }

    HideModal = function () {
        this.modal.hide();
    }
}
