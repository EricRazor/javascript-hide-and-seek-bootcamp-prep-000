function getFirstSelector(selector){
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget(target){
  var nested = document.getElementById('nested');
  return nested;
}

function deepestChild(child){
  var deepest = document.querySelector('#grand-node div div div div')
  return deepest;
}

function increaseRankBy(n){
  //var theRank = document.querySelectorAll('n')
  //return theRank
  
  const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, l = children.length; i < l; i++) {
        parseInt(children[i].innerHTML) === (start + i + 3)
      }

      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
      }
}