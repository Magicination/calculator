var save1=0,
save2=0,
save3=0;


// Save buttons
 function dataSave(id){
	 if(id==="save1"){
 	if(displayData1.value==="0"){
 		displayData1.value=display.value;
		save1=parseFloat(display.value)
 } else {
	    save1+=parseFloat(display.value)
 			displayData1.value=save1
 		}}else if (id==="save2") {
			if(displayData2.value==="0"){
		 		displayData2.value=display.value;
				save2=parseFloat(display.value)
		 }else{
			 save2+=parseFloat(display.value)
		 			displayData2.value=save2;
		 		};

		}else {
			if(displayData3.value==="0"){
		 		displayData3.value=display.value;
				save3=parseFloat(display.value)
		 }  else {
		 			save3+=parseFloat(display.value)
					displayData3.value=save3;
		 		};
		};
};

function total(){
  displayTotal.value=(parseFloat(displayData1.value)+parseFloat(displayData2.value)+parseFloat(displayData3.value))
};


setInterval(total,1000);
