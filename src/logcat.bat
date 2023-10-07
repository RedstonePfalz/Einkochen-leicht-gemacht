@echo off
set /p port=WiFi-Debugging einschalten und WiFi-Debugging-Port eingeben:

if "%port%" == "" (
    echo Port darf nicht leer sein
    pause
    exit /b
)

adb connect 192.168.178.58:%port%

exit