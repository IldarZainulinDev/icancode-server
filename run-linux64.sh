#!/usr/bin/env bash

bash setup-env-linux.sh

cd $JETTY_HOME
$JAVA_HOME/bin/java -Xdebug -Xrunjdwp:transport=dt_socket,address=%DEBUG_PORT%,server=y,suspend=n -jar start.jar jetty.http.port=$APPLICATION_PORT