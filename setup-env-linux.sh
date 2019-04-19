#!/usr/bin/env bash

export JAVA_HOME=$PWD/jre8linux64
export JETTY_HOME=$PWD/jetty9
export APPLICATION_PORT=80
export DEBUG_PORT=8585

echo "JAVA_HOME="$JAVA_HOME
echo "JETTY_HOME="$JETTY_HOME
echo "APPLICATION_PORT="$APPLICATION_PORT
echo "DEBUG_PORT="$DEBUG_PORT

echo Environment setup finished