declare module "react-typed" {
  import * as React from "react";

  export interface ReactTypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    backDelay?: number;
    startDelay?: number;
    showCursor?: boolean;
    cursorChar?: string;
    smartBackspace?: boolean;
    shuffle?: boolean;
    fadeOut?: boolean;
    fadeOutDelay?: number;
  }

  export default class Typed extends React.Component<ReactTypedProps> {}
}
