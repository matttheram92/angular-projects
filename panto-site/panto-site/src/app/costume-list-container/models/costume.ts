export interface CostumeModel {
  catalogueNo: number;
  colours: string[];
  description: string;
  imageName: string;
  notes: string;
  quantity: string[];
  type: string;
}

enum ColourClasses {

}

export class Costume {
  catalogueNo!: number;
  colours!: string[];
  description!: string;
  imageUrl!: string;
  notes!: string;
  quantity!: { name: string; count: number }[];
  count!: number;
  type!: string;

  constructor(costume: CostumeModel) {
    this.catalogueNo = costume.catalogueNo;
    this.colours = costume.colours;
    this.description = costume.description;
    this.imageUrl = '';
    this.notes = costume.notes;
    this.quantity = this.setupQuantity(costume.quantity);
    this.count = costume.quantity.length;
    this.type = costume.type;
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

export class CostumeFilters {
  colours!: string[];
  types!: string[];
  sizes!: string[];

  constructor() {
    this.colours = [];
    this.types = [];
    this.sizes = [];
  }
}
