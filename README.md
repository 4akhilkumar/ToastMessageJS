# ToastMessageJS
Toast Messages using Vanilla JavaScript and CSS

## Simple Integration ToastMessageJS
### Import *Google Icons*, *Toast Javascript* and place it in head of your HTML file
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://cdn.rawgit.com/4akhilkumar/ToastMessageJS/master/toastmessage.js" defer></script>
```
### Use generateToast to display the message
```
<script>
  generateToast({
    status: 'success', // 'error' or 'info' or 'warning'
    message: "Ya sure about that? Ya sure about that?",
  });
</script>
``` 
___

## npm Integration [ToastMessageJS](https://www.npmjs.com/package/toastmessage-js)
### Import *Google Icons* and place it in head of your HTML file
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
### Installation
```
npm i toastmessage-js
```

### Use generateToast to display the message
```
import { generateToast } from 'toastmessage-js'

generateToast({
  status: 'success', // 'error' or 'info' or 'warning'
  message: "Ya sure about that? Ya sure about that?",
});
``` 

### Using [Parcel](https://www.npmjs.com/package/parcel) 
1.  ```
    npm install parcel -g
    ```
2. Create a HTML (`index.html`) and JavaScript(`index.js`) files
3. Follow [npm Integration](#npm-integration-toastmessagejs) upto [Installation](#installation)
4. In `index.js` write the code which is in [Use generateToast to display the message](#use-generatetoast-to-display-the-message)
5. Import `index.js` in `index.html` with `type="module"`
    ```
    <body>
      <script type="module" src="index.js"></script>
    </body>
    ```
6.  ```
    parcel index.html
    ```

### Output
![ToastMessageJS](https://raw.githubusercontent.com/4akhilkumar/ToastMessageJS/master/Screenshot%202022-06-20%20141141.jpg "ToastMessageJS")

### Reference
[Simple Toast Message (Vanilla JavaScript and CSS)](https://www.youtube.com/watch?v=EWveKYaX-P0)  

[Writing & Publishing your First NPM Package!](https://www.youtube.com/watch?v=4zzbNac6f6Q)