# What's there to do around here?

1. [x] Create and style some buttons.
2. [ ] Finish up, and create and style scenes.
3. [ ] Adding the functionality


### 1. Create and style some buttons

#### Where? 
`index.html` & `css/style.css`

#### What?

Create and style buttons for the phone app, the mail app,
and the mocha app.

The buttons to implement should be inserted inside the `#home-screen` div
container. I have already added a button for the messages app, use this
for reference.

Notice the class and id of the messages button. We'll use the same class for each button, 
but have them each have a unique ID.

There is also a `CSS` rule for the messages button, use this one as
reference.

#### Notes:

The positioning of the buttons should be set using `%`. This is so that
no matter how big or small the user's screen is, the buttons will always be the same size relative to the image of the phone.

Take a look at the `CSS` rule for the `.interactive` div.
Notice the clever (toot toot) use of the `vmin` unit, to set
the width and height of the object. The `vmin` unit refers to either the viewport width, or the viewport height, whichever is 
smallest. It is used as a percent, where `100vmin` is 
`100%` of the height or the width of the screen (a.k.a viewport)
whichever is smallest. There is also `vmax` which is like `vmin`
but the bigger size instead of the smallest.

Also notice the `CSS` rule for the `.home-screen-button` buttons.
Note two cool preperties: `opacity` & `transform`.

 `opacity` takes
a number between 0 and 1, which represents how opaque the
element is, where `1` is the button is completely visible
and `0` where the object is invisible.

Note tho that `display:none` and `opacity:0` are different,
where `display:none` makes it so that the element is 
not displayed at all, it is basically treated as if it was a comment, and `opacity:0` simply makes it transparent, but still
present. 

`transform` is used to transform the element in various ways, in the
case of the `.home-screen-button` I rotate it using the `rotate` option.

### 2.1. Finish up text home scene 

#### Where?
`css/style.css`

#### What?

Finish up by styling the text home `#spam-text` button.

Use the `#home-screen` as reference.


### 2.2. Create and style scenes

#### Where?

`index.html` & `css/style.css`

#### What?

So far we have set up the title, the sleep, the awake, and the 
home screen. Now we need to create the Email Home, and the Incoming Call interactive scenes.

By interactive I mean that the user must click on 
some button located within the scene.

Use the `#home-screen` div as reference, as well as
it's corresponding `CSS` rules.

Also use the already declared css class `.interactive` 
for those scenes.


### 3. Adding functionality

TBD