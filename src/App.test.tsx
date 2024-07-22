import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock the axios module
jest.mock('axios');

// Define the type for your mock data
interface MockData {
  fonts: {
    [key: string]: {
      [weight: string]: string;
    } | { [weight: string]: string }[];
  };
  selected: {
    [weight: string]: string;
  };
}

// Define mock data with updated font names
const mockData: { [key: string]: MockData } = {
  case1: {
    fonts: {
      'Roboto': {
        '500': 'Roboto Regular, Weight 500, Italic true',
      },
      'Arial': [
        { '100': 'Arial Regular, Weight 100, Italic true' },
        { '500': 'Arial Regular, Weight 500' },
        { '600': 'Arial Regular, Weight 600' },
      ],
    },
    selected: { '100': 'Arial Regular, Weight 100, Italic true' },
  },
  case2: {
    fonts: {
      'Roboto': {
        '500': 'Roboto Regular, Weight 500, Italic true',
      },
      'Arial': [
        { '400': 'Arial Regular, Weight 400' },
        { '600': 'Arial Regular, Weight 600' },
      ],
    },
    selected: { '400': 'Arial Regular, Weight 400' },
  },
  case3: {
    fonts: {
      'Roboto': {
        '500': 'Roboto Regular, Weight 500',
      },
      'Arial': [
        { '500': 'Arial Regular, Weight 500' },
        { '500-italic': 'Arial Regular, Weight 500, Italic true' },
      ],
    },
    selected: { '500': 'Arial Regular, Weight 500' },
  },
  case4: {
    fonts: {
      'Roboto': {
        '500': 'Roboto Regular, Weight 500',
      },
      'Arial': [
        { '500-italic': 'Arial Regular, Weight 500, Italic true' },
        { '100': 'Arial Regular, Weight 100' },
      ],
    },
    selected: { '100': 'Arial Regular, Weight 100' },
  },
};

// Configure axios mock
(axios.get as jest.Mock).mockImplementation((url: string) => {
  switch (url) {
    case '/api/fonts/case1':
      return Promise.resolve({ data: mockData.case1 });
    case '/api/fonts/case2':
      return Promise.resolve({ data: mockData.case2 });
    case '/api/fonts/case3':
      return Promise.resolve({ data: mockData.case3 });
    case '/api/fonts/case4':
      return Promise.resolve({ data: mockData.case4 });
    default:
      return Promise.reject(new Error('Not Found'));
  }
});

test('renders and interacts with the App for case1', async () => {
  render(<App />);

  // Wait for elements to appear
  await waitFor(() => {
    expect(screen.getByLabelText('Font Family')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Font Variant')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Italic')).toBeInTheDocument();
  });

  // Interact with the form
  fireEvent.change(screen.getByLabelText('Font Family'), { target: { value: 'Roboto' } });
  fireEvent.change(screen.getByLabelText('Font Variant'), { target: { value: '500' } });

  // Check the values
  expect(screen.getByLabelText('Font Family')).toHaveValue('Roboto');
  expect(screen.getByLabelText('Font Variant')).toHaveValue('500');
});

// Add additional tests for the other cases as needed
test('renders and interacts with the App for case2', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByLabelText('Font Family')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Font Variant')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Italic')).toBeInTheDocument();
  });

  // Interact with the form
  fireEvent.change(screen.getByLabelText('Font Family'), { target: { value: 'Roboto' } });
  fireEvent.change(screen.getByLabelText('Font Variant'), { target: { value: '500' } });

  // Check the values
  expect(screen.getByLabelText('Font Family')).toHaveValue('Roboto');
  expect(screen.getByLabelText('Font Variant')).toHaveValue('500');
});

test('renders and interacts with the App for case3', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByLabelText('Font Family')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Font Variant')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Italic')).toBeInTheDocument();
  });
  console.log('Font Family Element:', screen.getByLabelText('Font Family'));
  console.log('Font Variant Element:', screen.getByLabelText('Font Variant'));

  // Interact with the form
  fireEvent.change(screen.getByLabelText('Font Family'), { target: { value: 'Roboto' } });
  fireEvent.change(screen.getByLabelText('Font Variant'), { target: { value: '500' } });

  // Check the values
  expect(screen.getByLabelText('Font Family')).toHaveValue('Roboto');
  expect(screen.getByLabelText('Font Variant')).toHaveValue('500');
});

test('renders and interacts with the App for case4', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByLabelText('Font Family')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Font Variant')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByLabelText('Italic')).toBeInTheDocument();
  });

  // Interact with the form
  fireEvent.change(screen.getByLabelText('Font Family'), { target: { value: 'Roboto' } });
  fireEvent.change(screen.getByLabelText('Font Variant'), { target: { value: '500' } });

  // Check the values
  expect(screen.getByLabelText('Font Family')).toHaveValue('Roboto');
  expect(screen.getByLabelText('Font Variant')).toHaveValue('500');
});
