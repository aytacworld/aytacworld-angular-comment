import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let el: HTMLElement;
  let comp: InputComponent;

  function configureModule (): void {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent
      ]
    });
    fixture = TestBed.createComponent(InputComponent);
    comp = fixture.componentInstance;
    el = fixture.nativeElement;
  }

  beforeEach(() => {
    configureModule();
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should be initialized', () => {
    expect(comp.label).toBe('');
    expect(comp.validStyle).toBe(false);
    expect(comp.fieldId).toBe('field-id-input-1');
  });

  it('should update inputValue', () => {
    comp.writeValue('aze');
    expect(comp.inputValue).toBe('aze');
  });
});
