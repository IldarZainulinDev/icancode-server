#!/usr/bin/env bash

JAVA_HOME=$PWD/jre8linux64
JETTY_HOME=$PWD/jetty9
APPLICATION_PORT=80
DEBUG_PORT=8585

echo "JAVA_HOME="$JAVA_HOME
echo "JETTY_HOME="$JETTY_HOME
echo "APPLICATION_PORT="$APPLICATION_PORT
echo "DEBUG_PORT="$DEBUG_PORT

cd $JETTY_HOME
$JAVA_HOME/bin/java -Xdebug -Xrunjdwp:transport=dt_socket,address=%DEBUG_PORT%,server=y,suspend=n -jar start.jar jetty.http.port=$APPLICATION_PORT