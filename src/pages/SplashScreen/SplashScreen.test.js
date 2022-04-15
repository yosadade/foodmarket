import {render, screen} from '@testing-library/react-native';
import SplashScreen from './index';
import React from 'react';

describe('Testing untuk seluruh App saat pertama render', () => {
  it('Memastikan kontent text P sesuai saat pertama render', () => {
    render(<SplashScreen />);
    const textP = screen.getByText('Saya sedang Sembunyi');
    expect(textP).toBeInTheDocument();
  });
  it('Memastikan kontent button sesuai saat pertama render', () => {
    render(<SplashScreen />);
    const textBtn = screen.getByText('Munculkan');
    expect(textBtn).toBeInTheDocument();
  });
});
