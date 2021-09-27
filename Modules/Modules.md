# Homepage Modules(Apps)

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

- No body, html, head, script tags.
- No script src tag required, linking is native.
- Only write html that you would put inside your body tag in your projects.
- Always use id/class for all the elements.
- id/class naming scheme example for "yourModuleName" - "#yMNbody","#yMNdiv",".yMNbody".
- In case it's not clear refer the other apps already available.

### What should my JS file contain?
- Same as any JS file

### What to edit in Apps.html?
- Add this code inside ul tag
```
<li onclick="fetchHtml('Apps/yourModuleName')">Your Module Name</li>
  
