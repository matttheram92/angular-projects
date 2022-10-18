export function getBgColour(colour: string): string {
  switch (colour) {
    case 'Burgundy':
      return 'maroon';
    case 'Mauve':
      return 'mediumpurple';
    case 'Mustard':
      return '#FFDB58';
    case 'Cream':
      return '#FFFDD0';
    default:
      return colour;
  }
}
