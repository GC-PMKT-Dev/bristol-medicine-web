function activarConyuge(estado){
	if(estado!='Soltero'){
		document.getElementById('edadConyuge').style.display='';
		document.getElementById('tipoAfConyuge').style.display='';

		document.getElementById('edadConyuge').options[0].selected='selected';
		document.getElementById('tipoAfConyuge').options[0].selected='selected';
		document.getElementById('sueldoConyuge').value='';
		document.getElementById('aporteConyuge').value='';

	}else{
		document.getElementById('edadConyuge').style.display='none';
		document.getElementById('tipoAfConyuge').style.display='none';
	}
}

function testHijos(valor){
//    alert(valor);

	if(valor!='no'){
		document.getElementById('divHijos').style.display='';

        tot=parseInt(document.getElementById('hijos').value);
		if(tot>0){
    		for(x=1;x<=tot;x++){
        		document.getElementById('hijo'+x).style.display='none';
        		document.getElementById('hijo'+x).required='false';
    		}
		}
		document.getElementById('hijos').value ='';
		document.getElementById('hijos').style.display='';
/**/
	}else{
		document.getElementById('divHijos').style.display='none';

		document.getElementById('hijos').style.display='none';
		tot=parseInt(document.getElementById('hijos').value);
		if(tot>0){
    		for(x=1;x<=tot;x++){
        		document.getElementById('hijo'+x).style.display='none';
        		document.getElementById('hijo'+x).required='false';
    		}
		}
/*	*/
	}
}

function activarEdadHijos(valor){
	valor=parseInt(valor);

	switch(valor){
		case 1:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';

			document.getElementById('hijo2').style.display='none';
			document.getElementById('hijo3').style.display='none';
			document.getElementById('hijo4').style.display='none';
			document.getElementById('hijo5').style.display='none';
			document.getElementById('hijo6').style.display='none';
			break;
		case 2:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';
			document.getElementById('hijo2').style.display='';
			document.getElementById('hijo2').required='true';

			document.getElementById('hijo3').style.display='none';
			document.getElementById('hijo4').style.display='none';
			document.getElementById('hijo5').style.display='none';
			document.getElementById('hijo6').style.display='none';
			break;
		case 3:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';
			document.getElementById('hijo2').style.display='';
			document.getElementById('hijo2').required='true';
			document.getElementById('hijo3').style.display='';
			document.getElementById('hijo3').required='true';

			document.getElementById('hijo4').style.display='none';
			document.getElementById('hijo5').style.display='none';
			document.getElementById('hijo6').style.display='none';
			break;
		case 4:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';
			document.getElementById('hijo2').style.display='';
			document.getElementById('hijo2').required='true';
			document.getElementById('hijo3').style.display='';
			document.getElementById('hijo3').required='true';
			document.getElementById('hijo4').style.display='';
			document.getElementById('hijo4').required='true';

			document.getElementById('hijo5').style.display='none';
			document.getElementById('hijo6').style.display='none';
			break;
		case 5:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';
			document.getElementById('hijo2').style.display='';
			document.getElementById('hijo2').required='true';
			document.getElementById('hijo3').style.display='';
			document.getElementById('hijo3').required='true';
			document.getElementById('hijo4').style.display='';
			document.getElementById('hijo4').required='true';
			document.getElementById('hijo5').style.display='';
			document.getElementById('hijo5').required='true';

			document.getElementById('hijo6').style.display='none';
			break;
		case 6:
			document.getElementById('hijo1').style.display='';
			document.getElementById('hijo1').required='true';
			document.getElementById('hijo2').style.display='';
			document.getElementById('hijo2').required='true';
			document.getElementById('hijo3').style.display='';
			document.getElementById('hijo3').required='true';
			document.getElementById('hijo4').style.display='';
			document.getElementById('hijo4').required='true';
			document.getElementById('hijo5').style.display='';
			document.getElementById('hijo5').required='true';
			document.getElementById('hijo6').style.display='';
			document.getElementById('hijo6').required='true';
			break;
		default:
		/*
			document.getElementById('hijos').style.display='none';
			document.getElementById('tieneHijosTit').options[0].selected='selected';
			
			document.getElementById('lblHijos').style.display='none';
			document.getElementById('hijo1').style.display='none';
			document.getElementById('hijo1').required='false';

			document.getElementById('hijo2').style.display='none';
			document.getElementById('hijo2').required='false';

			document.getElementById('hijo3').style.display='none';
			document.getElementById('hijo3').required='false';

			document.getElementById('hijo4').style.display='none';
			document.getElementById('hijo4').required='false';

			document.getElementById('hijo5').style.display='none';
			document.getElementById('hijo5').required='false';
			
			document.getElementById('hijo6').style.display='none';
			document.getElementById('hijo6').required='false';
			*/
			break;
	}
}

