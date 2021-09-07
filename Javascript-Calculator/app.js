let inputBox=document.querySelector("#inputBox");
let container=document.querySelector("#container")

const keys = document.querySelector(".buttonArea");

keys.addEventListener("click",e => {
	if (e.target.matches("button")) {
		const key=e.target;
		const action=key.dataset.action;
		const keyContent=key.textContent;
		const inputContent=inputBox.textContent;
		const previousKeyType=container.dataset.previousKeyType;

		Array.from(key.parentNode.children)
		.forEach(n => n.classList.remove('depressed'))

		if(!action)
		{
			if(inputContent==='0'|| previousKeyType === 'operator')
			{
				inputBox.textContent=keyContent;
			}
			else
			{
				inputBox.textContent=inputContent+keyContent;
			}
		}
	     if(action==="decimal")
		{
			inputBox.textContent=inputContent+'.';
		}
	     if(action==='add'||action==='divide'||action==='multiply'||action==='subtract')
		{
			key.classList.add('depressed');
			container.dataset.previousKeyType = 'operator'
			container.dataset.firstValue = inputContent;
			container.dataset.operator = action
		}
	     if(action==='clear')
		{
			inputBox.textContent='0';
		}
	     if(action==='equals')
		{
			const firstValue=container.dataset.firstValue;
			const operand=container.dataset.operator;
			const secondValue=inputContent;

			let calculate = (x, operator, y) => {
				let result = ''

				if (operator === 'add') {
					result = parseFloat(x) + parseFloat(y)
				} else if (operator === 'subtract') {
					result = parseFloat(x) - parseFloat(y)
				} else if (operator === 'multiply') {
					result = parseFloat(x) * parseFloat(y)
				} else if (operator === 'divide') {
					result = parseFloat(y) / parseFloat(y)
				}

				return result;
			}
			inputBox.textContent=calculate(firstValue,operand,secondValue);
		}
	}
});