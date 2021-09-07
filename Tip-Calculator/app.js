var bill = document.querySelector("#bill");
var tip = document.querySelector("#tipInput");
var split = document.querySelector("#splitInput");

let container = document.querySelector("#container");
container.addEventListener("input",start);

function formatMoney(value){
	value = value.toFixed(2);
	return "$ " + value;
}
function formatSplit(value){
	if(value === "1") {
		return value + " person"
	}
		else {
			return value + " people";
		}
}
function start(){

var billAmount = parseInt(bill.value);
var tipPercent = tip.value;
var splitNumber = split.value;

let tipValue = billAmount * (tipPercent/100)
let tipEach = tipValue / splitNumber;
let billEach = (billAmount+tipValue) / splitNumber;

document.querySelector("#tipPercent").innerHTML = tipPercent +"%";
document.querySelector("#tipValue").innerHTML = formatMoney(tipValue);
document.querySelector("#totalValue").innerHTML = formatMoney(billAmount + tipValue);


document.querySelector("#splitNumber").innerHTML = formatSplit(splitNumber);
document.querySelector("#billEachValue").innerHTML = formatMoney(billEach);
document.querySelector("#tipEachValue").innerHTML = formatMoney(tipEach);
}