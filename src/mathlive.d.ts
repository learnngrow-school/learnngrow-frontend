declare module 'mathlive' {
  export class MathfieldElement extends HTMLElement {
    executeCommand(command: string[]): void;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'math-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
