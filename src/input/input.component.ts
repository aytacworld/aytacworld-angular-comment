import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// tslint:disable-next-line:no-use-before-declare
const fRef = forwardRef(() => InputComponent);

let i = 0;
@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: fRef
    }
  ],
  selector: 'c-input',
  styleUrls: ['input.component.scss'],
  templateUrl: 'input.component.html'
})
export class InputComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() @HostBinding('class.add-valid-style') public validStyle: boolean = false;
  @Input() public multi: boolean = false;
  @Input() public rows: number = 3;
  public fieldId: string = `field-id-input-${i++}`;
  public inputValue: string = '';

  private onChange = (_: any) => { /**/ };
  private onTouched = (_: any) => { /**/ };

  public writeValue (value: any): void {
    this.inputValue = value;
  }

  public registerOnChange (fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched (fn: any): void {
    this.onTouched = fn;
  }

  public inputChanged (e: any): void {
    this.inputValue = e.target.value;
    this.onChange(this.inputValue);
  }
}
