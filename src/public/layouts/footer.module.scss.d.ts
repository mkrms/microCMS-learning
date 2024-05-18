export type Styles = {
  'html': string;
  'l-footer': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
