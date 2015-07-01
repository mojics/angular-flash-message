/**
 * $flash
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
(function(app) {
'use strict';
    
  app.factory('$flash', flashFactory);   

  function flashFactory(){
    return {
      message: null,
      showFlag: false,
      type: 'error', // default is error type
      types: ['error','warning','success'],
      
      isShown: function(){
        return this.showFlag;
      },

      show: function(opts){
        if(opts && opts.hasOwnProperty('message')){
          this.message = opts.message;
          this.showFlag = true;  
          
          if(this.types.indexOf(opts.type) > -1){
            this.type = opts.type;
          }

        }else{
          this.message = '';
          this.showFlag = false;  
        }

        return this;
      },
      hide: function(){
        this.message = null;
        this.showFlag = false;
      }
    };
  }

})(angular.module('angularFlash'));