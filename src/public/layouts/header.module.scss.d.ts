export type Styles = {
  'html': string;
  'l-header': string;
  'l-header__logo': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
