# react-spit
Easy data handling in react.

A library with the advantages of react-redux but less boilerplate code. 

## Getting started
Create a basket for your data (CatsContainer.jsx):

```
import { Event, Spit } from 'react-spit';

export const catEvent = new Event([], 'cats');

export default Spit(catEvent);
```

This creates you an Event and a Container for your data. In this example is this an Array of cats.
The `new Event([], 'cats')` creates an Event, this is used for handling new incoming data.The first param of the constructor is the initial Value, your container will have. The second is an identifier. This is mostly used for ServerSide rendering or for debugging causes. More on this later.

The newly created file provides a container. To use it (Animals.jsx):
```
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

```
import CatContainer from './CatContainer';

<CatContainer>
  {({ set }) => (
    <button onClick={() => set(['carla', 'fred'])}>Set cats</button>
  )}
</CatContainer>
```

This will set your cat data globally. You have always the same data available. A single source of truth.
