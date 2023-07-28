#!/usr/bin/env bash

rm -rf ../builds/portfolio
mkdir -p ../builds/portfolio/dist

parcel build src/index.html --out-dir ../builds/portfolio/dist

mkdir -p ../builds/portfolio/dist/unity
cp -R src/unity ../builds/portfolio/dist

cp -R config ../builds/portfolio
cp Procfile ../builds/portfolio
