
type FontWeight = '400' | '400italic' | '500' | '600' | '700' | '800';


export interface FontUrls {
  [weight: string]: string; 
}


export interface Fonts {
  [fontName: string]: FontUrls; 
}
