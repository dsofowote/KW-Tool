# Integration Pubfiles

This repo is for storing all Inskin integration configurations.

Please push/pull to `master` for live changes.

Deploy only from techops and ensure that your account is authorised to Akamai.

## Folder structure

* bin _(helper scripts)_
* dpl _(deploy code)_
* src
    * code
        * publisher folders _(each publisher has its own folder)_
            * section folders _(name is the id of the section)_
                * default.js _(where your code goes)_
                * default.dep _(include additional dependancies here)_
    * dep _(place dependancies here - scripts that enable/disable specific behaviours, useful if you want to enable a parameter across multiple sections temporarily)_
    * kwfilters _(keywords lists go here)_
    * libs _(integration libraries go here)_
    * oms-index _(OMS[publisher] specific mapping files here)_
    * tests _(validation tests, e.g. browser validation go here)_

## Making pubfiles

Within your CLI the command `make` will build the pubfile to to ./out/raw folder.

`make all` will build every pubfile, you can specify a specific publisher folder or pubfile to build using `make "publishername"`  or `make "sectionID"`  e.g. `make 1xl`, `make 124015`.

Adding `-min` will minify/gzip the file ready to deploy e.g. `make all-min` or `make 124015-min`.

Any errors found during making will be output, so check your code.

`make clean` will remove all made files from your area, do this before you make/deploy changes to dependancies.

## Deploying

To deploy a pubfile to the CDN use the command `bin/deploy "sectionID/publisherName/all"`

This will make the files if not done already and prepare them for deploy, the script will prompt you for input on which files to deploy and where to deploy them.

## Mass Dependecy Deploys

To add a dependecy reference to multiple sections you can use the following command: `./bin/deps add ../../../kwfilters/yourfile.js`

You just need to replace _yourfile.js_ with whichever dependency reference you want to include and then add the section IDs after like so: `./bin/deps add ../../../kwfilters/adzerkOnly.js 000123 000234 000345`

You can also remove a dependency reference from multiple sections with a similar command: `./bin/deps del ../../../dep/adzerkOnly.js 000123 000234 000345`

## How to create your own version of a branch/repository

In most cases, we'd pull a branch/repository from BitBucket when we want to test a new feature or a change to the way our current technology works. Most likely Cata will have a branch already created for this so we only need to worry about pulling the files into our area.

To start this, we'd create a new directory in our tech ops area through your CLI, this can be done using the mkdir command. To check that we've created the directory we can use the ls(LS) command to show the current folders in the directory we're currently accessing in your CLI.

Then navigate into the new directory and create instance of git. by using the git init command, this command creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files. An initial HEAD file that references the HEAD of the master branch is also created.

We can now clone the repository we'll be using for testing; in the same directory we just ran the git init command.

To do so, navigate to the overview page of the repository you would like to clone and copy the string shown after clicking the clone button around the top right corner of the page, you should have the SSH option selected by default.

You can then use the git clone command followed by the string you've just copied to clone the repository into the directory you've made:

Once you hit enter, the directory will be populated with all the files from the pubfiles repository. Once that's finished we'll want to make/minify all files in the repository just to ensure the files we've pulled are ready for use.

## Using a repository for testing

Once you have created the new repository, you can use the BASE_URL parameter to map the tag/integration to the branch files.

To do so, you add this parameter to the integration file, ad tag or as a query string in the URL. For example, I have a custom version of the ISFE files for a new feature, I can use this parameter to test it.

Files must be made/minified before you will be able to use them, once you have done so you will find a new folder named "min" which will have the amalgamated files inside, this is the folder you will want to point the BASE_URL parameter towards.

Example - BASE_URL: "http://techops.inskinmedia.com/~dsofowote/dummybranch/isfe/out/min"

## Adjusting integration.params Parameters during the ad call

If we ever need to adjust a parameter inside the integration.params obj we have a specific event to do so.

The `parameterSet` event will allow you to do things like adjust the content width before the ad call incase we want to set different values for multiple layouts.

If you wanted to do this for example, you would set `integration.params.plr_contentW` to whatever content width desired. This also means that we can dynamically set the width of our skin now.

Please note that jQuery _is not_ enabled at the point this event is fired so any code will need to be written in plain javascript only.

## GIT Tricks

_Removing files creating a clash_

If you ever need to remove a change you made on your local area to pull from our repo (Remember that your local version will be lost when you do this), you just need to do the following:

* Run the reset command followed by the file path of what needs to be removed from your staging area like so: `git reset src/code/1xl/000000/`
* Then run a git checkout command in the same manner: `git checkout src/code/1xl/000000/`
* Once you've done this you should be able to pull from the repo without any clashing.
