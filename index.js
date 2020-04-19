function addMaterials() {             
    var allElements = document.getElementById("material-container");
    var size_id = allElements.getElementsByTagName("input").length;
    size_id++;
    if(size_id< 3){
    var input = document.createElement('input');
    input.type = "text";
    input.setAttribute('id', 'material' + size_id);

    var container = document.getElementById("material-container");
    var remove = document.createElement('button');
    var br  = document.createElement('br');
    remove.setAttribute('id', 'size' + size_id);
    remove.onclick = function(e) {
      removeMaterialElement(e)
    };
    remove.setAttribute("type", "button");
    remove.innerHTML = "-";
    container.appendChild(input);
    container.appendChild(remove);
    container.appendChild(br);
    }

  } 

  function removeMaterialElement(e) {
    var button = e.target;
    var field = button.previousSibling;
    var br = button.nextSibling;
    var div = button.parentElement;
    div.removeChild(button);
    div.removeChild(field);
    div.removeChild(br);

    var allElements = document.getElementById("material-container");
    var inputs = allElements.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
      inputs[i].setAttribute('id', 'material' + (i+1));
    inputs[i].nextSibling.setAttribute('id', 'material' + (i+1));
    }
  }   


function removeSizeElement(e) {
    var button = e.target;
    var field = button.previousSibling;
    var br = button.nextSibling;
    var div = button.parentElement;
    div.removeChild(button);
    div.removeChild(field);
    div.removeChild(br);

    var allElements = document.getElementById("size-container");
    var inputs = allElements.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
      inputs[i].setAttribute('id', 'size' + (i+1));
    inputs[i].nextSibling.setAttribute('id', 'size' + (i+1));
    }
  }         
  function addSize() {             
    var allElements = document.getElementById("size-container");
    var size_id = allElements.getElementsByTagName("input").length;
    size_id++;
    if(size_id< 6){
    var input = document.createElement('input');
    input.type = "text";
    input.setAttribute('id', 'size' + size_id);

    var container = document.getElementById("size-container");
    var remove = document.createElement('button');
    var br  = document.createElement('br');
    remove.setAttribute('id', 'size' + size_id);
    remove.onclick = function(e) {
      removeSizeElement(e)
    };
    remove.setAttribute("type", "button");
    remove.innerHTML = "-";
    container.appendChild(input);
    container.appendChild(remove);
    container.appendChild(br);
    }

  }    

  function removeColorElement(e) {
    var button = e.target;
    var field = button.previousSibling;
    var br = button.nextSibling;
    var div = button.parentElement;
    div.removeChild(button);
    div.removeChild(field);
    div.removeChild(br);

    var allElements = document.getElementById("color-container");
    var inputs = allElements.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
      inputs[i].setAttribute('id', 'color' + (i+1));
    inputs[i].nextSibling.setAttribute('id', 'color' + (i+1));
    }
  }         

  function addColors() {              
    var allElements = document.getElementById("color-container");
    var color_id = allElements.getElementsByTagName("input").length;
    color_id++;
    if(color_id< 3){
    var input = document.createElement('input');
    input.type = "text";
    input.setAttribute('id', 'color' + color_id);
    var container = document.getElementById("color-container");
    var remove = document.createElement('button');
    var br  = document.createElement('br');
    remove.setAttribute('id', 'color' + color_id);
    remove.onclick = function(e) {
      removeColorElement(e)
    };
    remove.setAttribute("type", "button");
    remove.innerHTML = "-";
    container.appendChild(input);
    container.appendChild(remove);
    container.appendChild(br);
    }
  }    
   var collectionsArray = [];
  

  function createJson(){
    var product = document.getElementById("product").value;
    var description = document.getElementById("description").value;
    var basePrice = document.getElementById("basePrice").value;
   
    var sizeElements = document.getElementById("size-container");
    var sizeInputs = sizeElements.getElementsByTagName("input");
    var colorElements = document.getElementById("color-container");
    var colorInputs = colorElements.getElementsByTagName("input");
    var materialElements = document.getElementById("material-container");
    var materialInputs = materialElements.getElementsByTagName("input");
    collectionsArray = [];
    smallarray =[]
  
    
        for(i=0;i<sizeInputs.length+1;i++){
            
            for(j=0;j<colorInputs.length+1;j++){     
                
                for(k=0;k<materialInputs.length+1;k++) {
                    var json = {
                    Material: document.getElementById("material"+k).value,
                    Size : document.getElementById("size"+i).value,
                    Color : document.getElementById("color"+j).value
                    }            
            collectionsArray.push(json);   
            }
        }                

        }

        sizearray=[];
    for(a=0;a<sizeInputs.length+1;a++){                 
            var size_value = document.getElementById("size"+a).value;
            sizearray.push(size_value);
    }
    
    colorarray=[];
    for(b=0;b<colorInputs.length+1;b++){                 
        var color_value = document.getElementById("color"+b).value;
        colorarray.push(color_value);
    }

    materialArray=[]
    for(c=0;c<materialInputs.length+1;c++){                 
        var material_value = document.getElementById("material"+c).value;
        materialArray.push(material_value);
}

        var sizeArray = [];  
        var colorarray=[];
        var materialArray=[];  
        var variantArray=[];           
        for(i=0;i<sizeInputs.length+1;i++){
            var test={ 
              types :"Sizes",
             Values : sizearray
          }
    }

                for(d=0;d<colorInputs.length+1;d++){
                    var test1={ 
                    types :"Color",
                    Values : colorarray
                }
            }

            for(i=0;i<materialInputs.length+1;i++){
                var test2={ 
                types :"Material",
                Values : materialArray
            }
            }
    variantArray.push(test,test1,test2);

    var smallValues = {
        Product : product,
        BasePrice: basePrice,
        Description : description,
        Variants : variantArray,
        VariantDetails: collectionsArray
    }
    smallarray.push(smallValues);

    console.log(smallarray)


    var string = JSON.stringify(smallarray);
    document.getElementById("Json").innerHTML = string;
    console.log(smallarray);

    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(smallarray));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.json';
    a.innerHTML = 'download JSON';

    var download = document.getElementById('download');
    download.appendChild(a);
  }
  
  

