import { LightningElement ,api, wire, track} from 'lwc';
import doctorsNameAndIdList from '@salesforce/apex/doctorAppointmentController.doctorsNameAndIdList';
import getAppointmentByDoctorId from '@salesforce/apex/doctorAppointmentController.getAppointmentByDoctorId';

const columns = [
    { label: 'Appointment No', fieldName: 'Name' },
    { label: 'Appointment Date', fieldName: 'Appointment_Date__c' },
    { label: 'Doctor Name', fieldName: 'Doctor_Name__c' },
    { label: 'Patient Name', fieldName: 'Patient_Name__c' },
];

export default class DoctorAppointment extends LightningElement {
    columns = columns;
    appointment=[];
    recId;

    @track data;
    @track error;

    @wire(doctorsNameAndIdList)
    cons(result) {
        this.members=result;
        
        if (result.data) {
            this.data = result.data;
            this.error = undefined;

        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    };

    // @wire(getAppointmentByDoctorId,{recordId:'$recId'})
    // wiredPeople({error, data}){
    //     if(data){
    //         console.log(data);
    //         this.appointment = data;
    //         this.error = undefined;
    //     } else if (error) {

    //         this.appointment = undefined;
    //         this.error = error;
    //     }
    // }
    
    getAppointment(event){
        // alert("my name is faiz");
        const id=event.target.value;
        console.log(id);

        getAppointmentByDoctorId({doctorId:id})
        .then(result => {
        this.appointment = result;
        console.log(result);
        })
        .catch(error => {
        this.error = error;
        console.log(error);
        });
    }
    
}