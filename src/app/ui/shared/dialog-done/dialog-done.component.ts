import { Component, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { ModelMessageDone } from './models';

@Component({
  selector: 'dialog-done',
  templateUrl: './dialog-done.component.html',
  styleUrls: ['./dialog-done.component.scss']
})
export class DialogDoneComponent {

  constructor(public dialogRef: MdcDialogRef<DialogDoneComponent>,
    @Inject(MDC_DIALOG_DATA) public data: ModelMessageDone){
    console.log("message: ", data);
  }

  
  ngOnInit() {
  }

  updateForm() {

      this.closeDialog();
  }
  closeDialog() {
      this.dialogRef.close();
  }


  public cancel() {
      console.log('on close click');
  }

  public submit() {
      this.closeOnResult(false);
  }

  public closeOnResult(isAdded: boolean) {
      console.log('on result close ', isAdded);
  }

}