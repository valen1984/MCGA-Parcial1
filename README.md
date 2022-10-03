Parcial 1 Backend
MCGA - Valentín Alvarez

npm init
package-lock.json
Part of learning Node.js is creating a package.json file using npm init, but you can also create one automatically. Creating a package.json file is typically the first step in a Node project, and you need one to install dependencies in npm. If you're starting a project from scratch, you create a package.json file to hold important metadata about your project and record your dependencies.

npm install
npm install will generate a new package-lock. json if it does not exist or it will update the dependency tree if it does not match the packages specified in the package. json
The package-lock. json file stores the version information of each installed package unchanged, and npm will use those package versions when running the npm install command.

The .gitignore file is a text file that tells Git which files or folders to ignore in a project.

A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file and any entries in that file will be ignored in all of your Git repositories.
To create a local .gitignore file, create a text file and name it .gitignore (remember to include the . at the beginning). Then edit this file as needed. Each new line should list an additional file or folder that you want Git to ignore.

npm install nodemon
npm install node_modules