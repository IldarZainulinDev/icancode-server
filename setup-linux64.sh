#!/usr/bin/env bash

apt-get install p7zip-full
7z x jetty9.7z
7z x jre8linux64.7z

chmod +x $PWD/jre8linux64/bin/java