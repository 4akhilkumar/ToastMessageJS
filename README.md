# ToastMessageJS
Toast Messages using Vanilla JavaScript and CSS

## Integrate ToastMessageJS
### Import *jQuery-3.6.0, Google Icons* and place it in head of your HTML file
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```
### Import *Toast Javascript* and place it in body of your HTML file
```
<script src="https://cdn.rawgit.com/4akhilkumar/ToastMessageJS/master/index.js"></script>
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
![MarineGEO circle logo](https://raw.githubusercontent.com/4akhilkumar/ToastMessageJS/master/Screenshot%202022-06-20%20141141.jpg "ToastMessageJS")

### Reference
[Simple Toast Message (Vanilla JavaScript and CSS)](https://www.youtube.com/watch?v=EWveKYaX-P0)