import React from 'react';

export type Theme = 'dark' | 'light';

export type HandleChangeThemeType = (value: Theme) => void;

export type useThemeReturn = [Theme, HandleChangeThemeType];
