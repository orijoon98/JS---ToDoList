# To-Do-List

## 구현사항
1. Name
2. Add List
3. Delete List
4. Reset

## 1. Name
- 이름 입력 값을 `LocalStorage`에 저장한다.

## 2. Add List
- `text(string)`와 `id(int)` member를 가진 object를 정의하여 `toDos`배열에 push한후 `LocalStorage`에 저장한다.
```
const toDoObj = {
  text: text,
  id: newId
};
toDos.push(toDoObj);
saveList()//LocalStorage에 저장하는 함수;
```
- `saveList()` 함수
- object를 JSON 문자열로 변환해주는 `JSON.stringify()` 함수를 사용한다.
```
function saveList(){
  localStorage.setItem(LS_key, JSON.stringify(toDos));
}
```

## 3. Delete List
- 삭제 `button`의 부모노드인 `li`를 `remove`하는 방법으로 구현한다.
```
const li = button.parentNode;
ul.removeChild(li);
```
- `LocalStorage`에 저장된 list를 수정하기 위해 `filter()`함수 사용한다.
```
const removeList = toDos.filter(function filterFn(toDo){
  return toDo.id !== parseInt(li.id);
});
toDos = removeList;
saveList();
```

## 4. Reset
- `LocalStorage`를 초기화하고 `location.href`를 사용하여 초기화면으로 돌아간다.
```
function exitList(){
  localStorage.clear();
  location.href='./index.html';
}
```
