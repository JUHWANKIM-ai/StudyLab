# Deep Hedging Review - Interactive Presentation

A clean, interactive presentation-style webpage that summarizes Deep Hedging research content with professional design and interactive features.

## Features

- **5 Main Sections**: Introduction, Background, Method, Result, and Conclusion
- **Floating Sidebar Navigation**: Quick navigation across sections
- **Collapsible Sections**: Detailed explanations for complex topics (OCE, Convex Risk Measure, Market Impact, etc.)
- **Interactive Charts**: Visual comparisons using Chart.js
- **Mathematical Equations**: LaTeX rendering with MathJax
- **Tooltips**: Hover definitions for technical terms
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Styling**: Clean white background with blue highlights

## Files Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Professional styling and responsive design
├── script.js           # Interactive functionality and charts
└── README.md           # This file
```

## How to Use

1. **Open the webpage**: Simply open `index.html` in any modern web browser
2. **Navigate**: Use the floating sidebar to jump between sections
3. **Explore Details**: Click on collapsible buttons to expand detailed explanations
4. **View Charts**: Interactive charts automatically load and are responsive
5. **Hover for Definitions**: Hover over highlighted terms for tooltip definitions

## Customization

### Adding Content from PDF

To populate with actual content from the 김주환_M06.pdf:

1. **Replace Placeholder Text**: Update the content in `index.html` with actual research findings
2. **Add Real Data**: Replace chart data in `script.js` with actual performance metrics
3. **Update Equations**: Modify LaTeX equations to match the paper's mathematical formulations
4. **Add Images**: Include any figures or diagrams from the PDF

### Modifying Sections

Each section is structured as:
```html
<section id="section-name" class="section">
    <h2>Section Title</h2>
    <div class="content-wrapper">
        <!-- Content here -->
        <div class="collapsible-section">
            <!-- Collapsible content -->
        </div>
    </div>
</section>
```

### Adding New Charts

To add new charts, create a new function in `script.js`:
```javascript
function createNewChart() {
    const ctx = document.getElementById('chartId');
    if (!ctx) return;
    
    new Chart(ctx, {
        // Chart configuration
    });
}
```

### Styling Customization

The design uses a consistent color scheme:
- Primary Blue: `#2563eb`
- Dark Blue: `#1e40af`
- Success Green: `#22c55e`
- Warning Red: `#ef4444`
- Background: `#ffffff`
- Light Gray: `#f8fafc`

## Technical Requirements

- Modern web browser with JavaScript enabled
- Internet connection (for MathJax and Chart.js CDN)
- No additional software installation required

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Features in Detail

### Navigation
- Smooth scrolling between sections
- Active section highlighting
- Responsive sidebar that collapses on mobile

### Interactive Elements
- Collapsible sections with smooth animations
- Hover tooltips for technical terms
- Responsive charts that resize automatically

### Mathematical Content
- LaTeX equations rendered with MathJax
- Professional equation styling
- Support for complex mathematical notation

### Visualizations
- Bar charts for comparisons
- Line charts for time series
- Radar charts for multi-dimensional metrics
- Scatter plots for risk-return analysis
- Doughnut charts for impact assessment

## License

This template is provided for educational and research purposes. Feel free to modify and adapt for your specific needs.

## Support

For technical issues or customization questions, refer to the code comments in each file for detailed explanations of functionality. 