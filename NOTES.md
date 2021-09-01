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

## useEffect -> runs immediately after each render

> allows us to handle side effects that need to occur eact time React renders
