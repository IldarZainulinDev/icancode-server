@echo off

call setup-env-win.bat

rmdir %JETTY_HOME%\logs /S /Q
rmdir %JETTY_HOME%\database /S /Q

echo Cleanup finished