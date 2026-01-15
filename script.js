const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tabId) {
  // Remove active class from all buttons
  tabButtons.forEach(btn => btn.classList.remove("active"));

  // Hide all contents
  tabContents.forEach(content => content.classList.remove("active"));

  // Activate clicked button
  const activeBtn = document.querySelector(
    `.tab-btn[data-tab="${tabId}"]`
  );
  activeBtn.classList.add("active");

  // Show matching content
  const activeContent = document.getElementById(tabId);
  activeContent.classList.add("active");
}

// Add click event to each tab button
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activateTab(btn.dataset.tab);
  });
});

// Ensure first tab is active by default
activateTab("tab1");
