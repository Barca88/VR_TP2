#!/bin/bash

mkdir volume
mkdir logfile
touch logfile/httplogfile.txt
cd /httpFileServer/
npm i
npm install -g nodemon
nodemon > ../logfile/httplogfile.txt
