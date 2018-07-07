import { Component, OnInit } from '@angular/core';
import { MdcSnackbar, MdcDialog, MdcDialogRef } from '@angular-mdc/web';

import { Location } from '@angular/common';

// import { AngularFirestore } from 'angularfire2/firestore';
import { DialogProgressComponent } from '../dialog-progress/dialog-progress.component';
import { ModelMessage } from '../dialog-progress/models';
import { ModelMessageDone } from '../dialog-done/models';
import { DialogDoneComponent } from '../dialog-done/dialog-done.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact-new-view',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  mDialogRefProgress: MdcDialogRef<DialogProgressComponent, any>;
  _mFormGroup: FormGroup;
  lat: number = 12.936261;
  lng: number = 77.631180;


  public _mContactNumber: string = "+919738224723";
  public _mContactMail: string = "ajay@thedroid.io";

  constructor(public snackbar: MdcSnackbar,
    // private db: AngularFirestore,
    private mdcDialog: MdcDialog,
    private location: Location
  ) {

    this._mFormGroup = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      
      number: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      message: new FormControl({ value: '', disabled: false }, Validators.required)
    });

  }

  ngOnInit(): void {
    
  }

  onCopied(message: string) {
    this.snackbar.show(message + "   copied", null, { timeout: 2000 });


  }

  onSubmit() {
    


    console.log("value",  this._mFormGroup.value);

    if (!this._mFormGroup.valid) {
      // if (!this.demoformInput.valid) {
      //   this.demoformInput.setValid(false);
      // }
      return;
    }
    
    this.openProgresDialog();
    this.sendMessage();

    // this.demoformInput.setValid(true);


  }


  sendMessage(){
    let date = new Date().valueOf();
    console.log(date);
    //  this.db.collection("newProjects").add({
    //   date: date,
    //   name: this._mFormGroup.value.name,
    //   email: this._mFormGroup.value.email,
    //   number:this._mFormGroup.value.number,
    //   message: this._mFormGroup.value.message,
    //   route: this.location.path()
      
    // })
    //   .then((docRef) =>{
    //     console.log("Document written with ID: ", docRef.id);
    //     this.closeProgressDialog();
    //     this._mFormGroup.reset();
    //     this.openDoneDialog();
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
  }

  openProgresDialog(){
    let message = new ModelMessage("Please wait...");
    this.mDialogRefProgress = this.mdcDialog.open(DialogProgressComponent, {
      escapeToClose: false,
      clickOutsideToClose: false,
      data: message
    });
  }

  closeProgressDialog(){
    this.mDialogRefProgress.close();
  }

  openDoneDialog(){
   
    let message = new ModelMessageDone("Message received", "Thankyou for sending message. we will responsd as soon as posible");
    const dialogRef = this.mdcDialog.open(DialogDoneComponent, {
      escapeToClose: false,
      clickOutsideToClose: false,
      data: message
    });
  }

}