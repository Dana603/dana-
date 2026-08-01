// Simple interactive script for SO SO Matcha & Cinnabon
document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    let wishlistCount = 0;

    const cartBadge = document.querySelector('.nav-icons .fa-bag-shopping').nextElementSibling;
    const addButtons = document.querySelectorAll('.btn-add');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            
            // Notification effect
            button.textContent = 'تمت الإضافة ✓';
            button.style.backgroundColor = '#3b5323';
            button.style.color = '#ffffff';

            setTimeout(() => {
                button.textContent = 'إضافة للسلة';
                button.style.backgroundColor = 'transparent';
                button.style.color = '#3b5323';
            }, 1500);
        });
    });
});
