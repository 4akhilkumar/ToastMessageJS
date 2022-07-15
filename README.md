# ToastMessageJS
Toast Messages using Vanilla JavaScript and CSS

## Integrate ToastMessageJS
### Import *Google Icons*, *Toast Javascript* and place it in head of your HTML file
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://cdn.rawgit.com/4akhilkumar/ToastMessageJS/master/toastmessage.js" defer></script>
```
### Use generateToast to display the message
```
<script>
  generateToast({
    status: <success, info, warning, error>,
    message: "Ya sure about that? Ya sure about that?",
  });
</script>
``` 

### Output
![ToastMessageJS](https://raw.githubusercontent.com/4akhilkumar/ToastMessageJS/master/Screenshot%202022-06-20%20141141.jpg "ToastMessageJS")

### Reference
[Simple Toast Message (Vanilla JavaScript and CSS)](https://www.youtube.com/watch?v=EWveKYaX-P0)