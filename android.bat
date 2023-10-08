@echo off
set /p port=WiFi-Debugging einschalten und WiFi-Debugging-Port eingeben:

if "%port%" == "" (
    echo Port darf nicht leer sein
    pause
    exit /b
)

cd D:\Dev\Einkochen-leicht-gemacht

npx webpack --config webpack.config.js && cordova build android --verbose && adb connect 192.168.178.58:%port% && adb install D:\Dev\Einkochen-leicht-gemacht\platforms\android\app\build\outputs\apk\debug\app-debug.apk && pause && exit