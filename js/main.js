
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');

    emailForm.addEventListener('submit', function (e) {
        e.preventDefault(); // منع الإرسال الافتراضي للنموذج
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // التحقق من البريد الإلكتروني

        if (!emailRegex.test(emailValue)) {
            errorMessage.style.display = 'block'; // عرض رسالة الخطأ
            emailInput.classList.add('error');
        } else {
            errorMessage.style.display = 'none'; // إخفاء رسالة الخطأ
            emailInput.classList.remove('error');
            alert('Email submitted successfully!');
        }
    });
