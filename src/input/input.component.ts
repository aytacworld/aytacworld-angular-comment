import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let i = 0;
@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent)
    }
  ],
  selector: 'c-input',
  styleUrls: ['input.component.scss'],
  templateUrl: 'input.component.html'
})
export class InputComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() @HostBinding('class.add-valid-style') public validStyle: boolean = false;
  public fieldId: string = `field-id-${i++}`;
  public inputValue: string = '';

  private onChange = (_: any) => { /**/ };
  private onTouched = (_: any) => { /**/ };

  writeValue (value: any): void {
    this.inputValue = value;
  }

  registerOnChange (fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched (fn: any): void {
    this.onTouched = fn;
  }

  inputChanged (e: any): void {
    this.inputValue = e.target.value;
    this.onChange(this.inputValue);
  }
}
