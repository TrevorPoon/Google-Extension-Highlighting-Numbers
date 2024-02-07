// Regular expression to match numbers
const numberRegex = /\b\d+\b/g;

// Function to highlight numbers
function highlightNumbers() {
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.innerHTML;
    element.innerHTML = text.replace(numberRegex, '<span style="background-color: yellow;">$&</span>');
  }
}

// Execute the highlighting when the page loads
window.addEventListener('load', highlightNumbers);