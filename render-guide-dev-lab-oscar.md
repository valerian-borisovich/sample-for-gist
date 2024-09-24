# a step-by-step guide on deploying web apps via render
## by Johnathon Barnes, Hau Huynh, and Cody McDonald

- Render is a cloud based (PaaS) platform as a service that tries to be as developer-friendly as possible. You can deploy almost anything to Render, some examples would be Web Apps, static websites , APIs, private servers and many other deployables. 
- You can deploy to the cloud straight from GitHub or GitLab using render. Render starts at the low price of free then the price increases with more RAM and CPU space. 

 

#### Render is extremely easy to get started using and this quick easy to use guide will get your first website up and running on their cloud services straight from your GitHub repo!


1. Create your GitHub repository:
- For this guide, we will be using github to host our code for the webpage.
- To start, create a new repo, name it whatever you like, in our case [sample-for-gist](https://github.com/cmcdonald6/sample-for-gist).
- When prompted for a **.gitignore**, select **Node**.

2. Install Node.js:
- Node is used to set up the webserver for the app, we use it on our devboxes to test our webapps locally before deploying them online.
- [Download node here](https://nodejs.org/en/) **be sure you choose the version with LTS**
- run the .msi file to install (follow the steps on the setup wizard).

3. Write your code:
- *author's note: we copied code from one of our [existing repos](https://github.com/cmcdonald6/potential-parakeet) for this, for your purposes, you will be essentially starting from scratch, we will include snippets of code to show our process.*
- For this guide, we will be using Visual Studio Code, so type in vscode in your searchbar and open the app.
- Use **Ctrl+`** to open the console (If you're using windows, be sure to use the dropdown menu to switch from Powershell to Git Bash)
- Verify node installation with this command:
```bash
node -v
```
- clone into your repository with this command (replace link to our repo with the link to your own repo):
```bash
git clone https://github.com/cmcdonald6/sample-for-gist.git
```
- change your directory to where your repo was cloned onto your devbox:
```bash
cd sample-for-gist/
```
- start by creating an file named **app.js**
```bash
touch app.js
```
- the following is our code for this example
```javaScript
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello from Group 2!!')
})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)

```
- We want to install express. To quote a [simplilearn.com article](https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js#:~:text=Express%20is%20a%20node%20js,helps%20manage%20servers%20and%20routes.),
> Express is a node js web application framework that provides broad features for building web and mobile applications.
- Use this command to install express.
```bash
npm i express
```
- You should notice the creation of two new files, **package.json** and **package-lock.json**
- Test your web app, because it would be a shame to get to the end of this guide just for your app to not work. To test, enter this command into bash:
```bash
node app.js
```
- Click allow access on the windows security alert window, then you can see that it worked by entering localhost:PORT into your web brower of choice (replace PORT with the number specified in your app.js, in our case, 3000).
- Once you verify that it works, you can close node by pressing **Ctrl+C** in bash. Now you should be ready to push your code to your repo.

3. Push your code to github.
- This step can be completed from your command line! Just enter the following commands into bash:
```bash
git status
git add .
git pull
git commit -m 'this will be the message you want to associate with any changes made to your code'
git push
```
- git push should prompt you to sign into github in a seperate window, please do so.
- now when you go to check your repo, it should be up to date!!

4. Sign up for render using your github account:
- Now you are ready to host your web app on render!
- Go to [render.com](https://render.com) and click sign in, on the sign in page click on the github icon to sign in with your github account.

5. Create a new web app:
- Click on the **New** button on the top of the render dashboard, from here, click on **Web Service** from the dropdown menu.
- The next page should bring up a list of your repositories on github, be sure to select the right one (e.g. sample-for-gist). 
- Create a name for your webservice. This will be the URL for your app, so it must be unique, we went with **dev-lab-oscar-cis486**.
- Most of the default settings should apply for most basic apps, however since we used node in this guide we will need to node for our start command on render, so fill in this prompt with this command:
```bash
node app.js
```
- Select the amount of memory required for your web app, for our purposes, the free one is just fine.
- Click create web service.
- You should be taken to a page that looks like this:![dashboard](https://user-images.githubusercontent.com/111534264/217953340-24a1e921-48c1-430a-b7b8-084c54ac2f2e.png)
- This is the console for your web app, you will need to wait a few moments for your app to finish deploying.
- You will know your app is ready when you see this indicator:
- ![live](https://user-images.githubusercontent.com/111534264/217953645-54b33ec8-1341-4849-8aff-93137e4902b3.png)
- Click on your [link](https://dev-lab-oscar-cis486.onrender.com) to verify that is successfully deployed.

6. Add your deployment to your repository:
- Click on the gear icon next to the About section on your github repo.
- In the textbox for **Website** enter the link from the render (in our case: https://dev-lab-oscar-cis486.onrender.com).
- Don't forget to Save changes!