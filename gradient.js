document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / maxScroll;
        
        // Calculate new gradient colors based on scroll position
        const startColor = interpolateColor('#1a365d', '#4a148c', scrollPercentage);
        const midColor = interpolateColor('#2b6cb0', '#7b1fa2', scrollPercentage);
        const endColor = interpolateColor('#4299e1', '#9c27b0', scrollPercentage);
        
        // Update CSS variables
        document.documentElement.style.setProperty('--gradient-start', startColor);
        document.documentElement.style.setProperty('--gradient-mid', midColor);
        document.documentElement.style.setProperty('--gradient-end', endColor);
    });
    
    // Helper function to interpolate between two colors
    function interpolateColor(color1, color2, factor) {
        const hex = function(x) {
            x = x.toString(16);
            return (x.length === 1) ? '0' + x : x;
        };
        
        const r1 = parseInt(color1.substring(1, 3), 16);
        const g1 = parseInt(color1.substring(3, 5), 16);
        const b1 = parseInt(color1.substring(5, 7), 16);
        
        const r2 = parseInt(color2.substring(1, 3), 16);
        const g2 = parseInt(color2.substring(3, 5), 16);
        const b2 = parseInt(color2.substring(5, 7), 16);
        
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        
        return '#' + hex(r) + hex(g) + hex(b);
    }
}); 