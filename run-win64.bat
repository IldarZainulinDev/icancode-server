@echo off

set JAVA_HOME=%CD%\jre8win64
set JETTY_HOME=%CD%\jetty9
set DEBUG_PORT=8585

echo "JAVA_HOME="%JAVA_HOME%
echo "JETTY_HOME="%JETTY_HOME%
echo "DEBUG_PORT="%DEBUG_PORT%

cd %JETTY_HOME%
%JAVA_HOME%\bin\java.exe -Xdebug -Xrunjdwp:transport=dt_socket,address=%DEBUG_PORT%,server=y,suspend=n -jar start.jar