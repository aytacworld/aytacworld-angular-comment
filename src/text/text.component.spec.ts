import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let fixture: ComponentFixture<TextComponent>;
  let el: HTMLElement;
  let comp: TextComponent;

  function configureModule (): void {
    TestBed.configureTestingModule({
      declarations: [
        TextComponent
      ]
    });
    fixture = TestBed.createComponent(TextComponent);
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
    expect(comp.rows).toBe(3);
    expect(comp.fieldId).toBe('field-id-1');
  });

  it('should update inputValue', () => {
    comp.writeValue('aze');
    expect(comp.inputValue).toBe('aze');
  });
});
