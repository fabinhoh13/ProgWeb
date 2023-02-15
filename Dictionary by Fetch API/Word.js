class Word {
    constructor (element, word, description, id) {
        const newDiv = document.createElement ('div');
        newDiv.id = 'div' + id;
        const newh1 = document.createElement('h1');
        newh1.textContent = word;
        newDiv.append(newh1);
        const newp = document.createElement ('p');
        newp.textContent = description;
        newDiv.append(newp);

        element.append (newDiv);
    }
}