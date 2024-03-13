const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const groupItem = button.closest('.single_group');
        const paragraphName = groupItem.querySelector('.group-name p');
        const inputName = groupItem.querySelector('.group-name input');
        const paragraphSize = groupItem.querySelector('.group-size p');
        const inputSize = groupItem.querySelector('.group-size input');
        const saveButton = groupItem.querySelector('.save-button');

        paragraphName.style.display = 'none';
        inputName.style.display = 'inline-block';
        paragraphSize.style.display = 'none';
        inputSize.style.display = 'inline-block';
        button.style.display = 'none';
        saveButton.style.display = 'inline-block';

        saveButton.addEventListener('click', () => {
            paragraphName.textContent = inputName.value;
            inputName.style.display = 'none';
            paragraphName.style.display = 'inline-block';
            paragraphSize.textContent = inputSize.value;
            inputSize.style.display = 'none';
            paragraphSize.style.display = 'inline-block';
            button.style.display = 'inline-block';
            saveButton.style.display = 'none';

            const id = groupItem.getAttribute('data-group-id');
            const group_name = inputName.value;
            const group_size = inputSize.value;

            fetch(`/api/groups/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name, group_size })
            });
        });
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const groupItem = button.closest('.single_group');
        const id = groupItem.getAttribute('data-group-id');

        fetch(`/api/groups/${id}`, {
            method: 'DELETE'
        });

        groupItem.remove();
    });
});
