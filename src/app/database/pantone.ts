/** A theme colour: the site palette is generated from `hex` (see theme/palette.ts). */
export interface ThemeColor {
  id: string;
  name: string;
  /** Year it was Pantone Color of the Year; empty for the site's own colour. */
  year: string;
  /** Pantone reference, e.g. 'PANTONE 11-4201'. */
  code: string;
  hex: string;
  /** Years with two colours (2016, 2021): the second one is used for secondary accents. */
  secondHex?: string;
  secondName?: string;
}

/** The site's own burgundy, used when no Pantone colour is chosen. */
export const SIGNATURE_COLOR: ThemeColor = {
  id: 'signature',
  name: 'Signature Burgundy',
  year: '',
  code: 'Portfolio default',
  hex: '#7A1E2E',
};

/** Pantone Color of the Year, newest first. Add the new colour at the top each December. */
export const PANTONE_COLORS: ThemeColor[] = [
  { id: '2026', year: '2026', name: 'Cloud Dancer', code: 'PANTONE 11-4201', hex: '#F0EFEB' },
  { id: '2025', year: '2025', name: 'Mocha Mousse', code: 'PANTONE 17-1230', hex: '#A47864' },
  { id: '2024', year: '2024', name: 'Peach Fuzz', code: 'PANTONE 13-1023', hex: '#FFBE98' },
  { id: '2023', year: '2023', name: 'Viva Magenta', code: 'PANTONE 18-1750', hex: '#BB2649' },
  { id: '2022', year: '2022', name: 'Very Peri', code: 'PANTONE 17-3938', hex: '#6667AB' },
  {
    id: '2021',
    year: '2021',
    name: 'Illuminating',
    code: 'PANTONE 13-0647 + 17-5104',
    hex: '#F5DF4D',
    secondHex: '#939597',
    secondName: 'Ultimate Gray',
  },
  { id: '2020', year: '2020', name: 'Classic Blue', code: 'PANTONE 19-4052', hex: '#0F4C81' },
  { id: '2019', year: '2019', name: 'Living Coral', code: 'PANTONE 16-1546', hex: '#FF6F61' },
  { id: '2018', year: '2018', name: 'Ultra Violet', code: 'PANTONE 18-3838', hex: '#5F4B8B' },
  { id: '2017', year: '2017', name: 'Greenery', code: 'PANTONE 15-0343', hex: '#88B04B' },
  {
    id: '2016',
    year: '2016',
    name: 'Rose Quartz',
    code: 'PANTONE 13-1520 + 15-3919',
    hex: '#F7CAC9',
    secondHex: '#92A8D1',
    secondName: 'Serenity',
  },
  { id: '2015', year: '2015', name: 'Marsala', code: 'PANTONE 18-1438', hex: '#955251' },
];
