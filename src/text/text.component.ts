import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let i = 0;
@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent)
    }
  ],
  selector: 'c-text',
  styleUrls: ['text.component.scss'],
  templateUrl: 'text.component.html'
})
export class TextComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() @HostBinding('class.add-valid-style') public validStyle: boolean = false;
  @Input() rows: number = 3;
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
