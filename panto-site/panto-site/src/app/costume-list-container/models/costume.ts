export interface CostumeModel {
  catalogueNo: number;
  colours: string[];
  description: string;
  imageName: string;
  notes: string;
  quantity: string[];
  type: string;
}

export class Costume {
  catalogueNo!: number;
  colours!: { name: string; class: string }[];
  description!: string;
  imageUrl!: string;
  notes!: string;
  quantity!: { name: string; count: number }[];
  count!: number;
  type!: string;

  constructor(costume: CostumeModel) {
    this.catalogueNo = costume.catalogueNo;
    this.colours = costume.colours.map((colour) => this.setupColours(colour));
    this.description = costume.description;
    this.imageUrl = '';
    this.notes = costume.notes;
    this.quantity = this.setupQuantity(costume.quantity);
    this.count = costume.quantity.length;
    this.type = costume.type;
  }

  private setupColours(colourName: string): { name: string; class: string } {
    let colourClass = '';
    switch (colourName.toLowerCase()) {
      case 'white':
      case 'black':
        colourClass = `bg-${colourName.toLowerCase()}`;
        break;
      default:
        colourClass = `bg-${colourName.toLowerCase()}-500`;
        break;
    }
    return { name: colourName, class: colourClass };
  }

  private setupQuantity(quantity: string[]): { name: string; count: number }[] {
    const sizes: { name: string; count: number }[] = [];
    quantity.forEach(q => {
        const size = { name: q, count: quantity.filter(x => x === q).length };
        if (sizes.filter(x => x.name === size.name).length === 0) {
            sizes.push(size);
        }
    })
    return sizes;
  }
}
