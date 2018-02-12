function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget(target){
  var nested = document.getElementById('targer');
  return nested;
}

function deepestChild(child){
  var deepest = document.querySelector(child).innerHTML;
  return deepest;
}