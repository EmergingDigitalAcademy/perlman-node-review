# Node Review

## npm

`npm` is the Node Package Manager. It ships with node, we run it with the command line `npm`. We use npm for:

    - Initializing a nodejs project (makes `package.json`)
    - Installing packages (like `express`)
    - Running scripts in your project (`npm start` will run the right file)
    - Managing meta data for your project (github information, author names, description, version, etc)

To start a project from scratch we run `npm init` and hit enter for each question, or `npm init --yes` to accept all defaults.

To install a dependency to your project, run `npm install express` (to install express). This will download and store in `node_modules/` and record the entry in `package.json`

## .gitignore
The `.gitignore` file contains file patterns that git should ignore, like `node_modules/`

PS: Any file that starts with a period ("dot") is treated as a hidden or special file on unix systems. They are often hidden by default from `ls` unless you specify `ls -a` ("list all files") and sometimes hidden by VS Code!

For example, there is actually a hidden `.git` folder that VS Code purposefully hides but it's there!