# Running the Project
## Install dependencies
```
$ npm install
```
## Run the development server
```
$ npm run start
```
## Build the package
```
$ npm run build:widget
```
## Run Tests
```
Thêm đoạn script vào trước </body>
```
## Add script in website
```html
       <script>
        (function (w, d, s, o, f, js, fjs) {
            var elemDiv = document.createElement('widget-sample');
            elemDiv.setAttribute("name",'trieu')
            d.body.appendChild(elemDiv);
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'w1', './widget-sample.js'));
    </script>
```
### Structure of project
