export interface CostumeModel {
  catalogueNo: string;
  colours: string[];
  description: string;
  imageName: string;
  notes: string;
  quantity: CostumeSizeModel[];
  type: string;
  folder: string;
  sortableCatNo?: number;
}

export class Costume {
  id!: string;
  catalogueNo!: string;
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
  folder!: string;
  type!: string;

  constructor(costume: CostumeModel, id: string) {
    this.id = id;
    this.catalogueNo = costume.catalogueNo;
    this.colours = costume.colours;
    this.description = costume.description;
    this.imageUrl = '';
    this.imageName = costume.imageName;
    this.notes = costume.notes;
    this.quantity = this.setupQuantity(costume.quantity);
    this.uniqueSizes = costume.quantity;
    this.count = costume.quantity.length;
    this.checkedOutCount = costume.quantity.filter(size => size.checkedOutBy !== '').length;
    this.checkedOutBy = costume.quantity.filter(size => size.checkedOutBy !== '').map(size => size.checkedOutBy);
    this.folder = costume.folder;
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
  description!: string;
  colours!: FilterItem[];
  types!: FilterItem[];
  sizes!: FilterItem[];
  folders!: FilterItem[];

  constructor() {
    this.description = '';
    this.colours = [];
    this.types = [];
    this.sizes = [];
    this.folders = [];
  }
}

export interface CostumeSizeModel { id: string; name: string; checkedOutBy: string; }
export interface CostumeSize { id: string; name: string; count: number; checkedOutBy: string; }

export interface FilterItem {
  label: string;
  count: number;
}