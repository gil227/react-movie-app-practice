# React Practice Moive App 2022

리액트 영화 앱 만들기 연습 v2022

## **2022. 10. 31 TODO LIST 만들기**
 * useState 2개를 이용해 배열과 스프레드 문법을 이용하여 요소를 추가하기(onSubmit)
```js
const [toDo, setToDo] = useState("");
  const [list,addList] = useState([]);
  const onChangeEvent = (e) => {
    //event.target = 이벤트 대상 오브젝트(input)
    setToDo(e.target.value);
  };
  const onSubmit = (e) =>{
    e.preventDefault();
    if(toDo === "") return;
    setToDo("");
    addList((currentArray)=> [toDo, ...currentArray]);
  }
```

* map() 메서드를 이용하여 각각의 배열요소를 순회 하면서 li를 추가될 수 있도록 한다.

```js

<ul>
    //list 추가
    //currentItem은 각각의 요소를 가진다.
    //index는 각 요소의 index를 가진다.
    //key값은 필수이다.(map으로 받을수 있는 어떤 값도 가능 value || index || array)
    
    {list.map((currentItem,index)=>(
      <li key={index}>{currentItem}</li>
    ))}
</ul>

```
