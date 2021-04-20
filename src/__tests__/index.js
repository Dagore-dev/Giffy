import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />)
  const title = await findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
});

test('Search form can be used', async() => {
  render(<App />)
  const input = await screen.findByRole('textbox');
  
  fireEvent.change(input, { target : { value: 'Matrix' } } );

  screen.debug();

  const title = await screen.findByText('Matrix');
  expect(title).toBeVisible();
})