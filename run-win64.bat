@echo off

call setup-env-win.bat

cd %JETTY_HOME%
%JAVA_HOME%\bin\java.exe -Xdebug -Xrunjdwp:transport=dt_socket,address=%DEBUG_PORT%,server=y,suspend=n -jar start.jar jetty.http.port=%APPLICATION_PORT%