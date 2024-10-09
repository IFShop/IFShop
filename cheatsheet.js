function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.style.display = category.style.display === 'block' ? 'none' : 'block';
}

function toggleExample(element) {
    const example = element.nextElementSibling;
    example.style.display = example.style.display === 'block' ? 'none' : 'block';
}

function filterCommands() {
    const input = document.getElementById('search').value.toLowerCase();
    const commands = document.querySelectorAll('.command');

    commands.forEach(command => {
        const commandText = command.querySelector('span:first-child').textContent.toLowerCase();
        if (commandText.includes(input)) {
            command.style.display = '';
        } else {
            command.style.display = 'none';
        }
    });
}
