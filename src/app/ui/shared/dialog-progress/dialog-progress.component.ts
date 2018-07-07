import { Component, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { ModelMessage } from './models';

@Component({
  selector: 'dialog-progress',
  templateUrl: './dialog-progress.component.html',
  styleUrls: ['./dialog-progress.component.scss']
})
export class DialogProgressComponent {

  constructor(public dialogRef: MdcDialogRef<DialogProgressComponent>,
    @Inject(MDC_DIALOG_DATA) public data: ModelMessage){
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