import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

test('Loading component has text in it', () => {
  render(<Loading />);
  const loadingText = screen.getByText('Data is loading... Please wait');
  expect(loadingText).toBeInTheDocument();
});
