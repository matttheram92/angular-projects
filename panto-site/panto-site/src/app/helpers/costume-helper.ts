export function getBgColour(colour: string): string {
  switch (colour.toLowerCase()) {
    case 'burgundy':
      return 'maroon';
    case 'mauve':
      return 'mediumpurple';
    case 'mustard':
      return '#FFDB58';
    case 'cream':
      return '#FFFDD0';
    case 'peach':
      return '#FFE5B4';
    case 'lilac':
      return '#C8A2C8';
    case 'lemon':
      return '#FAFA33';
    case 'various':
      return 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
    default:
      return colour;
  }
}
