# Memecoin Website Template

A modern, responsive, and highly customizable template for memecoin projects built with Astro and Tailwind CSS.

## Features

- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎨 **Beautiful Design** - Modern gradient-based design with animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Easy Customization** - JSON-based configuration system
- 🚀 **SEO Optimized** - Built-in meta tags and Open Graph support
- 🎭 **Memecoin Ready** - All essential sections included

## Sections Included

- **Hero Section** - Eye-catching landing with token info
- **Contract Address** - Secure contract display with copy functionality
- **Tokenomics** - Visual breakdown of token distribution
- **Roadmap** - Interactive timeline of project milestones
- **Social Links** - Community platform integration
- **Footer** - Complete site information and links

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Customize Your Token**
   Edit `src/config/site.json` with your token information:
   ```json
   {
     "site": {
       "title": "YOUR TOKEN NAME",
       "description": "Your token description"
     },
     "token": {
       "name": "YOUR TOKEN",
       "symbol": "$YOUR",
       "contractAddress": "0x...",
       "network": "Ethereum"
     }
   }
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Colors and Theme
Modify `tailwind.config.mjs` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
All content is managed through `src/config/site.json`. Update:
- Site metadata
- Token information
- Tokenomics breakdown
- Roadmap phases
- Social media links

### Components
Each section is a separate Astro component in `src/components/`:
- `Hero.astro` - Main landing section
- `ContractAddress.astro` - Contract display
- `Tokenomics.astro` - Token distribution
- `Roadmap.astro` - Project timeline
- `SocialLinks.astro` - Community links
- `Footer.astro` - Site footer

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The template generates static files that can be deployed anywhere.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for your memecoin projects!

## Support

For issues and questions, please check the documentation or create an issue in the repository.

---

**Disclaimer**: This template is for educational and entertainment purposes. Always do your own research before investing in any cryptocurrency project.
