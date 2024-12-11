export function getCurrentBreakpoint(): string {
  const tailwindDefaultBreakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  for (const [key, query] of Object.entries(tailwindDefaultBreakpoints)) {
    if (window.outerWidth <= query) {
      return key;
    }
  }

  return '2xl';
}

export function isMobileView(): boolean {
  const currentBreakpoint: string = getCurrentBreakpoint();
  const isMobile = currentBreakpoint === 'sm';
  return isMobile;
}
