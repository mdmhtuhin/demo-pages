document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.custom-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('custom-tab-active'));
        
        // Add active class to clicked tab
        tab.classList.add('custom-tab-active');
        
        // Hide all tab contents
        document.querySelectorAll('.custom-tab-content').forEach(content => {
          content.classList.remove('custom-tab-active');
        });
        
        // Show the selected tab content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('custom-tab-active');
      });
    });
  });