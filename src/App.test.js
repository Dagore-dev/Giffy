import { render, waitForElement } from '@testing-library/react';
import App from 'App';

test('Home works', async () => {
  const { container } = render(<App />)
  const gifLink = await waitForElement( 
    () => container.querySelector('.gif') 
  )

  expect(gifLink).toBeVisible();
});
