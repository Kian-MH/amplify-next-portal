namespace Api {
  // NEW
  export interface SizeMapping {
    name: string;
    sizeMapping: SizeMapping;
  }
  // OLD
  export interface ApiData {
    // lots of crap &
    placementGroups: PlacementGroups;
  }
  
  export type PlacementGroups = Array<PlacementGroup>;
  
  export interface PlacementGroup {
    name: string;
    placements: Placements;
  }
  
  export type Placements = Array<Config>;
  export type Placement = Config;
  
  export type PlacementConfig = Record<string, Array<string|number> | string | number >
  
  export interface Config {
    id: string;
    format: string;
    slot: string;
    dynamic?: Dynamic;
    options: Options;
    sizeMapping: SizeMapping;
    prebid?: Prebid;
  }
  
  interface Dynamic {
    prefix?: string;
    suffix?: string;
    min?: number;
    max?: number;
    prebid?: Array<PrebidPartial>;
  }
  
  interface Options {
    group?: number | string;
    isOutOfPage?: boolean;
    interstitial?: boolean;
    el?: Element | null;
    alias?: string;
    adUnit?: string; // made a mistake with camelcasing this parameter. Isn't done on init version of this parameter.
    adunit?: string;
    networkCode?: string;
    targeting?: Record<string, Array<string> | string>;
    isEmpty?: boolean;
    isVideoCompanion?: boolean;
  }
  
  type SingleSize = number[];
  
  type MultiSize = SingleSize[];
  
  type SizeMapping = Record<string, MultiSize | undefined>;
  
  interface Prebid extends PrebidPartial {
    sizeMapping: SizeMapping; // same as KaChing sizeMapping
    bidders?: Array<string>;
    excludeBidders?: Array<string>;
    adTypes?: Array<string>;
    position?: string;
  }
  
  interface PrebidPartial {
    id: Record<string, string | number | undefined>;
    banner?: PrebidPartial;
    native?: PrebidPartial;
    outstream?: PrebidPartial;
  }
}