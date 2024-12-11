import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'little-loft'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('little-loft');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'little-loft app is running!'
    );
  });

  it('should contain app-header element', () => {
    const headerElement = fixture.debugElement.query(By.css('app-header'));
    expect(headerElement).toBeTruthy();
  });

  it('should contain router-outlet element', () => {
    const routerOutletElement = fixture.debugElement.query(
      By.css('router-outlet')
    );
    expect(routerOutletElement).toBeTruthy();
  });

  it('should contain app-mobile-nav with class "sm:hidden fixed w-full bottom-0"', () => {
    const mobileNavElement = fixture.debugElement.query(
      By.css('app-mobile-nav')
    );
    expect(mobileNavElement).toBeTruthy();
    const classes = mobileNavElement.nativeElement.classList;
    expect(classes).toContain('sm:hidden');
    expect(classes).toContain('fixed');
    expect(classes).toContain('w-full');
    expect(classes).toContain('bottom-0');
  });
});
