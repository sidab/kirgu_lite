# cordova-plugin-crosswalk-webview-arm

This is a fork of original [cordova-plugin-crosswalk-webview-v3](https://github.com/ardabeyazoglu/cordova-plugin-crosswalk-webview-v3) library, which aims to provide compatibility with latest cordova versions.

Since there is still a lot of android devices with legacy webview (before 7.0), crosswalk-webview project still makes sense for android. 

For detailed information about crosswalk, please visit the homepage of original library. 

### Install

* Add this plugin

```
$ cordova plugin add cordova-plugin-crosswalk-webview-arm
```

* Build
```
$ cordova build android
```
The build script will automatically fetch the Crosswalk WebView libraries from Crosswalk project download site (https://download.01.org/crosswalk/releases/crosswalk/android/maven2/) and build for ARM(v7/64) architectures by default.


To build Crosswalk-enabled armv7 and arm64 apks for release:

    $ cordova build --release

It will generate following apks:

```
platforms/android/app/build/outputs/apk/armv7/release/app-arm-release-unsigned.apk
```

Check this gist to build all of them in one bash script: (<https://gist.github.com/ardabeyazoglu/ff505d06bd576b966ad7f1c932f7c6ed>)

### Release Notes

#### 3.1.0 (December 27, 2019)
* Generate armv7 and arm64 apk at the same time

#### 3.0.2 (November 10, 2019)
* Added compatibility with cordova 9
* Fixed version code calculation for 64bit builds (aligned them with 32bit build codes)

#### 2.4.0 (January 18, 2018)
* Keep compatibility with cordova-android 7.0 project structure

#### 2.3.0 (January 21, 2017)
* Uses the latest Crosswalk 23 stable version by default

#### 2.2.0 (November 4, 2016)
* Uses the latest Crosswalk 22 stable version by default
* Keep compatible for Cordova-android 6.0 with evaluating Javascript bridge
* This version requires cordova-android 6.0.0 or newer

#### 2.1.0 (September 9, 2016)
* Uses the latest Crosswalk 21 stable version by default

#### 2.0.0 (August 17, 2016)
* Uses the latest Crosswalk 20 stable version by default
* Discontinue support for Android 4.0 (ICS) in Crosswalk starting with version 20

#### 1.8.0 (June 30, 2016)
* Uses the latest Crosswalk 19 stable version by default

#### 1.7.0 (May 4, 2016)
* Uses the latest Crosswalk 18 stable version by default
* Support to use [Crosswalk Lite](https://crosswalk-project.org/documentation/crosswalk_lite.html), It's possible to specify lite value with the variable of XWALK_MODE at install plugin time.
* [Cordova screenshot plugin](https://github.com/gitawego/cordova-screenshot.git) can capture the visible content of web page with Crosswalk library.
* Doesn't work with Crosswalk 17 and earlier

#### 1.6.0 (March 11, 2016)
* Uses the latest Crosswalk 17 stable version by default
* Support to [package apps for 64-bit devices](https://crosswalk-project.org/documentation/android/android_64bit.html), it's possible to specify 64-bit targets using the `--xwalk64bit` option in the build command:

        cordova build android --xwalk64bit

#### 1.5.0 (January 18, 2016)
* Uses the latest Crosswalk 16 stable version by default
* The message of xwalk's ready can be listened

#### 1.4.0 (November 5, 2015)
* Uses the latest Crosswalk 15 stable version by default
* Support User Agent and Background Color configuration preferences
* Compatible with the newest Cordova version 5.3.4

#### 1.3.0 (August 28, 2015)
* Crosswalk variables can be configured as an option via CLI
* Support for [Crosswalk's shared mode](https://crosswalk-project.org/documentation/shared_mode.html) via the XWALK_MODE install variable or xwalkMode preference
* Uses the latest Crosswalk 14 stable version by default
* The ANIMATABLE_XWALK_VIEW preference is false by default
* Doesn't work with Crosswalk 14.43.343.17 and earlier

#### 1.2.0 (April 22, 2015)
* Made Crosswalk command-line configurable via `<preference name="xwalkCommandLine" value="..." />`
* Disabled pull-down-to-refresh by default

#### 1.1.0 (April 21, 2015)
* Based on Crosswalk v13
* Made Crosswalk version configurable via `<preference name="xwalkVersion" value="..." />`

#### 1.0.0 (Mar 25, 2015)
* Initial release
* Based on Crosswalk v11
