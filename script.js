// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeCollapsibleSections();
    initializeNavigation();
    initializeCharts();
    initializeTooltips();
});

// Collapsible Sections Functionality
function initializeCollapsibleSections() {
    const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
    
    collapsibleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            // Toggle active class
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            // Update arrow rotation
            if (this.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Toggle section function (for onclick handlers)
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const btn = content.previousElementSibling;
    const arrow = btn.querySelector('.arrow');
    
    btn.classList.toggle('active');
    content.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Navigation Functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Chart Initialization
function initializeCharts() {
    // Traditional vs Deep Hedging Comparison Chart
    createHedgingComparisonChart();
    
    // Neural Network Training Process Chart
    createTrainingProcessChart();
    
    // Performance Comparison Chart
    createPerformanceComparisonChart();
    
    // Risk-Return Profile Chart
    createRiskReturnProfileChart();
    
    // Impact Assessment Chart
    createImpactAssessmentChart();
}

function createHedgingComparisonChart() {
    const ctx = document.getElementById('hedgingComparison');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Transaction Costs', 'Market Impact', 'Complex Derivatives', 'Incomplete Markets', 'Non-linear Effects'],
            datasets: [{
                label: 'Traditional Delta Hedging',
                data: [30, 25, 20, 15, 10],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2
            }, {
                label: 'Deep Hedging',
                data: [85, 80, 90, 85, 95],
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Effectiveness Comparison (%)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function createTrainingProcessChart() {
    const ctx = document.getElementById('trainingProcess');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Epoch 1', 'Epoch 10', 'Epoch 50', 'Epoch 100', 'Epoch 200', 'Epoch 500'],
            datasets: [{
                label: 'Training Loss',
                data: [2.5, 1.8, 1.2, 0.8, 0.5, 0.3],
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Validation Loss',
                data: [2.6, 1.9, 1.3, 0.9, 0.6, 0.4],
                borderColor: 'rgba(245, 158, 11, 1)',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Neural Network Training Convergence',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Loss Value'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Training Epochs'
                    }
                }
            }
        }
    });
}

function createPerformanceComparisonChart() {
    const ctx = document.getElementById('performanceComparison');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Sharpe Ratio', 'Max Drawdown', 'VaR (95%)', 'Expected Shortfall', 'Transaction Costs', 'Market Impact'],
            datasets: [{
                label: 'Delta Hedging',
                data: [0.8, 0.6, 0.7, 0.5, 0.3, 0.4],
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(239, 68, 68, 1)'
            }, {
                label: 'Deep Hedging',
                data: [0.9, 0.8, 0.9, 0.8, 0.8, 0.9],
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(34, 197, 94, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Performance Metrics Comparison',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 1,
                    ticks: {
                        stepSize: 0.2
                    }
                }
            }
        }
    });
}

function createRiskReturnProfileChart() {
    const ctx = document.getElementById('riskReturnProfile');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Delta Hedging',
                data: [
                    {x: 0.15, y: 0.08},
                    {x: 0.18, y: 0.09},
                    {x: 0.22, y: 0.11},
                    {x: 0.25, y: 0.12},
                    {x: 0.28, y: 0.13}
                ],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2
            }, {
                label: 'Deep Hedging',
                data: [
                    {x: 0.12, y: 0.10},
                    {x: 0.14, y: 0.12},
                    {x: 0.16, y: 0.14},
                    {x: 0.18, y: 0.16},
                    {x: 0.20, y: 0.18}
                ],
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Risk-Return Profile',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Risk (Volatility)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Return'
                    }
                }
            }
        }
    });
}

function createImpactAssessmentChart() {
    const ctx = document.getElementById('impactAssessment');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Performance Improvement', 'Risk Reduction', 'Cost Efficiency', 'Market Adaptability', 'Implementation Complexity'],
            datasets: [{
                data: [25, 20, 15, 25, 15],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(239, 68, 68, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Impact Assessment by Category (%)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Tooltip Functionality
function initializeTooltips() {
    // Tooltips are handled by CSS, but we can add additional functionality here
    const tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            // Add any additional tooltip behavior here
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive charts
window.addEventListener('resize', debounce(function() {
    // Charts will automatically resize due to responsive: true
}, 250));

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
}); 