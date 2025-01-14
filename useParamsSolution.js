Instead of directly using `useParams()` in a custom hook or outside a route component, pass the necessary parameters from the route component as props to the custom hook or other component. This ensures that the data is passed correctly and avoids the error. 

```javascript
// useParamsSolution.js
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  return (
    <div>
      <h1>Product ID: {params.productId}</h1>
    </div>
  );
}

export default function MyComponentWrapper(){
  return (
    <MyComponent/>
  );
}
```

```javascript
//App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyComponentWrapper from './useParamsSolution';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:productId" element={<MyComponentWrapper/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```