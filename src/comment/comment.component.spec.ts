import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment.component';
import { MockComponent } from '../shared/mock.component';

describe('CommentComponent', () => {
  let fixture: ComponentFixture<CommentComponent>;
  let el: HTMLElement;
  let comp: CommentComponent;

  function configureModule (): void {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent({ selector: 'c-input', inputs: ['label', 'multi'] }),
        CommentComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(CommentComponent);
    comp = fixture.componentInstance;
    el = fixture.nativeElement;
  }

  beforeEach(() => {
    configureModule();
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});
