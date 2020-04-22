var counter = 1;
function addVariant() {  
  var types = document.getElementById("size-container");
  var typeVariant = types.getElementsByTagName("input").length;
  typeVariant--;     
  var typesVariant = document.createElement('input');
  typesVariant.type = "text";
  typesVariant.setAttribute('id', 'types'+ counter);
  typesVariant.setAttribute('name', 'typesValue' );
  typesVariant.setAttribute("style", "margin-top :20px; margin-right: 20px");
  typesVariant.setAttribute('placeholder', 'Variant type..'+(counter));
  types.appendChild(typesVariant);
  
  var value_id = types.getElementsByTagName("input").length;
  var mybr = document.createElement('br');          
  var valueVariant = document.createElement('input');
  valueVariant.type = "text";
  valueVariant.setAttribute('id', 'values'+ counter);
  valueVariant.setAttribute('name', 'valuesValue' );
  valueVariant.setAttribute("style", "margin-top :20px; margin-bottom:20px;");
  valueVariant.setAttribute('placeholder', 'Variant Value..'+(counter));
  types.appendChild(valueVariant);
  types.appendChild(mybr);
  counter++;  
}
   
var collectionsArray = [];
  
var outerArray=[];
var innerArray=[];
var smallarray=[];
var h;

function createVariantAddOn(){

    var product = document.getElementById("product").value;
    var description = document.getElementById("description").value;
    var basePrice = document.getElementById("basePrice").value;

    var values = document.getElementById("size-container");
    var typeVariantValues = values.getElementsByTagName("input").length;

    sizearray=[];

    for(var a=1;a<typeVariantValues.length+1;a++) {                 
      var variant_json = {
        type : document.getElementById("types"+a).value,
        value : (document.getElementById("values"+a).value).split(','),
     }
        sizearray.push(variant_json);
    }

    for(let j=0;j<Math.floor((typeVariantValues.length+1)/2);j++){     
      var json=  (document.getElementById("values"+j).value).split(',');
      innerArray.push(json);
  }

    function combos(list, n = 0, result = [], current = []){
      if (n === list.length) result.push(current)
      else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
   
      return result
  }
  
   h = (combos(sizearray));
  
  
  for(let z = 0; z < h.length;z++)
  {
    var addon = document.getElementById("addon-container");
    var addon_id = addon.getElementsByTagName("input").length;
    addon_id++;      
    var addon_1 = document.createElement('input');
    addon_1.type = "text";
    addon_1.setAttribute('id', 'Addon'+ z);
    addon_1.setAttribute('name', 'Addon' );
    addon_1.setAttribute('class', 'form-control');
    addon_1.setAttribute('placeholder', 'addon Value..'+h[z]);
    addon_1.setAttribute('aria-label', 'Username');
    addon_1.setAttribute('aria-describedby', 'basic-addon1');
    addon.appendChild(addon_1);
    
  }
  
  var buttons = document.createElement('button')
  var addon = document.getElementById("addon-container");
  buttons.setAttribute('class','btn btn-primary');
  buttons.setAttribute('style','margin-top: 15px;');
  buttons.setAttribute('id','details');
  buttons.setAttribute('onclick','JsonFile()');
  buttons.innerHTML="Variant Details";
  addon.appendChild(buttons);
  console.log('loop end');
    
  console.log(sizearray);
  

    var smallValues = {
        Product : product,
        BasePrice: basePrice,
        Description : description,
        Variants : sizearray
    }

    smallarray.push(smallValues);

    console.log(smallarray)


    var string = JSON.stringify(smallarray);
    document.getElementById("Json").innerHTML = string;
    console.log(smallarray);
  }


    // var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(smallarray));

    // var a = document.createElement('a');
    // a.href = 'data:' + data;
    // a.download = 'data.json';
    // a.innerHTML = 'download JSON';

    // var download = document.getElementById('download');
    // download.appendChild(a);
  
  
  

