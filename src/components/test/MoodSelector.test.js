import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoodSelector from '../MoodSelector';
import { waitFor } from '@testing-library/react';

// Mock global.alert
window.alert = jest.fn();

describe('MoodSelector Component', () => {
  beforeEach(() => {
    // Clear the mock call history between tests
    window.alert.mockClear();
  });

  test('renders correctly with initial message', () => {
    render(<MoodSelector />);
    expect(screen.getByText(/Votre humeur aujourd'hui/i)).toBeInTheDocument();
    expect(screen.getByTestId('mood-display')).toHaveTextContent('Humeur : Non sélectionnée');
  });

  test('allows mood selection and updates display message', async () => {
    render(<MoodSelector />);
    // Select the "Heureux" mood
    fireEvent.click(screen.getByText('Heureux'));
    
    // Since the text content including "Humeur :" and the mood is in the same element with `data-testid="mood-display"`, use findByTestId
    const moodDisplay = await screen.findByTestId('mood-display');
    expect(moodDisplay).toHaveTextContent(/Humeur : Happy/i);
  
    // Select the "Triste" mood
    fireEvent.click(screen.getByText('Triste'));
    // Use findByTestId again to ensure consistency in how you're selecting the element
    await waitFor(() => {
      expect(moodDisplay).toHaveTextContent(/Humeur : Triste/i);
    });
  });
  

  test('submits the selected mood and calls alert', async () => {
    render(<MoodSelector />);
    // Select the "Heureux" mood
    fireEvent.click(screen.getByText('Heureux'));
    // Submit the mood
    fireEvent.click(screen.getByText('Soumettre'));
    // Check if alert was called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Merci pour votre soumission. Votre humeur actuelle est: Happy');
  });
});
