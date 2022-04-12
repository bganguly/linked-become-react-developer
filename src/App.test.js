import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nothing when login is not provided', () => {
  render(<App login='bganguly'/>);
  // screen.debug()
  // in the fetch pending state- h1 with loading.. is visible
  const linkElement = screen.getByText('load', 
    {exact: false});
  // console.log("linkelement :",linkElement)
  expect(linkElement).toBeInTheDocument();
});
