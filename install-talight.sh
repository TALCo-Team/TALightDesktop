#! /bin/bash

PROJECT_FOLDER="TALight"
CURRENT_DIR=`pwd`

sudo apt install cargo

git clone https://github.com/romeorizzi/TALight.git ./$PROJECT_FOLDER


export TAL_HOME="$CURRENT_DIR/$PROJECT_FOLDER"

if ! grep -i "export TAL_HOME" ~/.bashrc; then
    echo "Adding paths to ~/.bashrc"
    echo "export TAL_HOME=$TAL_HOME" >> ~/.bashrc
    echo "export PATH=\"\$PATH:$TAL_HOME/rtal/target/debug\"" >> ~/.bashrc
    echo "export PATH=\"\$PATH:$TAL_HOME/rtal/target/release\"" >> ~/.bashrc   
fi

export PATH="$PATH:$TAL_HOME/rtal/target/debug"
export PATH="$PATH:$TAL_HOME/rtal/target/release"

cd $PROJECT_FOLDER
pwd
cd rtal 
cargo build
cargo build --release
cd ..
cd ..




