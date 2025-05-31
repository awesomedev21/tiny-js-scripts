function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => console.log('Copied to clipboard!'))
    .catch(err => console.error('Failed to copy:', err));
}

copyToClipboard('Hello, World!');
