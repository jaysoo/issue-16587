import { sprinkles } from './sprinkles.css';
import { pick, omit } from 'lodash';
import clsx from 'clsx';

type Sprinkles = Parameters<typeof sprinkles>[0];
interface Atoms extends Sprinkles {
  className?: string | string[];
}

export function atoms(atoms: Atoms) {
  const { className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(sprinklesClassNames, className);
}

const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];
