import { FormControl, AbstractControl } from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

export function passValidator(control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const cnfpassValue = control.value;

        const passControl = control.root.get('password');
        if(passControl){
            const passValue = passControl.value;
            if(passValue !== cnfpassValue){
                return{
                    isError: true
                };
            }
        }
    }
    return null;
}