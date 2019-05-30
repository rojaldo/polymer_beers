import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * `my-sample`
 * this is the first sample of a polymer element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MySample extends PolymerElement {
  static get template() {
    return html`
          <iron-ajax
          auto
          url="https://api.punkapi.com/v2/beers "
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300">
      </iron-ajax>

      <template is='dom-repeat' items='[[data]]' >
          
      <div class="card">
      <img class="card-img-top" height="50px" src="[[item.image_url]]" alt="">
      <div class="card-body">
        <h4 class="card-title">[[item.name]]</h4>
        <p class="card-text">[[item.description]]</p>
      </div>
    </div>
            
      </template>
    `;
  }
  static get properties() {
    return {
      data: {
        type: Array,
        value: [],
      },
    };
  }
  handleResponse(event, request) {
    console.log('Response: '+request.response);
    this.data = request.response;
  }
}

window.customElements.define('my-sample', MySample);
