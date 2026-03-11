// Tooltip functionality and click handling
document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    const bedRegions = document.querySelectorAll('.bed-region');

    // Region data with tooltips and links
    const regionData = {
        'headboard': {
            tooltip: 'Factors that trigger the crisis',
            link: 'sections/catalyst.html'
        },
        'mattress': {
            tooltip: 'Structural issues in healthcare systems',
            link: 'sections/systematic-failures.html'
        },
        'blanket': {
            tooltip: 'Healthcare worker attitudes and biases',
            link: 'sections/stigma-stats.html'
        },
        'sheet': {
            tooltip: 'Gender-based healthcare inequities',
            link: 'sections/gendered-violence.html'
        }
    };

    bedRegions.forEach(region => {
        region.addEventListener('mouseenter', function (e) {
            const regionName = this.getAttribute('data-region');
            const data = regionData[regionName];

            if (data && data.tooltip) {
                tooltip.textContent = data.tooltip;
                tooltip.classList.add('show');

                // Position tooltip
                const rect = this.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();

                let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                let top = rect.top - tooltipRect.height - 10;

                // Adjust if tooltip goes off screen
                if (left < 10) left = 10;
                if (left + tooltipRect.width > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipRect.width - 10;
                }
                if (top < 10) {
                    top = rect.bottom + 10;
                }

                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
            }
        });

        region.addEventListener('mouseleave', function () {
            tooltip.classList.remove('show');
        });

        region.addEventListener('mousemove', function (e) {
            const regionName = this.getAttribute('data-region');
            const data = regionData[regionName];

            if (data && data.tooltip) {
                const rect = this.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();

                let left = e.clientX - tooltipRect.width / 2;
                let top = rect.top - tooltipRect.height - 10;

                // Adjust if tooltip goes off screen
                if (left < 10) left = 10;
                if (left + tooltipRect.width > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipRect.width - 10;
                }
                if (top < 10) {
                    top = rect.bottom + 10;
                }

                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
            }
        });

        region.addEventListener('click', function (e) {
            const regionName = this.getAttribute('data-region');
            const data = regionData[regionName];

            if (data && data.link) {
                window.location.href = data.link;
            }
        });
    });
});

// Add subtle animation on page load
window.addEventListener('load', function () {
    const bedRegions = document.querySelectorAll('.bed-region');
    bedRegions.forEach((region, index) => {
        region.style.opacity = '0';
        region.style.transform = 'translateY(20px)';

        setTimeout(() => {
            region.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            region.style.opacity = '1';
            region.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
