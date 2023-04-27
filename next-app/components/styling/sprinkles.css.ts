import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import {
  colorProps,
  responsiveProperties,
  unresponsiveProps,
} from './properties';

const unresponsiveAtomicProps = defineProperties({
  properties: unresponsiveProps,
});

const colorAtomicProps = defineProperties({
  properties: colorProps,
  defaultCondition: 'lightMode',
  conditions: {
    lightMode: {},
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
      selector: 'body:not(.light) &',
    },
  },
});

const responsiveAtomicProps = defineProperties({
  properties: responsiveProperties,
  conditions: {
    sm: {},
    md: { '@media': `screen and (min-width: 768px)` },
    lg: { '@media': `screen and (min-width: 1024px)` },
  },
  defaultCondition: 'sm',
  responsiveArray: ['sm', 'md', 'lg'],
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

export const sprinkles = createSprinkles(
  unresponsiveAtomicProps,
  colorAtomicProps,
  responsiveAtomicProps
);
