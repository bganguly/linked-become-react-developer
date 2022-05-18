import { createRoot } from 'react-dom/client';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);

