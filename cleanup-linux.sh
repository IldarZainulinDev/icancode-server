#!/usr/bin/env bash

export JAVA_HOME=$PWD/jre8linux64
export JETTY_HOME=$PWD/jetty9

echo "JAVA_HOME="$JAVA_HOME
echo "JETTY_HOME="$JETTY_HOME

rm -rf $JETTY_HOME/logs
rm -rf $JETTY_HOME/database

echo Cleanup finished