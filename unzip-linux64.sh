#!/usr/bin/env bash

export JAVA_HOME=$PWD/jre8linux64
export JETTY_HOME=$PWD/jetty9

echo "JAVA_HOME="$JAVA_HOME
echo "JETTY_HOME="$JETTY_HOME

apt-get install p7zip-full
7z x jetty9.7z $JETTY_HOME
7z x jre8linux64.7z $JAVA_HOME

chmod +x $JAVA_HOME/bin/java

echo Artifacts unziped