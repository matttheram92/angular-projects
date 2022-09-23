export interface CostumeModel {
  catalogueNo: number;
  colours: string[];
  description: string;
  imageName: string;
  notes: string;
  quantity: CostumeSizeModel[];
  type: string;
}

export class Costume {
  id!: string;
  catalogueNo!: number;
  colours!: string[];
  description!: string;
  imageUrl!: string;
  imageName!: string;
  notes!: string;
  quantity!: CostumeSize[];
  uniqueSizes!: CostumeSizeModel[];
  count!: number;
  checkedOutCount!: number;
  checkedOutBy!: string[];
  type!: string;

  constructor(costume: CostumeModel, id: string) {
    this.id = id;
    this.catalogueNo = costume.catalogueNo;
    this.colours = costume.colours;
    this.description = costume.description;
    this.imageUrl = '';
    this.imageName = '';
    this.notes = costume.notes;
    this.quantity = this.setupQuantity(costume.quantity);
    this.uniqueSizes = costume.quantity;
    this.count = costume.quantity.length;
    this.checkedOutCount = costume.quantity.filter(size => size.checkedOutBy !== '').length;
    this.checkedOutBy = costume.quantity.filter(size => size.checkedOutBy !== '').map(size => size.checkedOutBy);
    this.type = costume.type;
  }

  private setupQuantity(quantity: CostumeSizeModel[]): CostumeSize[] {
    const sizes: CostumeSize[] = [];
    quantity.forEach(q => {
      const size = { id: q.id, name: q.name, count: quantity.filter(x => x.name === q.name).length, checkedOutBy: q.checkedOutBy };
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

export interface CostumeSizeModel { id: string; name: string; checkedOutBy: string; }
export interface CostumeSize { id: string; name: string; count: number; checkedOutBy: string; }
