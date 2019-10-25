# nativescript-plugin-statusbar
StatusBar plugin Android platform

> This plugin work currently just with Android Platform

<img src="https://cdn57.androidauthority.net/wp-content/uploads/2015/06/android-m-notification-bar.jpg" alt="statusbar image"/>

## Installation
From the command prompt go to your app's root folder and execute:
```
tns plugin add nativescript-plugin-statusbar
```

## Demo
If you want a quickstart, [check out the demo app](https://github.com/olivierAdou/nativescript-plugin-statusbar/tree/master/demo). Run it locally using these commands:

```bash
git clone https://github.com/olivierAdou/nativescript-plugin-statusbar
cd nativescript-plugin-statusbar/src
npm run demo.android
```

Or use this for demo with Angular
[check out the demo angular app](https://github.com/olivierAdou/nativescript-plugin-statusbar/tree/master/demo-angular)
```bash
git clone https://github.com/olivierAdou/nativescript-plugin-statusbar
cd nativescript-plugin-statusbar/src
npm run demo-angular.android
```


#### JavaScript
```js
var statusbarPlugin = require("nativescript-plugin-statusbar");
var statusbar = new statusbarPlugin();

```

#### TypeScript

```typescript
import { Statusbar } from "nativescript-plugin-statusbar";

class MyClass {
  constructor( private statusbar: Statusbar) {
  }
}
```

#### TypeScript provider from app.module.ts

In the file called app.module.ts add the plugin class in provider, like this : 

```typescript
import { Statusbar } from 'nativescript-plugin-statusbar';
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers : [Statusbar],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
```

If all it done correctly i can say your are ready to use this plugin 

## setNavigationBarColor
This function will allow you to give a color to the statusbar

This function need one parameter to be a hex code color ('#000') for example
```typescript
    this.statusbar.setNavigationBarColor(codecolor);
```
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkE3yW6YFn7a5K2ne7DhR_Z3c_P11KQ7WcT5chgSx16jOOp5ee&s"/>

## setStatusBarColor
Change the color of the staturbar.

This function need one parameter to be a hex code color ('#000') for example
```typescript
    this.statusbar.setStatusBarColor(codecolor);
```
<img src="https://i.stack.imgur.com/ryTUi.png"/>

## setNavigationBarColorTransparent

Set transparent the NavigationBar
```typescript
    this.statusbar.setNavigationBarColorTransparent();
```

## setStatusBarColorTransparent

Set transparent the statusBar
```typescript
    this.statusbar.setStatusBarColorTransparent();
```

## hideStaturbar

Make the statusBar hidden

```typescript
    this.statusbar.hideStaturbar();
```


## hideNavigationBar

Make the navigationBar hidden

```typescript
    this.statusbar.hideNavigationBar();
```

# enableFullScreen 

the method is based on this interface 

```typescript
export interface FullScreen {
  leanBack(): any;
  immersive(): any;
  stickyImmersive(): any;
}
```

there are three methods called leanBack, immersive, stickyImmersive

### leanBack
The lean back mode is for fullscreen experiences in which users won't be interacting heavily with the screen, such as while watching a video.

When users want to bring back the system bars, they simply tap the screen anywhere.

To enable leanBack mode, call 
```typescript
    this.statusbar.enableFullScreen.leanBack();
```

### immersive
The immersive mode is intended for apps in which the user will be heavily interacting with the screen. Examples are games, viewing images in a gallery, or reading paginated content, like a book or slides in a presentation.

When users need to bring back the system bars, they swipe from any edge where a system bar is hidden. By requiring this more deliberate gesture, the user's engagement with your app won't be interrupted by accidental touches and swipes.

To enable immersive mode, call 
```typescript
    this.statusbar.enableFullScreen.immersive();
```

### stickyImmersive
In the regular immersive mode, any time a user swipes from an edge, the system takes care of revealing the system bars—your app won't even be aware that the gesture occurred. So if the user might actually need to swipe from the edge of the screen as part of the primary app experience—such as when playing a game that requires lots of swiping or using a drawing app—you should instead enable the "sticky" immersive mode.

While in sticky immersive mode, if the user swipes from an edge with a system bar, system bars appear but they're semi-transparent, and the touch gesture is passed to your app so it app can also respond to the gesture. 

To enable sticky immersive mode, call 
```typescript
    this.statusbar.enableFullScreen.stickyImmersive();
```
