	//read value from input
	const inputItem=document.querySelector("#input");
	//get ref to table
	const itemTable=document.querySelector("#itemTable");
    // all items to display
    let displayItem=[];
//onBtnClick add item to displayItem
    function insertItem(){
    	const itemList={};
    //read value from inputItem
	const input=inputItem.value;
    
    if (input !== ""){
    //put it in object
    itemList.desc=input;
    itemList.moment=new Date();

    displayItem.push(itemList);

    renderList(displayItem);
    inputItem.value="";
}
}
    //button 
	const addItem=document.querySelector("#button");
    //action on button
    addItem.addEventListener("click",insertItem,false);
    document.addEventListener("keypress", function (event) {
       if (event.keyCode === 13 || event.which === 13) {
        insertItem();
      }
    });
    
       //get date string
    function getDateString(moment){
    	 return moment.toLocaleDateString('en-US',{ year:'numeric',month:'long',day:'numeric'});
    }


    //delete items
    function deleteItem(dateValue){

 
    	const newArr=[];

    	for (let i=0 ; i < displayItem.length ; i++)
    	{
    		if(displayItem[i].moment.valueOf() !== dateValue)
    		{
    	     newArr.push(displayItem[i]);
             }
    	}
        renderList(newArr);

    }

    function renderList(arrOfList){
    	const allItemHTML=arrOfList.map(item=>createListItem(item));
    	const joineditemHTML=allItemHTML.join("");
    	itemTable.innerHTML=joineditemHTML;
    	displayItem = arrOfList;
    }
    function createListItem({desc,moment}){
    	return`<li>
    	<div>${desc}
    	<small>${getDateString(moment)}</small></div>
    	<button id="deleteBtn" onclick="deleteItem(${moment.valueOf()})">delete</button></li>`
    }