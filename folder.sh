#!/bin/bash

folder_names=(
"intro"
"variables"
"data-types"
"input-output"
"operators-arithmetic"
"operators-comparison"
"operators-logical"
"truthy-falsy"
"if-else"
"ternary-operator"
"dom-intro"
"event-listeners"
"dom-mini-projects"
"functions-basics"
"functions-practice"
"arrays-basics"
"arrays-methods"
"objects-intro"
"loops-for"
"loops-while"
"loops-arrays"
"nested-loops"
"patterns"
"strings-basics"
"strings-methods"
"string-problems"
"sorting-arrays"
"problem-solving-mixed"
"project-marks-analyzer"
"project-todo-app"
"local-storage"
"project-todo-advanced"
"try-catch"
"api-fetch-intro"
)

parent="04.JavaScript"
mkdir -p "$parent"

# choose files you want (edit this anytime)
files=("index.html" "README.md" "style.css")

i=1
for name in "${folder_names[@]}"; do
  printf -v num "%02d" "$i"   # formats 1 → 01
  dir="$parent/${num}.${name}"

  mkdir "$dir"

  # create files inside each folder
  for file in "${files[@]}"; do
    touch "$dir/$file"
  done

  ((i++))
done