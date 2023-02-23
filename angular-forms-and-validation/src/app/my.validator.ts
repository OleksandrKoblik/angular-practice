import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidator {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['al@as.com', 'vnt@vnt'].includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null as any
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise( resolve => {
      setTimeout(() => {
        if (control.value === 'jopa@da') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      },1000)
    })
  }
}
