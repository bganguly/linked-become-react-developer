import { fireEvent, render, screen } from '@testing-library/react';
import {Checkbox} from './Checkbox';

test('selecting checkbox', () => {
  render(<Checkbox />);
  // screen.debug()
  // in the fetch pending state- h1 with loading.. is visible
  const checkbox = screen.getByLabelText(/not checked/);
  fireEvent.click(checkbox)
  // console.log("linkelement :",linkElement)
  expect(checkbox.checked).toEqual(true);
});