function activarSueldoyAporteTit(valor){
	switch(valor){
		case 'Autonomo':
		case 'Particular':
			document.getElementById('divMonoCate').style.display='none';

			document.getElementById('sueldoTitular').value='';
			document.getElementById('sueldoTitular').required='';
			document.getElementById('sueldoTitular').style.display='none';
			document.getElementById('aporteTitular').value='';
			document.getElementById('aporteTitular').style.display='none';
			document.getElementById('adMonTitular').style.display='none';
			break;
		case 'RelDep':
			document.getElementById('divMonoCate').style.display='none';
			
			document.getElementById('sueldoTitular').value='';
			document.getElementById('sueldoTitular').required='required';
			document.getElementById('sueldoTitular').style.display='';
			document.getElementById('aporteTitular').value='';
			document.getElementById('aporteTitular').style.display='';
			document.getElementById('aporteTitular').required='required';
			document.getElementById('adMonTitular').required='';
			document.getElementById('adMonTitular').style.display='none';
			break;
		case 'Monotributo':
			document.getElementById('sueldoTitular').value='';
			document.getElementById('sueldoTitular').required='';
			document.getElementById('sueldoTitular').style.display='none';
			document.getElementById('aporteTitular').style.display='none';
			document.getElementById('adMonTitular').style.display='none';

			document.getElementById('divMonoCate').style.display='';
			document.getElementById('costoMono').options[0].selected='selected';
			break;
		default:
			document.getElementById('adMonTitular').style.display='';
			document.getElementById('aporteTitular').style.display='';
		    vMonoCate=document.getElementById('lMonoCate').value.split('~');
		    vMono=document.getElementById('lMono').value.split('~');
		    for(x=0; x<13; x++){
		        if(valor==vMonoCate[x]){
        			document.getElementById('aporteTitular_or').value ="$ " + Math.round(parseFloat(vMono[x]));
        			document.getElementById('aporteTitular').value ="$ " + Math.round(parseFloat(vMono[x]));
		        }
		    }
			document.getElementById('aporteTitular').required='required';
	}
}

function activarSueldoyAporteCony(valor){
	switch(valor){
		case 'Autonomo':
		case 'Particular':
			document.getElementById('divMonoCateCony').style.display='none';

			document.getElementById('sueldoConyuge').value='';
			document.getElementById('sueldoConyuge').required='';
			document.getElementById('sueldoConyuge').style.display='none';
			document.getElementById('aporteConyuge').value='';
			document.getElementById('aporteConyuge').style.display='none';
			document.getElementById('adMonConyuge').style.display='none';
			break;
		case 'RelDep':
			document.getElementById('divMonoCateCony').style.display='none';

			document.getElementById('sueldoConyuge').value='';
			document.getElementById('sueldoConyuge').required='required';
			document.getElementById('sueldoConyuge').style.display='';
			document.getElementById('aporteConyuge').value='';
			document.getElementById('aporteConyuge').style.display='';
			document.getElementById('aporteConyuge').required='required';
			document.getElementById('adMonConyuge').required='';
			document.getElementById('adMonConyuge').style.display='none';
			break;
		case 'Monotributo':
			document.getElementById('sueldoConyuge').value='';
			document.getElementById('sueldoConyuge').required='';
			document.getElementById('sueldoConyuge').style.display='none';
			document.getElementById('aporteConyuge').style.display='none';
			document.getElementById('adMonConyuge').style.display='none';

			document.getElementById('divMonoCateCony').style.display='';
			document.getElementById('costoMonoCony').options[0].selected='selected';
			break;
		default:
			document.getElementById('adMonConyuge').style.display='';
			document.getElementById('aporteConyuge').style.display='';
		    vMonoCate=document.getElementById('lMonoCate').value.split('~');
		    vMono=document.getElementById('lMono').value.split('~');
		    for(x=0; x<13; x++){
		        if(valor==vMonoCate[x]){
        			document.getElementById('aporteConyuge_or').value ="$ " + Math.round(parseFloat(vMono[x]));
        			document.getElementById('aporteConyuge').value ="$ " + Math.round(parseFloat(vMono[x]));
		        }
		    }
			document.getElementById('aporteConyuge').required='required';
	}
}

function calcularAporteTitular(sneto){
	
	if(sneto.indexOf('$ ') != -1){ sneto=document.getElementById('sueldoTitular').value.replace("$ ","");}
	neto=parseFloat(sneto);
	calculo=(neto * 7)/100;
	aporte=parseFloat(calculo);
	adTit=0;
	if(document.getElementById('adMonTitular').style.display==''){adTit=parseInt(document.getElementById('adMonTitular').value);}
	if(adTit==0){adTit=1;}
	document.getElementById('aporteTitular').value='$ '+ (aporte * adTit);
}

