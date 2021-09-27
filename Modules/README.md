# SPACE-Modules

#### Welcome to the Space framework, it changes everything about how we see basic html programs.

#### This repo is about Modules designed for the [S.P.A.C.E.](https://github.com/n-ce/SPACE) framework.

#### Site running at https://n-ce.github.io/SPACE/

## Add your own Modules! Instructions below:
- 2 files to create and 1 file to change
- create "yourModuleName.html" inside Apps folder.
- create "yourModuleName.js" inside Apps folder.
- edit file "Apps.html".

### What should my HTML file contain?
- This code snippet on top
```
<span>
  <button onclick="fetchHtml('Apps')">Back</button>
  <header>&nbsp;yourModuleName by <a href="your github profile link">yourName</a></header>
</span>
```

- No body,html,head,script tags.
- No scriptsrc tag required, SPACE does the work for you.
- only put html that you would put inside your body tag in your projects.
- always use id/class for all the elements.
- id/class naming scheme example for "yourModuleName" - "#yMNbody","#yMNdiv",".yMNbody".
- Incase its not clear refer the other apps already available.

### What should my JS file contain?
- same as any js file

### What to edit in Apps.html?
- Add this code inside ul tag
```
<li onclick="fetchHtml('Apps/myModuleName')">My Module Name</li>
  
