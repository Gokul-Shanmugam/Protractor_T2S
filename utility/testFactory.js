var testFactory = function () {
this. selectDropdownbyNum =  async function (element, text ) {
    var i=0,match=0;
      await element.all(by.tagName('option')).map(function(elm){
          return elm.getText();
      })  .then(function(texts){
           texts.forEach(function(entry) {
               if(entry.localeCompare(text) == 0){
                    match=i;
               }
               ++i;
        });
    });
       
    element.all(by.tagName('option'))   
        .then(function(options){
          options[match].click();
        });
  };

  this.elementDetails = function(element){
          element.all(by.tagName('span')).map(function(elm){
              return elm.getText();
          })  .then(function(texts){
               texts.forEach(function(entry) {
                   console.log(entry);
            });
        });
  }
};
  module.exports = new testFactory();