class SearchView {
  #parentEl = document.querySelector('.search');
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
  #clearInput() {
    const query = (this.#parentEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      // publisher-subscriber pattern
      // this is a common pattern in JavaScript, where we listen for an event (in this case, form submission) and then call a handler function
      // the handler function is passed as an argument to the addHandlerSearch method
      e.preventDefault(); // prevent form submission
      handler();
    });
  }
}
export default new SearchView();
