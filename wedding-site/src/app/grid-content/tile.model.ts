import { SafeResourceUrl } from '@angular/platform-browser';
import { MapKey } from './map-key.model';

export interface Tile {
    section: string;
    color: string;
    cols: number;
    rows: number;
    title?: string;
    text?: string[];
    img?: string;
    map?: SafeResourceUrl;
    imageOrMap?: string;
    component?: string;
    mapKey?: MapKey[];
  }