# GitHub Guide

![GitHub Guide](aa.png)

## Introduction
GitHub is a version control and collaboration platform used for hosting code. It allows and makes collaboration easy within teams or group of people across projects from anywhere around the world.

This guide gives the step by step guide on the essential usage of Github such as repository creation , branches creation, how to make a commit, how to make a pull request and how to clone an exisiting repository.  

In this GitHub guide, you will learn how to:

1. Install git locally
2. Create git repo locally
3. Create repository on github
4. How to make commits
5. How to push update to a repository

## Install Git Locally
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It gives you the power to create the local repo that can then be moved to the remote repo on GitHub.

To install git locally, follow this [link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) which comprises of the varios way to install it for different operating system.

## Create Git repo locally
To be able to use repository and exchange codes using GitHub with anyone across the world, there is need to first create the repo locally that will align and be with you, it is this repo that is later  push to github for other members of your team to collaborate on. TO create this repo, the steps are:
1. Open your bash environment or command prompt that allows you to run git code
2. Navigate to the root folder of your project
3. Write the following code:
 ```bash
git init
 ```
 4. This initiate your local repo and get it ready for other activty such as add and commit
 5. To specify the default branch name rather than using masters or main, use the code below instead:
  ```bash
git init -b branch_name
 ```
 This create the repository with the default branch of the name specified

## Create Repository on GitHub
A repository is like a file that is used to organize a single project and contains all the content of the project. Repositories can contain folders and files, images, videos, and any other thing your project needs. It also includes a readme file that contains the information to better understand the project, and how it works.

1. In the upper-right corner of any page, use the + drop-down menu, and select New repository.
2. In the Repository name box, enter the name of your project or repository.
3. In the Description box, write a short description about your project.
4. Select Add a README file if you want it included from scratch or uncheck it if you want to add it later.
5. Select whether your repository will be Public or Private. Private means the repo is not visible to people you do not authorize while public indicates anyone can see the project
6. Click Create repository.

After this your repository is created.


## How to make Commits
After creating a repo locally, the next thing is to add and commit your work to the repo locally before pushing the repo to GitHub. This add and commit needs to be done intermetently as any addition or substraction is done to any file or folder in the project folder. To commit your work, follow the below processes:
1. In your command line environment, navigate to the root folder of your project
2. Add all files in the project or add specific file that has undergo any changes or folder
  a. To add all files and folder, run the code:
  ```bash
git add .
  ```
  b. To add specific file, run the code:
  ```bash
git add file_name
  ```
3. Then commit all you have added after adding all the required files or folders by running the code
```bash
git commit -m "relevelant message relating to your commit"
```
The -m stands for message that is needed to accompany the commit and should be self explanatory. It is also best practice to commit jobs at small related intervals rather than once in a while big chunk commit.

## How to Push Commit from loca repo to Github Repo
After commiting your files to your repo locally, the next thing is to push your local repo to the github repo to make it available for other team member perusal. To push your code, follow the below processes:
1. Get the url for the github repository you are pushing your code to
2. Before pushing the code you need to register the remote url with your local repo by running the below code
```bash
git remote add origin remote_repo_url
```
where origin can be any name, but origin has become the custom and widely used name to indicate remote repo. But any other name can be sued
4. To push your code, run the below code in your command line environment
```bash
git push -u origin branch_name
```
The branch name is optional and indicated which branch you are pushing to. If ommited it will be pushed to the default branch
Your repository shoud then have all the local code you commited
