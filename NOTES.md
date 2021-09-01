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
