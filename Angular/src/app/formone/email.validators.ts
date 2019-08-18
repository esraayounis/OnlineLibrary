import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'selenium-webdriver';
import { resolve  } from 'url';
import { reject } from 'q';

export class MyEmailValidators{
    static cannotConatainSpace(cotrol:AbstractControl):ValidationErrors|null
    {
        if((cotrol.value as string).indexOf(' ')>=0)
        return{ cannotConatainSpace:true};

        return null;
    }
}