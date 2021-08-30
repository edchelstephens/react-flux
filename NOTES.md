# JSX compiles down to a tree of reactCreateElement calls.

## You can only have one top level function

## e.g. use a div to wrap h1's, p's.

## if you do have h1 and p but no top component, this will cause an error

## there should be only one top-level function,

## what you can do is wrap the two elements under a div, for the top level function

## or use a react fragment.
