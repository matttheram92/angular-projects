import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OptionsListComponent } from './options-list.component';

describe('OptionsListComponent', () => {
  let component: OptionsListComponent;
  let fixture: ComponentFixture<OptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsListComponent],
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
      expect(element.attributes['href']).toBe('products');
    });
  });

  it('should have the correct classes applied', () => {
    component.options = ['Option 1', 'Option 2', 'Option 3'];
    fixture.detectChanges();

    const optionElements = fixture.debugElement.queryAll(By.css('a'));
    optionElements.forEach((element) => {
      const classes = element.nativeElement.classList;
      expect(classes).toContain('flex');
      expect(classes).toContain('font-semibold');
      expect(classes).toContain('w-5/6');
      expect(classes).toContain('m-auto');
      expect(classes).toContain('border-b');
      expect(classes).toContain('border-gray-900/5');
      expect(classes).toContain('p-4');
      expect(classes).toContain('hover:bg-gray-100');
    });
  });

  it('should render ">" for each option', () => {
    component.options = ['Option 1', 'Option 2', 'Option 3'];
    fixture.detectChanges();

    const arrowElements = fixture.debugElement.queryAll(By.css('a p.ml-auto'));
    expect(arrowElements.length).toBe(3);
    arrowElements.forEach((element) => {
      expect(element.nativeElement.textContent.trim()).toBe('>');
    });
  });
});
