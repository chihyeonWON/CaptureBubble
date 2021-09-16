const html = document.documentElement
const body = document.body
const div = document.querySelector("div")

div.addEventListener("click",function(){
    console.log("DIV")
})

body.addEventListener("click",function(){
    console.log("BODY")
},true) //true는 default값인 false bubble capture의 반대값으로 capture propagate 단계에서 실행된다.

html.addEventListener("click",function(){
    console.log("HTML")
})

//공부한 내용 html,body,div 모두 이벤트 handdler를 가지고 있을 때 이벤트 발생 순서는 html body div body html 순으로 중복된 구간이 발생한다.
//앞의 html body 는 capture propagate이고 뒤의 html body는 bubble propagate로 이벤트리스너의 세번째 인자로 양자택일 할 수 있다.
//예를 들어 body의 이벤트리스너의 세번째 인수에 true값을 넣어주게 되면 body는 capture propagate에서 이벤트가 발생되어 이때 이벤트 발생 순서는
//body div html 순이 된다.
