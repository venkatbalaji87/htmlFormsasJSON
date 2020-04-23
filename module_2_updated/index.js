var initialCounterValue = 1;
function addingVariant() {  

  var types = document.getElementById("variant-field-container");
  var type_id = types.getElementsByTagName("input").length;    
  var typesinput = document.createElement('input');
  typesinput.type = "text";
  typesinput.setAttribute('id', 'type'+ initialCounterValue);
  typesinput.setAttribute('name', 'Type' );
  typesinput.setAttribute('style', 'margin-top:20px;');
  typesinput.setAttribute('class', 'form-control');
  typesinput.setAttribute('placeholder', 'Variant type..'+(initialCounterValue+1));

  types.appendChild(typesinput);
  
  var values = document.getElementById("value-field-container");
  var value_id = values.getElementsByTagName("input").length;
            
  var Valuesinput = document.createElement('input');
  Valuesinput.type = "text";
  Valuesinput.setAttribute('id', 'value'+ initialCounterValue);
  Valuesinput.setAttribute('name', 'Value' );
  Valuesinput.setAttribute('style', 'margin-top:20px;');
  Valuesinput.setAttribute('class', 'form-control');
  Valuesinput.setAttribute('placeholder', 'Variant Value..'+(initialCounterValue+1));
  
  types.appendChild(Valuesinput);
  initialCounterValue++;  

}
 


var gettingResult ;
function generateInputFields(){
  var typeElements = document.getElementById("variant-field-container");
  var typeInputs = typeElements.getElementsByTagName("input");
  var valueElements = document.getElementById("value-field-container");
  var valueInputs = valueElements.getElementsByTagName("input");
  addonInputFieldArray = [];
          
  for(let j=0;j<Math.floor((typeInputs.length+1)/2);j++){     
      var input_json=  (document.getElementById("value"+j).value).split(',');
      addonInputFieldArray.push(input_json);
  }

function gettingAddons(items){
  result = items.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
    return result
}


gettingResult = (gettingAddons(addonInputFieldArray));
 
console.log(gettingResult);
 

for(var addons = 0; addons < gettingResult.length;addons++)
{
  var addon = document.getElementById("addon-field-container");
  var addon_id = addon.getElementsByTagName("input").length;
  addon_id++;      
  var addon_input = document.createElement('input');
  addon_input.type = "text";
  addon_input.setAttribute('id', 'addons'+ addons);
  addon_input.setAttribute('class', 'form-control');
  addon_input.setAttribute('style','margin-top: 15px;');
  addon_input.setAttribute('placeholder', 'Kindly add Addon Value for..'+gettingResult[addons]);
  addon.appendChild(addon_input);
  
}

var buttons = document.createElement('button')
var addon = document.getElementById("addon-field-container");
buttons.setAttribute('class','btn btn-primary');
buttons.setAttribute('style','margin-top: 15px;');
buttons.setAttribute('id','details');
buttons.setAttribute('onclick','JsonFile()');
buttons.innerHTML="Variant Details";
addon.appendChild(buttons);

}

function JsonFile(){
  var product = document.getElementById("product").value;
  var description = document.getElementById("description").value;
  var basePrice = document.getElementById("basePrice").value; 
  var typeElements = document.getElementById("variant-field-container");
  var typeInputs = typeElements.getElementsByTagName("input");
  var valueElements = document.getElementById("value-field-container");
  var valueInputs = valueElements.getElementsByTagName("input");
  var addon = document.getElementById("addon-field-container");
  var addonInputs = addon.getElementsByTagName("input");

  var productArray = [];
  var finalArray = [];
  var temp = [];

  
  //Variants

for(let e = 0 ; e<Math.floor((typeInputs.length+1)/2);e++){
  
  var json_1 = {
     type : document.getElementById("type"+e).value,
     value : (document.getElementById("value"+e).value).split(','),
  }
    
  temp.push(json_1)
}


//variable Inputs


var output = [];

function getFields(input, field) {
  for (var i=0; i < input.length ; ++i)
      output.push(input[i][field]);
  return output;
}

var result = getFields(temp, "type");

console.log(output);

const flattend = gettingResult.flat();


var variblevariants = [];
for(let i = 0;i<flattend.length;i++){
  for (let j = 0;j<Math.floor((typeInputs.length+1)/2);j++){
    var variableDynamicJson = {
      [output[j]] : flattend[i]
    }
    i++;
    variblevariants.push(variableDynamicJson)
  }
  i--;
}
console.log(variblevariants);

var sliceObject = {};
var inputTake = Math.floor((typeInputs.length+1)/2);
var temporary = inputTake;
var slixeArray = [];
for(let i =0;i<variblevariants.length;i++){
  sliceObject= (variblevariants.slice(i,inputTake))
 slixeArray.push(sliceObject)
 i = inputTake - 1;
 inputTake = inputTake + temporary;
 }

console.log(slixeArray);


for(let i = 0; i < gettingResult.length;i++){
  var addonObject = {addOnPrice : document.getElementById("addons"+i).value};
  slixeArray[i].push(addonObject);
}

console.log(slixeArray);

var finalVariantVairables = [];

for(let i =0 ; i < slixeArray.length ; i++){
  finalVariantVairables.push(slixeArray[i].reduce(((r, c) => Object.assign(r, c)), {}))
}

console.log(finalVariantVairables)



// final json


productArray.push({
    Product : product,
    BasePrice: basePrice,
    Description : description,
    Variants : temp,
    VariantDetails: finalVariantVairables
});


// json conversion

  
  var string = JSON.stringify(productArray);
  document.getElementById("Json").innerHTML = string;

  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(productArray));

  var a = document.createElement('a');
  a.href = 'data:' + data;
  a.download = 'data.json';
  a.innerHTML = 'download JSON';

  var download = document.getElementById('download');
  download.appendChild(a);
}





    