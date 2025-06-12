import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message = '';
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(this._errorMessage);
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
