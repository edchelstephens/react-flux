# JSX compiles down to a tree of reactCreateElement calls.

## You can only have one top level function

## e.g. use a div to wrap h1's, p's.

## if you do have h1 and p but no top component, this will cause an error

## there should be only one top-level function,

## what you can do is wrap the two elements under a div, for the top level function

## or use a react fragment.

## If you want to use javascript inside of jsx use curly braces `{}` as in `{getPage()}`

## Remember jsx is not javascript, it's an xml-like syntax for abstracting createReactElement calls to somewhat of an html friendly form

## jsx transpiles to js

## if you want to use js in jsx, use `{}`

# Render occurs when props change or state change

# Class based components requires a render() function

# While function based components does not, whatever is in the return statement, is what gets rendered.

# render function should be pure. It should not modify state or directly interact with the browser.

### `|{" "}` - non breaking space in jsx

### e.g. `<a href="/">Home</a> |<a href="/about">About</a> |{" "} <a href="courses/">Courses</a>`

# React Hooks

## useState -> use to set state of function component with a returned state setter

> eg. const [email, setEmail] = useState("")

## useEffect -> runs immediately after each render, accepts the following arguments:,

## 1st, the function to call for the side effect,

## 2nd, the dependency array.

## You can also run code on unmounting by returning a function from useEffect.

### Dependency array is important because the effect re-runs only when any values listed in the dependency array change.

### If you forget the dependency array, the effect will run after every render.

> Think of the dependency array as the reasons why the effect should re-run later
> allows us to handle side effects that need to occur eact time React renders

# useEffect ~= componentDidMount + componentDidUpdate + componentWillUnmount

# Rules of Hooks

    1. Only call in React Function components
        - You cannot call hooks on class components nor on plain javascript
        - Must be called inside a React function component or our own custom Hook

    2. Hooks must be declared at the top level
        - Don't wrap in if statements, loops or functions
        - If you want the hook to run conditionally, put the condition inside the hook instead.

# In react, any time a state changes, the component re-renders.

# So when you use useEffect without the dependency array and when calling on api,

# use effect will call the api which will then set the state, which will then cause a re-render

# then cause a new useEffect call on the new re-render, which will then trigger the setState command and again cause the useEffect to run and calling again the setState which calls again useEffect - so it goes into an infinite loop because setState gets called on every render, since there was no specified dependency array.

# Controller View Component

    - A React component that has child components.
    - A top level react component
    - Controls the data flows for it's child components by setting props on it's child components
    - Controller views interact with Flux stores

# Two types of React components:

    Smart or Container Components
        - for components with logics that pass on props and controls to children components
    Dumb or Presentation Components
        - for pure markup

# Props on function components

    - all function components by default receive a props as their sole component
    - either declared or not:
        function CourseList()
        or
        function CourseList(props)

        both receive props emplicitly or explicitly

# Use `{}` to tell JSX that you're gonna use javascript in it

# on props, if you just want to pass strings to children, just use `""` same as html markup

# React Router Dom Route takes two arguments, the path and then the component to render if the path matches.

# When a path matches, the Route will always render the component along with the others,

# Route allows multi matching, so make use of exact for accuracy.

# Use exact on route for exact match. `<Route path="/" exact component={HomePage} />`

# Router in react is to UrlConf in python

# Route in react is to urlpatter in python, where for a certain url, there's a view,

# Likewise in React, for a certain url, you load a component

# Link offers an abstraction for anchor elements, for us to navigate our app with posting back to the server, reloading the browser to navigate the url

# React-router-dom's Switch component is similar to javascript, one case, or route should only match, so the order matters, must make the default the last Route component.

# Any component load by Ract Router's Route component receive a history object on it's props -> props.history

# Put specific routes above less specific routes

# Example:

      <Route path="/course/:slug" component={CoursePage} />
      <Route path="/course/"  component={ManageCoursePage} />

So that the specific `course/<slug>` can be matched and routed first, or else
if you don't put this order, every course/ pattern in the url will route to ManageCoursePage
This is a general note. One solution to this would be to use exact

# React Forms

# any `<input>` with a value set is a controlled component by React. It's value is set by react

# Elements value _always_ matches the value of the assigned prop

# You must declare a change handler to register the keystrokes

# if input doesn't have value or sets it to null, then it's uncontrolled

# The target property of the event object is always a reference to the element the event occurred upon.

# `[event.target.name]: event.target.value,` - [] here means computed property
