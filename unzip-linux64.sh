#!/usr/bin/env bash

bash setup-env-linux.sh

apt-get install p7zip-full
7z x jetty9.7z $JETTY_HOME
7z x jre8linux64.7z $JAVA_HOME

chmod +x $JAVA_HOME/bin/java

echo Artifacts unziped