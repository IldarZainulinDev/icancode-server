#!/usr/bin/env bash

bash setup-env-linux.sh

rm -rf $JETTY_HOME/logs
rm -rf $JETTY_HOME/database

echo Cleanup finished