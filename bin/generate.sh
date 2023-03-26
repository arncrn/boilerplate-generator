#!/bin/bash
# This line specifies the interpreter for the script, which is the Bourne-Again SHell (bash).

if [ -z "$1" ]; then
  # This checks if the first argument is empty. If it is, a usage message is printed, and the script exits.
  echo "Usage: generate <generator_name|list> <project_name>"
  exit 1
fi

generators_base_path="$(dirname "$(dirname "$(readlink -f "$0")")")"
# This gets the absolute path of the script file using `readlink -f "$0"` and extracts the directory part twice using nested `dirname` calls.
# This gives us the path to the 'generators' folder.

if [ "$1" == "list" ]; then
  # If the first argument is "list", the script will list available generators.
  echo "Available generators:"
  # This for loop iterates over all directories within the generators_base_path.
  for generator_path in "$generators_base_path"/*/; do
    # The basename command extracts the generator name from the directory path.
    generator_name="$(basename "$generator_path")"
    # Check if the current generator_name is "bin". If it is, skip to the next iteration of the loop.
    if [ "$generator_name" == "bin" ]; then
      continue
    fi
    # This line prints the generator name.
    echo "$generator_name"
  done
  exit 0
fi


generator_name="$1"
# This assigns the first argument (generator_name) to a variable called generator_name.

project_name="$2"
# This assigns the second argument (project_name) to a variable called project_name.

if [ -z "$project_name" ]; then
  # This checks if the second argument (project_name) is empty. If it is, an error message is printed, and the script exits.
  echo "Error: Please provide a project name"
  exit 1
fi

project_path="$(pwd)/$project_name"
# This creates the project path by concatenating the current working directory (obtained using `pwd`) and the project_name.

boilerplate_path="$generators_base_path/$generator_name"
# This creates the boilerplate path by concatenating the generators_base_path and the generator_name.

if [ ! -d "$boilerplate_path" ]; then
  # This checks if the boilerplate_path does not exist as a directory.
  # If it doesn't, an error message is printed, and the script exits.
  echo "Error: The generator \"$generator_name\" does not exist. Aborting."
  exit 1
fi

if [ -d "$project_path" ]; then
  # This checks if the project_path already exists as a directory. If it does, a warning message is printed, and the script exits.
  echo "Warning: The directory \"$project_path\" already exists. Aborting."
  exit 1
fi

cp -R "$boilerplate_path" "$project_path"
# This copies the contents of the boilerplate_path (source) to the project_path (destination).

echo "Successfully generated project \"$project_name\" using \"$generator_name\"."
# This prints a success message to the console, indicating that the new project has been generated from the specified boilerplate.