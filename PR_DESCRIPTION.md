# Fix Text Visibility in Hero Section for Light/Dark Modes

## Description
This PR fixes the text visibility issue in the Hero section where the text was not properly visible when switching between light and dark modes. The text color for "Innovation", "Learning", and "Collaboration" cards now properly toggles between black and white depending on the theme.

## Changes Made
- Updated text color classes in Hero.jsx for proper theme adaptation
- Added `text-gray-900` for light mode and `dark:text-white` for dark mode
- Applied changes specifically to the h3 elements for Innovation, Learning, and Collaboration cards

## Issue Fixed
Previously, the text in the Hero section cards was not clearly visible in light mode because it was using a white color that blended with the light background. This fix ensures proper contrast and visibility in both light and dark themes.