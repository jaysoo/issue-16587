import React from 'react';
import { atoms, extractAtoms } from '../styling/atoms';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type ElemType<T> = T extends React.DetailedHTMLProps<
  React.HTMLAttributes<infer E>,
  never
>
  ? E
  : never;

type BoxProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  className?: string;
};

function _Box<T extends keyof JSX.IntrinsicElements>(
  props: React.PropsWithChildren<BoxProps<T>>,
  ref: React.ForwardedRef<ElemType<JSX.IntrinsicElements[T]>>
) {
  const { as: Component = 'div', ...other } = props;
  const [atomsProps, propsToForward] = extractAtoms(other);
  const className = atoms({
    className: propsToForward.className,
    ...atomsProps,
  });

  const C = Component as React.ElementType;

  return (
    <C {...propsToForward} className={className} ref={ref} />
  ) as React.ReactElement;
}

export const Box = React.forwardRef(_Box);
