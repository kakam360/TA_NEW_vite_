/* Extracted from donate.html inline <script> during Vite migration */
// Copy address functionality
    document.addEventListener('DOMContentLoaded', function() {
        const copyButton = document.querySelector('.copy-address-btn');
        
        if (copyButton) {
            copyButton.addEventListener('click', function() {
                const address = this.getAttribute('data-address');
                const addressElement = document.getElementById('crypto-address');
                
                // Update displayed address if different
                if (addressElement.textContent !== address) {
                    addressElement.textContent = address;
                }
                
                // Copy to clipboard
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(address).then(() => {
                        showCopyFeedback(this);
                    }).catch(err => {
                        console.error('Failed to copy: ', err);
                        fallbackCopy(address, this);
                    });
                } else {
                    fallbackCopy(address, this);
                }
            });
        }
        
        function showCopyFeedback(button) {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fa-solid fa-check"></i>';
            button.style.background = 'rgba(76, 175, 80, 0.2)';
            button.style.borderColor = 'rgba(76, 175, 80, 0.5)';
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = '';
                button.style.borderColor = '';
            }, 2000);
        }
        
        function fallbackCopy(text, button) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    showCopyFeedback(button);
                }
            } catch (err) {
                console.error('Fallback copy failed: ', err);
                alert('Failed to copy address. Please select and copy manually.');
            }
            
            document.body.removeChild(textArea);
        }
    });
