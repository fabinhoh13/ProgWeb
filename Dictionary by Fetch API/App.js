const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

class App {
    constructor () {
        this._onJsonReady = this._onJsonReady.bind(this);
        this._onSubmit = this._onSubmit.bind (this);
        
        this.words = [];
        this.descriptions = [];

        const form = document.querySelector ('form');
        form.addEventListener('submit', this._onSubmit);
    }

    _onSubmit (event) {
        event.preventDefault();
        const inputTextView = document.querySelector('#word');
        const query = encodeURIComponent(inputTextView.value);

        //this.words = [];
        //this.descriptions = [];

        fetch (API_URL + query)
              .then (this._onResponse)
              .then (this._onJsonReady);
        
    }

    _renderWords () {
        const wordsContainer = document.querySelector ('#Meanings');
        wordsContainer.innerHTML = '';
        for (var i = 0; i < this.words.length; i++){
            const newWord = new Word (wordsContainer, this.words[i], this.descriptions[i], i);
        }
    }

    _onJsonReady (json) {
        if (json === undefined){
            return;
        }
        const word = json[0].word;
        const meaning = json[0].meanings[0].definitions[0].definition;
        this.words.push(word);
        this.descriptions.push(meaning);
        this._renderWords();
    }

    _onResponse (response) {
        if (!response.ok){
            return;
        }
        return response.json();
    }
}