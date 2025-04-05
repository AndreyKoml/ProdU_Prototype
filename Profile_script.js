document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const profilePic = document.getElementById('profile-pic');

    // Загружаем изображение из localStorage при загрузке страницы
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
        profilePic.src = savedProfilePic;
    }

    // Обработчик события загрузки файла
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem('profilePic', reader.result);
                profilePic.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    
    uploadBtn.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Сохраняем изображение в localStorage
                localStorage.setItem('profilePic', reader.result);
                // Обновляем отображаемое изображение
                profilePic.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
        
    });
});