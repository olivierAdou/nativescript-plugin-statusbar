import { Common } from './statusbar.common';
export declare class enableFullScreen implements FullScreen {
  leanBack(): void;
  immersive(): void;
  stickyImmersive(): void;
}
export interface FullScreen {
  leanBack(): any;
  immersive(): any;
  stickyImmersive(): any;
}
export declare class Statusbar extends Common {
  enableFullScreen: enableFullScreen;
  verifiyDevice(): void;
  setNavigationBarColor(codecolor: any): void;
  setStatusBarColor(codecolor: any): void;
  setNavigationBarColorTransparent(): void;
  setStatusBarColorTransparent(): void;
  hideStaturbar(): void;
  hideNavigationBar(): void;
}
