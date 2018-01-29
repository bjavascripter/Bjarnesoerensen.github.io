/**
 * Exercise:
 *
 * Please choose any open API and create a search form to look for
 * dogs, news, cars, whatever.
 *
 * Here's a list of open APIs that return JSON data:
 * https://github.com/toddmotto/public-apis
 *
 * If you want to do yourself a favour, please choose an API
 * where the "Auth" column says "apiKey" or "No".
 *
 * Steps to achieve:
 *  - Create a Bootstrap form to search for a query string
 *  - Create a class to get the data from the API (remember what callbacks are?)
 *  - Create a second class to handle the form and use the first class to get the data
 */

class mySearch {
  constructor() {
    this.apiURL = 'openlibrary.org/search.json?q=';

    
    this.elements = {
      "form": $('#search-form'),
      "queryInput": $('#query'),
      "results": $('#results')
    };
    
    this.registerEvents();
  }
  
  registerEvents() {
    this.elements.form.on('submit', (e) => {
      e.preventDefault();
      
      this.query = this.elements.queryInput.val().trim();
      this.getData(this.query, (data) => {
        this.addResult(data)
      
        });
      
      })
    }
  
 
  getResultsByQuery(callback) {    
    if (this.query === null) {
      throw new RuntimeException('No query set!');
    }
  }
    
   getData(query, callback){ 
    const URL = `${this.apiURL}${this.query}`;
     $.get(URL)
      .done((data) => {
        callback(data);
     })
     
    .fail((data) => 
         console.error(data)   
     );
   }
  
  addResult(data) {
    console.log(data);
    this.elements.results.append(`
      <li class="result">
        
        
        <p class="description">
          ${ data.title_suggest }
        </p>
         <p class="description">
          ${ data.publisher }
        </p>
      </li>
    `);
  }
}

const jeff = new mySearch();