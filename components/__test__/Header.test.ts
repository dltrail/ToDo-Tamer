import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import Header from './Header.vue'; // Adjust the import based on your file structure

describe('Header', () => {
  it('renders the header with correct content', () => {
    const { getByRole, getByText } = render(Header);

    // Check if the header is rendered
    const header = getByRole('banner');
    expect(header).toBeInTheDocument();

    // Check if the h1 and p elements have the correct content
    const heading = getByText('Todo Tamer');
    expect(heading).toBeInTheDocument();

    const paragraph = getByText('Wrangle Your To-Do List Like a Pro!');
    expect(paragraph).toBeInTheDocument();
  });
});
