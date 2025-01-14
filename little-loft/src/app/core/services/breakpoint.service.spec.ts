import { getCurrentBreakpoint, isMobileView } from './breakpoint.service';

describe('getCurrentBreakpoint', () => {
  const originalOuterWidth = window.outerWidth;

  afterEach(() => {
    // Restore the original value after each test
    Object.defineProperty(window, 'outerWidth', {
      value: originalOuterWidth,
      writable: true,
    });
  });

  it('should return "sm" when outerWidth is less than or equal to 640', () => {
    Object.defineProperty(window, 'outerWidth', { value: 640, writable: true });
    expect(getCurrentBreakpoint()).toBe('sm');
  });

  it('should return "md" when outerWidth is greater than 640 and less than or equal to 768', () => {
    Object.defineProperty(window, 'outerWidth', { value: 768, writable: true });
    expect(getCurrentBreakpoint()).toBe('md');
  });

  it('should return "lg" when outerWidth is greater than 768 and less than or equal to 1024', () => {
    Object.defineProperty(window, 'outerWidth', {
      value: 1024,
      writable: true,
    });
    expect(getCurrentBreakpoint()).toBe('lg');
  });

  it('should return "xl" when outerWidth is greater than 1024 and less than or equal to 1280', () => {
    Object.defineProperty(window, 'outerWidth', {
      value: 1280,
      writable: true,
    });
    expect(getCurrentBreakpoint()).toBe('xl');
  });

  it('should return "2xl" when outerWidth is greater than 1536', () => {
    Object.defineProperty(window, 'outerWidth', {
      value: 1600,
      writable: true,
    });
    expect(getCurrentBreakpoint()).toBe('2xl');
  });
});

describe('isMobileView', () => {
  const originalOuterWidth = window.outerWidth;

  afterEach(() => {
    // Restore the original value after each test
    Object.defineProperty(window, 'outerWidth', {
      value: originalOuterWidth,
      writable: true,
    });
  });

  it('should return true when current breakpoint is "sm"', () => {
    Object.defineProperty(window, 'outerWidth', { value: 640, writable: true });
    expect(isMobileView()).toBe(true);
  });

  it('should return false when current breakpoint is "md"', () => {
    Object.defineProperty(window, 'outerWidth', { value: 768, writable: true });
    expect(isMobileView()).toBe(false);
  });

  it('should return false when current breakpoint is "lg"', () => {
    Object.defineProperty(window, 'outerWidth', {
      value: 1024,
      writable: true,
    });
    expect(isMobileView()).toBe(false);
  });

  it('should return false when current breakpoint is "2xl"', () => {
    Object.defineProperty(window, 'outerWidth', {
      value: 1600,
      writable: true,
    });
    expect(isMobileView()).toBe(false);
  });
});
