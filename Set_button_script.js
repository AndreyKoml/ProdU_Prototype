
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('set_btn');
    const drop_content = document.getElementById('drop_content');

    toggleButton.addEventListener('click', function() {
        // Проверяем текущее состояние меню и переключаем его видимость
        if (drop_content.style.display === 'none' || drop_content.style.display === '') {
            drop_content.style.display = 'block'; // Показываем меню
        } 
        else {
            drop_content.style.display = 'none'; // Скрываем меню
        }
    });
});

const toggleButton = document.getElementById('set_btn');

toggleButton.addEventListener('click', function() {
 this.classList.toggle('rotated');
});