
function Numbers(number){
    ver = ver+number;
    let output=document.getElementById("ten");
    output.innerHTML = ver;
}
let ver="";
let result;
let operation='';
function operations(operationn){
    if(operation===''){
        result= parseFloat(ver) ;
        operation=operationn;
        document.getElementById("ten").textContent ='';
        ver="";
    }
    else{
        results();
        operation=operationn;
        document.getElementById("ten").textContent ='';
        ver="";
    }
    

}
function results(){
    switch(operation){
        case "+":
            result=result+parseFloat(ver);
            document.getElementById("ten").textContent=result;
            break;
        case "-":
            result=result-parseFloat(ver);
            document.getElementById("ten").textContent=result;
            break;
        case "*":
                result=result*parseFloat(ver);
                document.getElementById("ten").textContent=result;
                break;
        case "/":
            if(parseFloat(ver)===0){
                document.getElementById("ten").textContent="erurre";
                break;
            }
            result=result/parseFloat(ver);
            document.getElementById("ten").textContent=result;
            break;

    }

       
}