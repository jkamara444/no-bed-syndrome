# No Bed Syndrome Educational Website

A clean, educational website about No Bed Syndrome with an interactive bed-themed landing page.

## Project Structure

```
├── index.html              # Main landing page with interactive bed illustration
├── styles.css              # Complete styling with soft neutral colors
├── script.js               # Interactive features and tooltips
├── sections/               # Individual section pages
│   ├── catalyst.html       # The Catalyst - Factors that trigger the crisis
│   ├── systematic-failures.html  # Systematic Failures - Structural healthcare issues
│   ├── stigma-stats.html   # Attitudes within Healthcare - Healthcare worker attitudes and biases
│   ├── brain-drain.html    # Brain Drain - Medical workforce shortages
│   └── gendered-violence.html  # Gendered Violence - Gender-based healthcare inequities
└── README.md               # This file
```

## Features

### Landing Page
- **Interactive Bed Illustration**: SVG-based bed viewed from above
- **5 Clickable Regions**: Each bed component links to a dedicated information page
- **Hover Effects**: Smooth highlighting and tooltip descriptions
- **Responsive Design**: Works on laptop screens and tablets
- **Clean Academic Style**: Soft neutral colors with subtle shadows

### Section Pages
- **Consistent Layout**: Each section follows the same template
- **Graph Placeholders**: 3 graph containers ready for Chart.js integration
- **Context Sections**: 2-3 paragraphs for detailed explanations
- **Easy Navigation**: Home button on every page

### Design Elements
- **Color Scheme**: White, light gray, soft blue accents
- **Typography**: Clean, academic font hierarchy
- **Animations**: Subtle hover effects and page load animations
- **Responsive**: Mobile-friendly design

## Customization

### Adding Charts
Each section page includes 3 graph placeholders ready for Chart.js integration:

```html
<div class="graph-placeholder">
    <!-- Replace with your Chart.js canvas -->
    <canvas id="chart1"></canvas>
</div>
```

### Modifying Content
- **Text Content**: Edit directly in HTML files
- **Styling**: Modify `styles.css` for color and layout changes
- **Interactive Elements**: Update `script.js` for new behaviors

### Adding New Sections
1. Copy an existing section page template
2. Update the title and content
3. Add the new section link to the bed illustration in `index.html`

## Technical Implementation

- **HTML5 Semantic Structure**
- **CSS3 with Flexbox/Grid**
- **Vanilla JavaScript (no frameworks)**
- **SVG Graphics for the bed illustration**
- **Chart.js Compatible** (ready for integration)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for tablets and laptops
- Graceful degradation for older browsers

## Usage

1. Open `index.html` in a web browser to view the landing page
2. Click on any bed component to navigate to that section
3. Use the Home button to return to the main page
4. Add your own charts and content as needed

The website is designed to be easily expandable with your own content while maintaining the clean, academic aesthetic.
