/**
 *  Simoa MetaTemplate form to JSON parser. 
 *  https://github.com/mantoani/simoa
 */

export default class Form {
  constructor(){
  }

  static data(form){
    let o = {}
    Array.prototype.map.call(form.querySelectorAll('input, textarea, select, button'), a => {

      if(a.getAttribute('type') == 'checkbox'){
        if(a.checked){
          let name = a.getAttribute('name');
          let value = a.getAttribute('value');
          if(!o.hasOwnProperty(name)){
            o[name] = [value]
          } else {
            o[name].push(value);
          }
        }
      } else if(a.getAttribute('type') == 'radio'){
        if(a.checked){
          let name = a.getAttribute('name');
          let value = a.getAttribute('value');
          o[name] = value;
        }
      } else {

        if(a.getAttribute('jsontextarea') == 'true'){
          o[a.getAttribute('name')] = JSON.parse(a.value);
        } else {
          o[a.getAttribute('name')] = a.value;
        }
      }

    });
    return o;
  }

  static fieldsdata(fields){
    let o = {}
    Array.prototype.map.call(fields, a => {

      if(a.getAttribute('type') == 'checkbox'){
        if(a.checked){
          let name = a.getAttribute('name');
          let value = a.getAttribute('value');
          if(!o.hasOwnProperty(name)){
            o[name] = [value]
          } else {
            o[name].push(value);
          }
        }
      } else if(a.getAttribute('type') == 'radio'){
        if(a.checked){
          let name = a.getAttribute('name');
          let value = a.getAttribute('value');
          o[name] = value;
        }
      } else {
        o[a.getAttribute('name')] = a.value;
      }
    });
    return o;
  }

}
