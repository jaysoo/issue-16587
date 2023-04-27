import { vars } from './theme.css';

export const unresponsiveProps = {
  minBlockSize: ['100vh'],
  userSelect: ['none'],
  cursor: ['default', 'pointer'],
} as const;

export const colorProps = {
  background: {
    primary: vars.colors.primary.bg,
    neutral: vars.colors.neutral.bg,
  },
  color: {
    primary: vars.colors.primary.text,
    neutral: vars.colors.neutral.text,
  },
} as const;

export const responsiveProperties = {
  fontSize: vars.fontSize,
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginLeft: vars.space,
  marginRight: vars.space,
  display: ['none', 'flex', 'block', 'inline'],
  flexDirection: ['row', 'column'],
  justifyContent: [
    'stretch',
    'flex-start',
    'center',
    'flex-end',
    'space-around',
    'space-between',
  ],
  alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
} as const;
