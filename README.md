# react-spit
Easy data handling in react.

A library with the advantages of react-redux but less boilerplate code. 

## Getting started
Create a basket for your data (CatContainer.jsx):

```js
import { SpitEvent, Spit } from 'react-spit';

export const catEvent = new SpitEvent([], 'cats');

export default Spit(catEvent);
```

This creates you an Event and a Container for your data. In this example is this an Array of cats.
The `new SpitEvent([], 'cats')` creates an Event, this is used for handling new incoming data.The first param of the constructor is the initial Value, your container will have. The second is an identifier. This is mostly used for ServerSide rendering or for debugging causes. More on this later.

The newly created file provides a container. To use it (Animals.jsx):
```js
import CatContainer from './CatContainer';

<CatContainer>
  {({ data }) => (
    data.map(cat => (
       <div>{cat}</div>
    ))
  )}
</CatContainer>
```
So this is basically it. You can use this container everywhere you want to have your cat data.
You can use the same container to set the data:

```js
import CatContainer from './CatContainer';

<CatContainer>
  {({ set }) => (
    <button onClick={() => set(['carla', 'fred'])}>Set cats</button>
  )}
</CatContainer>
```

This will set your cat data globally. You have always the same data available. A single source of truth.

Any call of the set function will trigger your CatContaier to re-render.

### Google Chrome Extension

Get your Google Chrome extension here:
[Chrome Web Store](https://chrome.google.com/webstore/detail/react-spit/mcpbgkidiieiedcgmpbajcmigjkpknep). With the Extension you can analyse the different Containers and their versions.


## Advanced Usage

In most cases, setting any data is not as simple as the first use case. If you like to fetch any data for example its more complex.

### Fetch data
The easiest way would be to just create a new function in a new file, import the cat event, set the data on `fetch.then` and use this function 
in componentDidMount (fetchCatsAction.js):
js
```
import { catEvent } from './CatContainer';

export default async () => {
    const result = await fetch('cats.json');
    const json = await result.json();
    catEvent.set(json);
};
    
```

This could be called in any componentDidMount:

```js
import fetchCats from './fetchCatsAction';

...

componentDidMount() {
    fetchCats();
}
    
```

In fact that the Event triggers all the containers, everywhere you use a cat container, it will be updated.
But this code example cant only used once and is not really good testable.

So i prefer to wrap the function to have a dynamic function (fetchCatsAction.js):

```js
export default event => async () => {
    const result = await fetch('cats.json');
    const json = await result.json();
    event.set(json);
};
    
```

The connection between the action and the event can now be established in the view (Cats.jsx):
```js
import { catEvent } from './CatContainer';
import fetchCatsAction from './fetchCatsAction';

const fetchCats = fetchCatsAction(catEvent);

...

componentDidMount() {
    fetchCats();
}
    
```
