export function gotoElement(elementName){
    let element = document.getElementById(elementName);    
    element.scrollIntoView();
}