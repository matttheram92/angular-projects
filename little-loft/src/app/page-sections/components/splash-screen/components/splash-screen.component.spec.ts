import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashScreenComponent } from './splash-screen.component';

describe('SplashScreenComponent', () => {
  let component: SplashScreenComponent;
  let fixture: ComponentFixture<SplashScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashScreenComponent],
    });
    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //   it('should update breakpoint on init', () => {
  //     spyOn(component, 'updateBreakpoint');
  //     component.ngOnInit();
  //     expect(component.updateBreakpoint).toHaveBeenCalled();
  //   });

  //   it('should handle previous correctly', () => {
  //     component.visibleSplashIndex = 1;
  //     component.previous();
  //     expect(component.visibleSplashIndex).toBe(0);

  //     component.visibleSplashIndex = 0;
  //     component.previous();
  //     expect(component.visibleSplashIndex).toBe(0); // Ensure it doesn't go below 0
  //   });

  //   it('should handle next correctly', () => {
  //     component.visibleSplashIndex = 0;
  //     component.splashScreenInfo = {
  //       sections: [
  //         { type: 'type1', index: 0 },
  //         { type: 'type2', index: 1 },
  //       ],
  //     } as SplashScreenInfo;
  //     component.next();
  //     expect(component.visibleSplashIndex).toBe(1);

  //     component.visibleSplashIndex = 1;
  //     component.next();
  //     expect(component.visibleSplashIndex).toBe(1); // Ensure it doesn't exceed the last index
  //   });

  //   it('should determine isFirst correctly', () => {
  //     component.visibleSplashIndex = 0;
  //     expect(component.isFirst()).toBeTrue();

  //     component.visibleSplashIndex = 1;
  //     expect(component.isFirst()).toBeFalse();
  //   });

  //   it('should determine isLast correctly', () => {
  //     component.visibleSplashIndex = 0;
  //     component.splashScreenInfo = {
  //       sections: [
  //         { type: 'type1', index: 0 },
  //         { type: 'type2', index: 1 },
  //       ],
  //     } as SplashScreenInfo;
  //     expect(component.isLast()).toBeFalse();

  //     component.visibleSplashIndex = 1;
  //     expect(component.isLast()).toBeTrue();
  //   });

  // Add more tests for getComponentType, getInjector, and other methods as needed
});
