export type Styles = {
  'html': string;
  'l-inner': string;
  'p-frontPage__articleList': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
