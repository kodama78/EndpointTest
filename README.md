### Endpoint Directory Creation Test

#### Using javascript
- Will look to create a function that'll run off a single command
    - function will need be in OOP and need to have these defined methods
        - Create - loop through arguments, arguments must be passed in nesting order, arguments can be unlimited 
        - List - console.log
        - Move - will split the location string and split the destination string on `/`. It should then use `create()` to put the
        key into the new directory and use `delete()` to remove it 
            
        - Delete - Will loop through array from string split and find the key in the key in the object and then reduce the array, when
        length is zero it will grab that key and delete it
        
        
#### Thoughts
- Create a single function that contains a list of inputs and performs the actions for each one
         https://codepen.io/anon/pen/ZNJKQo?editors=1011 