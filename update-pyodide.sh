#! /bin/bash

DIR="$(dirname "$(realpath "$0")")"
DST_DIR=$DIR/src/assets/


wget https://api.github.com/repos/pyodide/pyodide/releases/latest -O - | \
  grep -i 'pyodide-[0-9]' | \
  awk -F \" -v RS="," '/browser_download_url/ {print $(NF-1)}' | \
  xargs wget -O - | \
  tar -xvj -C $DST_DIR
