# Last little bit

We are basically done here! Now we just need to do some thorough testing, by using the game as if you were trying to break it, we also need to go over each explanation message and make sure it makes sense and looks good. Lastly there is two animations that would be cool if we implemented them.

## 1. Test Test Test

For this part, each one of us should go thorough the game and look for anything that bugs you, if something bugs you feel free to fix it or let the group know and one of us will fix it.

## 2. Explanations

We need to touch up our explanations. We should use css and header blocks to make a better structure of them. It's not a lot but it will make it look way more decent.

## 3. Final animations

I present to you: two last coding challenges for this project:

- Animating the mocha shell
- Animating the call elipsis

### Animating the mocha shell


**This all takes place at `Scenes/Mocha.js`**

For the mocha scene, I added a div that we will use as our shell, it will use two animations: 

- Animating the command 
- Animating the cursor


#### Animating the command


The idea is to get the command `ssh mocha` animated as if the user
typed it. 


I have already declared a function for you to use:

```
// Animate the typing of the command COMMAND
//
// onFinish will be called when animation is complete
//
function typeCommand({ onFinish }) {

}
```
Note that the function takes a Json object as a parameter, and
that Json object has a key called `onFinish`. This is a function 

that you must call when the animation is complete and `FINAL_PAUSE` millisecods have passed/



I also declared a few constants for you to use:

```
const COMMAND = "ssh mocha"
const TIME_BETWEEN_CHARS = 200 //ms
const FINAL_PAUSE = 400 //ms
```

As well as a JQuery object for the HTML element:

```
const command = $("#shell-command")
```


What we want is to change the content of our `command` element, one character at a time, until it has the full `COMMAND`, it'l look like this sequence:

- s
- ss
- ssh 
- ssh 
- ssh m
- ssh mo
- ssh moc
- ssh moch
- ssh mocha

And we want to wait a total of `TIME_BETWEEN_CHARS` between each character.


##### How??????

You need to get each character, of the string `COMMAND`, to print after TIME_BETWEEN_CHARS has passed. A great tool to establish this is `setTimeout`, you would want to 
create a timeout for each character being added on to the command 
element. 

###### How to loop through each character?

JavaScript strings are index accessible, that means string are like arrays, I can select
a specific char of a string `str` by typing `str[0]` (in this case I am selecting the first character of string `str`). I can also get the length of the string like this `str.length`


JavaScript strings also have [a few prebuilt methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) that you can use. For this particular challenge I would recommend using
`str.substr(start, end)` You can find how to use it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr). 

###### How do I get it to show on the html?????????

For that you can use JQuery's `text` function. It works like this:
```
$(".my-class").text("This text will replace the contents of the element with a class my-class")
```

###### Ok, but how do I get each one to print one after the other??

For that you can to use the `setTimeout` function just right.

`setTimeout` take a function as an argument along with a number.

```
// Code out here will be executed immideatly
setTimeout(function() {
	// This code will be executed
	// After 400 millisecods
},400)
// Code out here will be executed immideatly
```

The number represents the time in millisecods that the browser will wait before executing the function passed. Note that `setTimeout` does not block
the execution of code, this means that whatever code you have after your call to `setTimeout` will be executed right after the call to `setTimeout`; it will not wait at all.


You'll want to loop through each character of the `COMMAND` string, for each character you will call a timeout using `setTimeout`. The function you pass will print up to the nth character of the string `COMMAND` (use  loop variable) and `String.substr`. 



##### I need help

Let me know, I can provide assistance :)

#### Animating the cursor


This is a little easier, all you gotta do it get the cursor to 
blink a couple times, and that's it.


I added a function for you to use:
```
// Make the cursor blink a couple times
//
// onFinish will be called when animation is complete
function blinkCursor({ onFinish }) {

}
```

Also some constants
```
const TIME_BETWEEN_BLINK = 300 //ms
```

As well as a Jquery object:
```
const cursor = $("#shell-cursor")
```

Your goal is to make the cursor blink two or three times, then call `onFinish`.

##### Okay but how?

You can use a similar technique for the animating the command, except this 
time you are not changing the content of the cursor, rather you are going
to make it invisible, then visible, then invisible, then visisble

You can also use a loop for this, as well as `setTimeout`. Use Jquery's `addClass` to set the visibility of the element (you can use the hidden class)


### Animating the call elipsis

This takes place at `PhoneCall.js`


This is a small animation that will add a little spice to our game. The point is to get the elipsis of the phone call conversation to loop the colored dot.

This one is a little different because you are implementing a class function. It is not much different than a regular function, but you get to use `this`.

The function you will implement is `elipsisInterval`, this function will
be called every `const ELIPSIS_LOOP_TIME = 100`.


I have made a skeleton of the function already:
```
// Animate elipsis
// 
// This function is ran every ELIPSIS_LOOP_TIME milliseconds	
elipsisInterval() {
	const elipsis_element = $(".elipsis")
	const elipsis_dot = $(".elipsis-dot")

}
```

I already implemented the code so that the function `elipsisInterval`
gets called every `ELIPSIS_LOOP_TIME` when the dialog is complete and the user hasn't clicked any of the options.


Note the two Jquery objects already declared in the function. 
The elipsis html is this:

```
<span class="elipsis-dot elipsis-dot-0">.</span>
<span class="elipsis-dot elipsis-dot-1">.</span>
<span class="elipsis-dot elipsis-dot-2">.</span>
```

There is also a global variable called `current_dot`, which is initialized to `0`. Access it using `this.current_dot`.

basically the function `elipsisInterval` will make it so that 
the current dot (a.k.a `this.current_dot`) will be the only dot
that is blue, the function will also set `this.current_dot` to the
next dot at the end of the function.


#### Need some help?

Ask me cause I can help