# FIRST EXAM - CERT - UPB:

## Steps:
1. Clone this repository.
2. Create a new branch from DEVELOP branch.
   Branch format name pattern: firstExam/NameLast, e.g.: firstExam/MauricioTerceros
3. In this new branch do the following:
   - Create a .gitignore file and ignore the following folder: build
   - Create a "src" folder with the following:
     - Create two Javascript files at "src/js" folder: one.js and two.js. *CONTENT:* Free JS content.
     - Create three CSS files at "src/css" folder: first.css, second.css and third.css *CONTENT:* Free CSS content.
     - Create an index.html at "src" folder. *CONTENT:* Basic HTML content.
   - Commit
4. Prepare a grunt project, name the project as: FirstExam.
5. Ignore (.gitignore) the following: node_modules, package-lock.json => Commit.
6. Commit the package.json
7. Once grunt project is setup, do the following:
   - Create Gruntfile.js
   - Create a config.json file with the following: 
     - pageTitle="FIRST EXAMN"
     - pageContent="My Page Title"
     - buildFolder="build"
     - srcFolder="src"   
   - Commit
8. Create grunt tasks to:
   - Concat Javascript files from srcFolder folder and place to buildFolder folder.
     - Concat task name: concatJS
     - Concatenated file name: scripts.js
     - Commit.
   - Concat Styles files from srcFolder folder and place to buildFolder folder.
     - Concat task name: concatCSS
     - Concatenated file name: styles.js
     - Commit.
   - Format "index.html" by using templates to:
     - Add generated scripts.js
     - Add generated styles.css
     - Add pageTitle and content.
     - Commit
   - Create a multitask to execute all described above, task name: build
     - Commit
 9. Push your branch.
 10. Create a Pull Request.

Commit messages format: "FE001 - Commit message". Example: "FE001 - Add git ignore file."