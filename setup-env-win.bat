@echo off

set JAVA_HOME=%CD%\jre8win64
set JETTY_HOME=%CD%\jetty9
set APPLICATION_PORT=80
set DEBUG_PORT=8585

echo "JAVA_HOME="%JAVA_HOME%
echo "JETTY_HOME="%JETTY_HOME%
echo "APPLICATION_PORT="%APPLICATION_PORT%
echo "DEBUG_PORT="%DEBUG_PORT%

echo Environment setup finished