var navMenuType = 'push-right';




/********************** DO NOT EDIT BELOW THIS ***********************/

(function(window) {

  'use strict';

  /**
    * Extend Object helper function.
    */
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
    * Each helper function.
    *
    * function each(collection, callback) {
    *   for (var i = 0; i < collection.length; i++) {
    *     var item = collection[i];
    *     callback(item);
    *   }
    * }
    */

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
    * Initialize Menu.
    */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#nav-menu-' + this.options.type);
    this.closeBtn = this.menu.querySelector('.nav-menu-close-btn');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this.menuItems = document.querySelectorAll('.mobile-menu-link');
    this._initEvents();
  };

  /**
    * Initialize Menu Events.
    */
  Menu.prototype._initEvents = function() {

    // Event for clicks on the close button inside the menu.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the nav options.
    this.menu.addEventListener('click', function(e) {
      if (e.target.classList[0] === 'mobile-menu-link') {
        this.close();
      }
    }.bind(this));
  };

  /**
    * Open Menu.
    */
  Menu.prototype.open = function() {
    this.body.classList.add('has-active-menu');
    // this._disableBodyScroll();

    this.wrapper.classList.add('has-' + this.options.type);
    this.menu.classList.add('is-active');
    this.mask.classList.add('is-active');
  };

  /**
    * Close Menu.
    */
  Menu.prototype.close = function() {
    this.body.classList.remove('has-active-menu');
    // this._enableBodyScroll();

    this.wrapper.classList.remove('has-' + this.options.type);
    this.menu.classList.remove('is-active');
    this.mask.classList.remove('is-active');
  };

  /**
    * Add to global name space.
    */
  window.Menu = Menu;

})(window);

/**
  * Push right instantiation and action.
  */
var menuAction = new Menu({
  wrapper: '#content-wrapper',
  type: navMenuType,
  menuOpenerClass: '.nav-btn',
  maskId: '#nav-mask'
});

var menuActionBtn = document.querySelector('.nav-btn');

menuActionBtn.addEventListener('click', function(e) {
  e.preventDefault();
  menuAction.open();
});
