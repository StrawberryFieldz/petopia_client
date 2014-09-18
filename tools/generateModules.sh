#!/bin/bash
# Bash script to easily create angular app client file structure.
# A huge thanks to Jonathan Warrick who created the first version of this script at https://github.com/JonathanWarrick/FolderCreationScript
# Example use:
# Type ./generateModule.sh path module1 testModule

# The above command will create:
#    │    ├── module1             
#    │    │   ├── module1.controller.js  
#    │    │   ├── module1.spec.js  
#    │    │   ├── module1.html    
#    │    │   ├── module1.services.js
#    │    │   ├── module1.css
#    │    ├── testModule             
#    │    │   ├── testModule.controller.js  
#    │    │   ├── testModule.spec.js  
#    │    │   ├── testModule.html    
#    │    │   ├── testModule.services.js
#    │    │   ├── testModule.css

FOLDER_PATH=$1

ARGS=("$@")
COUNT=$#
START=1

cd $FOLDER_PATH

while [ $START -lt $COUNT ]; do
	CURRENTMODULE=${ARGS[$START]}

	echo "Creating files for $CURRENTMODULE module."
	
	mkdir $CURRENTMODULE
	cd $CURRENTMODULE

	touch $CURRENTMODULE.controller.js
	touch $CURRENTMODULE.spec.js
	touch $CURRENTMODULE.css
	touch $CURRENTMODULE.html
	touch $CURRENTMODULE.services.js

	let START=START+1
	
	cd ..
done
