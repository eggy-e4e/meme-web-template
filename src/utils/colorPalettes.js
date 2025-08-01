// Color palette templates for dynamic theming
export const colorPalettes = {
  // Fire theme - Orange/Red (default)
  fire: {
    primary: '#ff6b35',
    secondary: '#f7931e', 
    accent: '#ff4444',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    border: '#ff6b35',
    hover: '#ff8c5a'
  },
  
  // Ocean theme - Blue/Cyan
  ocean: {
    primary: '#00d4ff',
    secondary: '#0099cc',
    accent: '#66e0ff',
    background: '#0a0a0a',
    surface: '#1a1a1a', 
    text: '#ffffff',
    border: '#00d4ff',
    hover: '#33ddff'
  },
  
  // Forest theme - Green/Lime
  forest: {
    primary: '#00ff88',
    secondary: '#00cc6a',
    accent: '#44ff99',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff', 
    border: '#00ff88',
    hover: '#33ff99'
  },
  
  // Purple theme - Purple/Pink
  purple: {
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#c084fc',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    border: '#8b5cf6', 
    hover: '#a78bfa'
  },
  
  // Gold theme - Yellow/Gold
  gold: {
    primary: '#fbbf24',
    secondary: '#f59e0b',
    accent: '#fcd34d',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    border: '#fbbf24',
    hover: '#fcd34d'
  },
  
  // Neon theme - Pink/Cyan
  neon: {
    primary: '#ff0080',
    secondary: '#00ffff',
    accent: '#ff4da6',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    border: '#ff0080',
    hover: '#ff33a6'
  }
};

// Get color palette by name
export function getColorPalette(paletteName) {
  return colorPalettes[paletteName] || colorPalettes.fire;
}

// Generate CSS custom properties for the palette
export function generateCSSVariables(palette) {
  return `
    :root {
      --color-primary: ${palette.primary};
      --color-secondary: ${palette.secondary};
      --color-accent: ${palette.accent};
      --color-background: ${palette.background};
      --color-surface: ${palette.surface};
      --color-text: ${palette.text};
      --color-border: ${palette.border};
      --color-hover: ${palette.hover};
    }
  `;
}
