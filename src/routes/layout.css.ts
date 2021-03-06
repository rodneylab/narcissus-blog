import { themeVars } from '$lib/styles/themes/theme.css';
import { spacing0, spacing6 } from '$lib/styles/vars/spacing.css';
import { maxWidthFull, maxWidthWrapper } from '$lib/styles/vars/widths.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh',
  backgroundColor: themeVars.colour.background,
  color: themeVars.colour.text,

  '@media': {
    '(min-width: 768px)': {
      margin: [spacing0, 'auto'],
      padding: [spacing0, 'auto'],
    },
  },
});

export const main = style({
  maxWidth: [maxWidthWrapper],
  marginLeft: [spacing6],
  marginRight: [spacing6],
  '@media': {
    '(min-width: 768px)': {
      width: [maxWidthFull],
      padding: [spacing0, 'auto'],
      margin: ['auto'],
    },
  },
});
