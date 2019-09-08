var numbers =document.querySelectorAll(".number")
var operations=document.querySelectorAll(".operation")
var result=document.getElementById('result')
var decimalBtn=document.getElementById('decimal')
var clearBtns=document.querySelectorAll('.clear_btns')
var display=document.getElementById('display')
var LocalSaveMemory=0
var MemoryCurrentNumber= 0
var MemoryNewNumber = false
var MemoryPendingOperation =""
var displayData1=document.getElementById('display1')
var displayData2=document.getElementById('display2')
var displayData3=document.getElementById('display3')
var displayTotal=document.getElementById('displayTotal')
var saveBtns=document.querySelectorAll(".dataSaver")

decimalBtn.addEventListener('click', function(e){
	decimal(e);
});

   for (var i=0;i<saveBtns.length;i++){
   	var saveBtn=saveBtns[i];
   	saveBtn.addEventListener('click', function(e){
   	   dataSave(e.target.id);
   	});
   };

	for (var i=0; i<numbers.length;i++){
		var number=numbers[i];
	number.addEventListener('click', function(e){
	numberPress(e.target.textContent);
});
};


for (var i=0;i<clearBtns.length;i++){     // получаем код удаления полное или нет
	var clearBtn=clearBtns[i]
	clearBtn.addEventListener('click', function(e){
		clear(e.srcElement.id );
	});
};
	for (var i=0; i<operations.length;i++){          //функция операций
		var operationBtn=operations[i];
	operationBtn.addEventListener('click', function(e){
		operation(e.target.textContent)
	});
	};


function	numberPress(number){
	if(MemoryNewNumber){
		 display.value=number;
		 MemoryNewNumber=false;
	}else{
			if (display.value==="0"){
			    display.value=number;
		} else{
			display.value+=number;
		};
};
};

function operation(op){
 var	localOperationMemory=display.value;

if(MemoryNewNumber && MemoryPendingOperation!== "="){
	display.value=MemoryCurrentNumber;
}else{
	MemoryNewNumber=true;
	if(MemoryPendingOperation==="+"){
		MemoryCurrentNumber+=parseFloat(localOperationMemory);
	}else if(MemoryPendingOperation==="-"){
		MemoryCurrentNumber-=parseFloat(localOperationMemory);
	}else if(MemoryPendingOperation==="/"){
		MemoryCurrentNumber/=parseFloat(localOperationMemory);
	}else if(MemoryPendingOperation==="*"){
		MemoryCurrentNumber*=parseFloat(localOperationMemory);//0 dived 0
	}else if(MemoryPendingOperation==="^"){
		MemoryCurrentNumber=Math.pow(MemoryCurrentNumber,parseFloat(localOperationMemory))

	}else{
		MemoryCurrentNumber=parseFloat(localOperationMemory);
		};
		display.value=MemoryCurrentNumber.toPrecision(4);
		MemoryPendingOperation=op;
	};

};



function clear(id){
	if(id==="ce"){
		display.value="0";
		MemoryNewNumber=true;
	}else if (id==="c"){
		display.value="0";
         MemoryNewNumber=true;
         MemoryCurrentNumber=0;
         MemoryPendingOperation='';
	}else if (id==="<--"){
		display.value=display.value.substring(0, display.value.length-1);
		if(display.value.length<=0){
			display.value="0"};
		}
	};



function decimal(){
var localDecimalMemory =display.value;

  if(MemoryNewNumber) {
		localDecimalMemory="0.";
		MemoryNewNumber=false;
	}else{
		if(localDecimalMemory.indexOf(".")=== -1){
		localDecimalMemory+=".";
	};
	display.value=localDecimalMemory
};

 };