function calcularAporteConyuge(sneto){
	if(sneto.indexOf('$ ') != -1){ sneto=document.getElementById('sueldoConyuge').value.replace("$ ","");}
	neto=parseFloat(sneto);
	calculo=(neto * 7)/100;
	aporte=parseFloat(calculo);
	adCony=0;
	if(document.getElementById('adMonConyuge').style.display==''){adCony=parseInt(document.getElementById('adMonConyuge').value);}
	if(adCony==0){adCony=1;}
	document.getElementById('aporteConyuge').value='$ '+ (aporte * adCony);
}

function calcularAdhTitular(){
	statusGF=calcularGrupoFam();
	if(statusGF==true){
    	sneto=document.getElementById('aporteTitular_or').value.replace("$ ","");
    	neto=parseFloat(sneto);
    	adTit=0;
    	if(document.getElementById('adMonTitular').style.display==''){adTit=parseInt(document.getElementById('adMonTitular').value);}
    	if(adTit>=1){adTit=adTit + 1;}
    	if(adTit==0){
        	document.getElementById('aporteTitular').value=document.getElementById('aporteTitular_or').value;
        	adTit=1;
    	}else{
        	aporte=neto  * adTit;
        	document.getElementById('aporteTitular').value='$ '+ aporte;
    	}
	}else{
	    document.getElementById('adMonTitular').options[0].selected='selected';
	}
}

function calcularAdhConyuge(){
	statusGF=calcularGrupoFam();
	if(statusGF==true){
        sneto=document.getElementById('aporteConyuge_or').value.replace("$ ","");
    	neto=parseFloat(sneto);
    	adCony=0;
    	if(document.getElementById('adMonConyuge').style.display==''){adCony=parseInt(document.getElementById('adMonConyuge').value);}
    	if(adCony>=1){adCony=adCony + 1;}
    	if(adCony==0){
        	document.getElementById('aporteConyuge').value=document.getElementById('aporteConyuge_or').value; 
        	adCony=1;
    	}else{
        	aporte=neto  * adCony;
        	document.getElementById('aporteConyuge').value='$ '+ aporte;
    	}	}else{
	    document.getElementById('adMonConyuge').options[0].selected='selected';
	}
}

function calcularGrupoFam(){
    cantPadres=0;    cantPadresAd=0;

    estadoTitular='';
    estadoTitular=document.getElementById('estadoTitular').value;
    if(estadoTitular!='Soltero'){cantPadres=2;}else{cantPadres=1;}

    cantHijos=0;
	hayHijos=document.getElementById('hayHijos').value;
	if(hayHijos!='no' && hayHijos.length>0){cantHijos=document.getElementById('hayHijos').value;}
	tGrupoFam=parseInt(cantPadres) + parseInt(cantHijos);
	
	if(estadoTitular!='Soltero' && document.getElementById('tipoAfTitular').value=='Monotributo'){cantPadresAd=1;}
	if(estadoTitular!='Soltero' && document.getElementById('tipoAfTitular').value=='Monotributo' && document.getElementById('tipoAfConyuge').value=='Monotributo'){cantPadresAd=2;}
if(estadoTitular!='Soltero' && document.getElementById('tipoAfTitular').value=='Particular' && document.getElementById('tipoAfConyuge').value=='Monotributo'){cantPadresAd=1;}
if(estadoTitular!='Soltero' && document.getElementById('tipoAfTitular').value=='Monotributo' && document.getElementById('tipoAfConyuge').value=='Particular'){cantPadresAd=1;}

	adTit=0; adCony=0;

	if(document.getElementById('tipoAfTitular').value!=='Particular'){adTit=parseInt(document.getElementById('adMonTitular').value);}
	if(document.getElementById('tipoAfConyuge').value!=='Particular'){adCony=parseInt(document.getElementById('adMonConyuge').value);}

	tAdhFam=adTit+adCony+cantPadresAd;

	if(tGrupoFam<tAdhFam){
	    document.getElementById('enviForm').type="button";
	    alert('VERIFIQUE los datos ingresados, la cantidad de ADHERENTES es mayor que el GRUPO FAMILIAR determinado!.'); 
	    document.getElementById('adMonTitular').options[0].selected='selected';
	    document.getElementById('aporteTitular').value=document.getElementById('aporteTitular_or').value;
	    return false
	}else{
	  	document.getElementById('enviForm').type="submit";
	    return true
	}

}

