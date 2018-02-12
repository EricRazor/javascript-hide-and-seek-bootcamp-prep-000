function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget(target){
  var nested = document.getElementById('nested');
  return nested;
}

function deepestChild(child,deepestChild){
  var deepest = document.getElementById('child').querySelectorAll('deepestChild');
  return deepest.innerHTML;
}

