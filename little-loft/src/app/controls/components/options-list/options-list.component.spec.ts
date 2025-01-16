import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OptionsListComponent } from './options-list.component';
import { IconsModule } from '@app/icons/icons.module';
import { ControlsModule } from '@app/controls/contols.module';

describe('OptionsListComponent', () => {
  let component: OptionsListComponent;
  let fixture: ComponentFixture<OptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsListComponent],
      imports: [IconsModule, ControlsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of options', () => {
    component.options = ['Option 1', 'Option 2', 'Option 3'];
    fixture.detectChanges();

    const optionElements = fixture.debugElement.queryAll(By.css('a'));
    expect(optionElements.length).toBe(3);
  });

  it('should render options with the correct content', () => {
    component.options = ['Option 1', 'Option 2', 'Option 3'];
    fixture.detectChanges();

    const optionElements = fixture.debugElement.queryAll(By.css('a'));
    expect(optionElements[0].nativeElement.textContent.trim()).toContain(
      'Option 1'
    );
    expect(optionElements[1].nativeElement.textContent.trim()).toContain(
      'Option 2'
    );
    expect(optionElements[2].nativeElement.textContent.trim()).toContain(
      'Option 3'
    );
  });

  it('should apply the correct href attribute to each option', () => {
    component.options = ['Option 1', 'Option 2', 'Option 3'];
    fixture.detectChanges();

    const optionElements = fixture.debugElement.queryAll(By.css('a'));
    optionElements.forEach((element) => {
      expect(element.attributes['appNavigateTo']).toBe('products');
    });
  });
});
