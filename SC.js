

function ChooiseMashine() {

	let Mashine = document.getElementById('mashine1').value;

	let ListFleit = document.getElementById('listfl').list;
	let NumObem = document.getElementById('OBEMselect');
	NumObem.style.display = 'none';

	let arr = ListFleit.childNodes;
	for (let i = 0; 0 < arr.length; i++) {
	ListFleit.removeChild(arr[0])
	}
	for (let i = 0; i < document.getElementsByClassName('ifnotPr').length; i++){
		document.getElementsByClassName('ifnotPr')[i].style.display = 'inline' }
	switch(Mashine) {
		case "OBEM":
		
			NumObem.style.display = 'inline';
			edit_nums(3);
			var ListifOBEM = [1,2,3,4,5,6,7,8,9,10];
			for (let i = 0; i <=ListifOBEM.length-1; i++) {
				let p = document.createElement("option");
				p.value = ListifOBEM[i];
				document.getElementById('listfl').list.appendChild(p)
			}
			break;
		case "л-OBEM":
			document.getElementById('listfl').value = "1/6";
			document.getElementById('water').value = 18;
			break;
		case "AT291":
			var ListifOBEM = ["1/4","1/3","5/12"];
			for (let i = 0; i <=ListifOBEM.length-1; i++) {
				let p = document.createElement("option");
				p.value = ListifOBEM[i];
				document.getElementById('listfl').list.appendChild(p)
			}
			break;
		case "LAIP":
			NumObem.style.display = 'inline';
			edit_nums(2);
			document.getElementById('water').value = 800;
			If_not_PR();
			document.getElementsByClassName('ifnotPr')[2].style.display = 'inline';
			document.getElementsByClassName('ifnotPr')[3].style.display = 'inline';
			break;
		
		case "АКДС":
			document.getElementById('water').value = 6000
			If_not_PR()
			break;
			
		case "KFA-12":
			NumObem.style.display = 'inline';
			edit_nums(10);
			document.getElementById('water').value = 2000
			If_not_PR()
			break;

		
			}

	return ListFleit

	}
	
function edit_nums(num) {
	let iter = num
		
	let numms = document.getElementById('OBEMselect').list
	let numchild = numms.childNodes
	for (let i = 0; 0 < numchild.length; i++) {
	numms.removeChild(numchild[0])
	}
	let options = ['№1','№2','№3','№4','№5','№6','№7','№8','№9','№10']
	for (let i = 0; i < iter; i++) {
		let p = document.createElement("option");
		p.value = options[i]
		document.getElementById('OBEMselect').list.appendChild(p)
	}	
}

function If_not_PR() {
	for (let i = 0; i < document.getElementsByClassName('ifnotPr').length; i++){
		document.getElementsByClassName('ifnotPr')[i].style.display = 'none' }
}
function V_Water() {
	let K_Fl = document.getElementById('listfl').value;
	switch(K_Fl) {
		case "1":
			document.getElementById('water').value = 250;
			break;
		case "2":
			document.getElementById('water').value = 315;
			break;
		case "3":
			document.getElementById('water').value = 380;
			break;
		case "4":
			document.getElementById('water').value = 445;
			break;
		case "5":
			document.getElementById('water').value = 500;
			break;
		case "6":
			document.getElementById('water').value = 750;
			break;
		case "7":
			document.getElementById('water').value = 815;
			break;
		case "8":
			document.getElementById('water').value = 880;
			break;
		case "9":
			document.getElementById('water').value = 945;
			break;
		case "10":
			document.getElementById('water').value = 1000;
			break;
		case "1/3":
			document.getElementById('water').value = 40;
			break;
		case "1/4":
			document.getElementById('water').value = 35;
			break;
		case "1/6":
			document.getElementById('water').value = 18;
			break;
		case "5/12":
			document.getElementById('water').value = 45;
			break;

	}}

function plus() {

	let Dob = document.getElementById('chemy1').cloneNode(true);
	document.getElementById('pole').appendChild(Dob)	
	}

function plusC() {

	let Do = document.getElementById('colorant1').cloneNode(true);
	document.getElementById('pole').appendChild(Do)	
	}

function delLast() {
	if (document.getElementById('pole').hasChildNodes){
		
	document.getElementById('pole').removeChild( document.getElementById('pole').lastChild )
	} }

function addReg() {
	let n1 = document.getElementById('regimeName').value.toUpperCase();
	let n2 = document.getElementById('regimeTemp').value;
	let n3 = document.getElementById('regimeTime').value;
	let div_reg = document.createElement('div');
	div_reg.setAttribute('class','reg_div');
	div_reg.setAttribute('draggable','true');
	let int_regg = document.createElement('input');
	int_regg.setAttribute('class','reg_int');
	if (document.getElementById('regimeName').value.length > 0 && document.getElementById('regimeName').value[0].toUpperCase() != document.getElementById('regimeName').value[0]){
		//console.log(document.getElementById('regimeName').value[0].toUpperCase())
		var tabu_inReg = '        '
	} else {
		var tabu_inReg = ''
	}	
	if (n1 !="" && n2 !="" && n3 !=""){
	int_regg.value = (tabu_inReg + n1 + " " + n2 + "°C " + n3 + "':")
	} else if (n1 !="" && n2 !="" && n3 =="") {
	int_regg.value = (tabu_inReg + n1 + " " + n2 + "°C " + ":")
	} else if (n1 !="" && n2 =="" && n3 !="") {
	int_regg.value = (tabu_inReg + n1 + " " + n3 + "':")
	} else if (n1 !="" && n2 =="" && n3 =="") {
	int_regg.value = (tabu_inReg + n1 + ":")
	};
	div_reg.appendChild(int_regg);
	let reg_x = document.createElement('input');
		reg_x.setAttribute('type','button');
		reg_x.setAttribute('value','x');
		reg_x.setAttribute('class','knopka');
		reg_x.setAttribute('onclick','delthisnow()');
		div_reg.appendChild(reg_x);
	let reg_d = document.createElement('input');
		reg_d.setAttribute('type','button');
		reg_d.setAttribute('value','↓');
		reg_d.setAttribute('class','knopka');
		reg_d.setAttribute('onclick','copyend()');
		div_reg.appendChild(reg_d);	
	document.getElementById('pole').appendChild(div_reg);
	}

function Rasschet() {
	let Wes = Number(document.getElementById('Massa').value);
	let Vw = Number(document.getElementById('water').value);

	let concs = document.getElementsByClassName('Chem_C');
	let Edu = document.getElementsByClassName('edinic');
	let Kolvo = document.getElementsByClassName('Chem_M');
	

	for (let i = 0; i < Kolvo.length-2; i++) {
		Ed = Edu[i+2].value;
		if (concs[i+2].value == ""){alert('Указаны  не все значения');
				i = Kolvo.length;
				break}
		switch (Ed){
			case "%":
				var X = concs[i+2].value * Wes * 10;
				break;
			case "г/л":
				var X = concs[i+2].value * Vw;
				break;
			case "г":
				var X = concs[i+2].value * 1;
				break;
			default:
				alert('Указаны  не все значения');
				i = Kolvo.length;
				break
		}
		if (X > 150) { Kolvo[i+2].value = X.toFixed(0)
		} else {
		Kolvo[i+2].value = X.toFixed(2) }
		if (Kolvo[i+2].parentElement.getElementsByClassName('pChem_M').length > 0) {
			if (X < 150){
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[0].value = (X * 0.2).toFixed(2);
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[1].value = (X * 0.3).toFixed(2);
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[2].value = (X * 0.5).toFixed(2);
			} else {
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[0].value = (X * 0.2).toFixed(0);
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[1].value = (X * 0.3).toFixed(0);
			Kolvo[i+2].parentElement.getElementsByClassName('pChem_M')[2].value = (X * 0.5).toFixed(0);	
			}}
	}	};

function copyend() {
	document.getElementById('pole').appendChild(event.target.parentElement.cloneNode(true))
}

function spis_Add() {
	let Foots = document.getElementsByTagName('footer');
	let Foots_len = document.getElementsByTagName('footer').length;
	let NewFoot = Foots[Foots_len-1].cloneNode(true);
	NewFoot.style.marginTop = '0px';
	NewFoot.style.transform = 'scale(1)'
	document.getElementById('allspis').appendChild(NewFoot);
	document.getElementById('allspis').lastChild.removeAttribute('id')
	document.getElementById('allspis').lastChild.style.position = 'static'
	let forDelAttr = ['tab1','tab2','tab3','sp_title','sp_date','podps']
	for (let i = 0; i < forDelAttr.length; i++) {
		document.getElementById(forDelAttr[i]).removeAttribute('id')
		//document.getElementById(forDelAttr[i]).removeAttribute('class')
	}
	if (document.getElementById('allspis').style.display == 'none') {
		document.getElementById('allspis').lastChild.style.display = 'none'
	}
	let sp_x = document.createElement('input');
		sp_x.setAttribute('type','button');
		sp_x.setAttribute('value','x');
		sp_x.setAttribute('class','knopka22');
		sp_x.setAttribute('onclick','delthisnow()');
		document.getElementById('allspis').lastChild.appendChild(sp_x);
	
}
var ViewSpis = false
function spis_View() {
	if (ViewSpis == false){
	document.getElementsByTagName('header')[0].style.display = 'none';
	document.getElementsByTagName('article')[0].style.display = 'none';
	document.getElementsByTagName('footer')[document.getElementsByTagName('footer').length-1].style.display = 'none';
	document.getElementById('allspis').style.display = 'block';
	let childSpis = document.getElementById('allspis').childNodes
	for (let i = 0; i < childSpis.length; i++) {
		childSpis[i].style.display = 'block'
	}
	ViewSpis = true
	} else {
		document.getElementsByTagName('header')[0].style.display = 'block';
		document.getElementsByTagName('article')[0].style.display = 'block';
		document.getElementsByTagName('footer')[document.getElementsByTagName('footer').length-1].style.display = 'block';
		document.getElementById('allspis').style.display = 'none';
		let childSpis = document.getElementById('allspis').childNodes
		for (let i = 0; i < childSpis.length; i++) {
			childSpis[i].style.display = 'none'
		}
		ViewSpis = false
	}
}

function Spisenie() {
	/*===============очистка===============================*/

	let forclean = ["tab1","tab2","tab3"];
		for (let i = 0; i < 3; i++) {
			while (document.getElementById(forclean[i]).childNodes.length > 2){
			document.getElementById(forclean[i]).removeChild( document.getElementById(forclean[i]).lastChild )
		}};
	/*===============очистка===============================*/
	Rasschet();
	let Foot = document.getElementById('foot')
	Foot.style.display = 'block';
	let txt = ['КОЛОРИСТИЧЕСКОЙ ЛАБОРАТОРИИ','УЧАСТКА КРАШЕНИЯ']
	let mash = document.getElementById('mashine1').value
	let SP_list = document.getElementById('sp_title')
	if (document.getElementById('lab_spis').checked)
	{
		SP_list.value = 'ВЕДОМОСТЬ УЧЕТА ВЫРАБОТКИ ' + txt[0];
		document.getElementById('podps').value = "Колорист"
	} else {		
		SP_list.value = 'ВЕДОМОСТЬ УЧЕТА ВЫРАБОТКИ ' + txt[1];
		document.getElementById('podps').value = "Начальник участка крашения"
	}
	let s3 = document.getElementById('sp_date');
	s3.value = document.getElementById('head_date').value;
	//let dat = new Date();
	//s3.value = String(dat.getDay()) + '.' + String(dat.getMonth()) + '.' + String(dat.getFullYear());
	

	/*первая таблица===============================================*/

	let Tab1 = document.getElementById('tab1');
	let tab1_tr = document.createElement('tr');
	let tab1_td = document.createElement('td');
	tab1_td.setAttribute('class','tabname');
	let tab1_td2 = document.createElement('td');
		tab1_td2.setAttribute('class','tabdata');
		let tabdata_int = document.createElement('input');
		tabdata_int.setAttribute('class','tabdata2');
		tab1_td2.appendChild(tabdata_int);
		tabdata_int.value = ((Number(document.getElementById('Massa').value)).toFixed(2) + ' кг');

	tab1_tr.appendChild(tab1_td); tab1_tr.appendChild(tab1_td2);

	let sph = document.getElementById('spoh').value
	let spoh1 = 'в ';
	if (document.getElementById('lab_spis').checked)
	{
		var i = 2;
		spoh1 = 'в 00';
	} else {
		var i = 0;
	};
	for (; i < sph.length-4; i++) {
		spoh1+=sph[i]
	}
	let cvet = document.getElementById('numcolor').value
	switch(cvet){
		case "702":
			cvetvs = '70200N';
			break;
		default:
			cvetvs = cvet;
			break	};
	
	tab1_td.appendChild(document.createTextNode(spoh1 + '/' + cvetvs));

	Tab1.appendChild(tab1_tr); 
	

	if (document.getElementById('lab_spis').checked){
		let tab1_tr2 = document.createElement('tr');
		let tab1_td22 = document.createElement('td');
		tab1_td22.setAttribute('class','tabname');
		
		tab1_td22.appendChild(document.createTextNode('из 0000000000000000000'));
		let td32 = document.createElement('td');
		td32.setAttribute('class','tabname');
		tab1_tr2.appendChild(tab1_td22); tab1_tr2.appendChild(tab1_td22);
		
		Tab1.appendChild(tab1_tr2);

		let tr4 = document.createElement('tr');
		let td41 = document.createElement('td');
		td41.setAttribute('class','tabname');
		td41.appendChild(document.createTextNode(sph));
		tr4.appendChild(td41);
		Tab1.appendChild(tr4);
		
		
	} else {
		let tr3 = document.createElement('tr');
		let td31 = document.createElement('td');
		td31.setAttribute('class','tabname');
		td31.appendChild(document.createTextNode('из ' + sph));
		
		tr3.appendChild(td31);
		Tab1.appendChild(tr3);

		
	}
	/*ВТОРАЯ таблица===============================================*/
	
	let Tab2 = document.getElementById('tab2');

	let colorants = document.getElementsByClassName('colorant');
	for (var i = 0; i < colorants.length-1; i++) {
		
		let tab2_row_2 =  document.createElement('tr');
		let tab2_row_2_dat =  document.createElement('td');
		tab2_row_2_dat.setAttribute('class','tabname');

		let tab2_row_2_dat_2 =  document.createElement('td');
		tab2_row_2_dat_2.setAttribute('class','tabdata');
		let tab2_row_2_dat_2_int = document.createElement('input');
		tab2_row_2_dat_2_int.setAttribute('class','tabdata2');
		if (colorants[i+1].getElementsByClassName('Chem_M')[0].value > 10) {
		tab2_row_2_dat_2_int.value = (String((colorants[i+1].getElementsByClassName('Chem_M')[0].value / 1000).toFixed(2)) + ' кг');
		} else {	tab2_row_2_dat_2_int.value = '0.01 кг'} ;

		
		tab2_row_2_dat.appendChild( document.createTextNode(colorants[i+1].getElementsByClassName('noborder')[0].value));

		Tab2.appendChild(tab2_row_2); tab2_row_2.appendChild(tab2_row_2_dat);
		tab2_row_2.appendChild(tab2_row_2_dat_2);
		tab2_row_2_dat_2.appendChild(tab2_row_2_dat_2_int);

	}

	/*ТРЕТЬЯ таблица===============================================*/
	
	let Tab3 = document.getElementById('tab3');

	let cmemyy = document.getElementsByClassName('chemy');
	for (var i = 0; i < cmemyy.length-1; i++) {
		
		let tab_trs = Tab3.childNodes;
		let add_ind = true;
		
		
		for (var r = 2; r < tab_trs.length; r++)	{
			let for30acid = 1;
			let nextName = cmemyy[i+1].getElementsByClassName('noborder')[0].value;
			if (cmemyy[i+1].getElementsByClassName('noborder')[0].value.indexOf('Уксусная кислота') != -1 && cmemyy[i+1].getElementsByClassName('noborder')[0].value.indexOf('30%') != -1){
				for30acid = 0.3;
				console.log('0.3');
				nextName = 'Уксусная кислота'
			};		
			if (tab_trs[r].childNodes[0].textContent == nextName)
				{
				
				let val_td = tab_trs[r].childNodes[1].childNodes[0].value;
				let new_val = "";
				for (let g = 0; g < val_td.length-3; g++) {
						new_val += val_td[g];
						
					};
				val_td = String( ( Number(new_val) + (cmemyy[i+1].getElementsByClassName('Chem_M')[0].value * for30acid / 1000)).toFixed(2)) + ' кг';
				
				tab_trs[r].childNodes[1].childNodes[0].value = val_td;
				add_ind = false
				break;
				}else{ continue}
		
			}
			if (add_ind == true) {
				let tab2_row_2 =  document.createElement('tr');
				let tab2_row_2_dat =  document.createElement('td');
				tab2_row_2_dat.setAttribute('class','tabname');
				let tab2_row_2_dat_2 =  document.createElement('td');
				tab2_row_2_dat_2.setAttribute('class','tabdata');
				let tab2_row_2_dat_2_int = document.createElement('input');
				tab2_row_2_dat_2_int.setAttribute('class','tabdata2');
				let for_30acid = 1 
				let _nextName = cmemyy[i+1].getElementsByClassName('noborder')[0].value
				if (cmemyy[i+1].getElementsByClassName('noborder')[0].value.indexOf('30%') != -1 && cmemyy[i+1].getElementsByClassName('noborder')[0].value.indexOf('Уксусная кислота') != -1){
					for_30acid = 0.3;
					console.log('0.3');
					_nextName = 'Уксусная кислота'
				}
				tab2_row_2_dat_2_int.value = (String(((cmemyy[i+1].getElementsByClassName('Chem_M')[0].value * for_30acid / 1000) + 0.05).toFixed(2)) + ' кг');
				tab2_row_2_dat.appendChild( document.createTextNode(_nextName));

				Tab3.appendChild(tab2_row_2); tab2_row_2.appendChild(tab2_row_2_dat);
				tab2_row_2.appendChild(tab2_row_2_dat_2);
				tab2_row_2_dat_2.appendChild(tab2_row_2_dat_2_int)}
			

			
			}//первый цикл( для химии )
		};//функция

function Alone_spis() {
	
	if (document.getElementsByTagName('header')[0].style.display == 'block'){
		ViewSpis = true;
		spis_View();
		document.getElementsByTagName('header')[0].style.display = 'none';
		document.getElementsByTagName('article')[0].style.display = 'none';
	} else {
		if (ViewSpis == true){
			ViewSpis == false
			spis_View()
			};
		document.getElementsByTagName('header')[0].style.display = 'block';
		document.getElementsByTagName('article')[0].style.display = 'block';
	}
}

document.getElementById("load").addEventListener("change", function() {
  let file_to_read = document.getElementById("load").files[0];
  let fileread = new FileReader();
  fileread.onload = function(e) {
    let content = e.target.result;
    // console.log(content);
    let intern = JSON.parse(content); // Array of Objects.
   	// You can index every object

    let color_head_l = intern[0];
    	document.getElementById("mashine1").value = color_head_l[0];
		document.getElementById("spoh").value = color_head_l[1];
		document.getElementById("num_prg").value = color_head_l[2];
		document.getElementById("numcolor").value = color_head_l[3];
		document.getElementById("namecolor").value = color_head_l[4];
		document.getElementById("listfl").value = color_head_l[5];
		document.getElementById("water").value = color_head_l[6];
		document.getElementById("Massa").value = color_head_l[7];
		document.getElementById("num_prgmm").value = color_head_l[8];
		document.getElementById("head_date").value = color_head_l[9];
		document.getElementById("OBEMselect").value = color_head_l[10];
		ChooiseMashine();
    let iterdel = document.getElementById("pole").childNodes.length
    for (let i = 0; i < iterdel; i++) {
    	delLast()
    }
    let nodes_list_l = intern[1];
    let conc_list_l = intern[2];
	let conc_ind_l = intern[3];
	let chem_name_l = intern[4];
	let Pole = document.getElementById("pole")
	for (var i = 0; i < nodes_list_l.length; i++) {
		switch(nodes_list_l[i]) {
			case "chem":
				plus();
				Pole.lastChild.getElementsByClassName('Chem_C')[0].value = conc_list_l[i];
				Pole.lastChild.getElementsByClassName('edinic')[0].value = conc_ind_l[i];
				Pole.lastChild.getElementsByClassName('noborder')[0].value = chem_name_l[i];
				break;
			case "color":
				plusC();
				Pole.lastChild.getElementsByClassName('Chem_C')[0].value = conc_list_l[i];
				Pole.lastChild.getElementsByClassName('edinic')[0].value = conc_ind_l[i];
				Pole.lastChild.getElementsByClassName('noborder')[0].value = chem_name_l[i];
				break;
			case "br":
				/*Pole.appendChild(document.createElement('br'));*/
				break;
			default:
				addReg();
				Pole.lastChild.getElementsByClassName('reg_int')[0].value = nodes_list_l[i];
				break;
		}
	}

  };
  fileread.readAsText(file_to_read);
	



	});

function loadclick() {
	document.getElementById('load').click()
}

function Ruco_stat() {
	addReg();
	document.getElementById('pole').lastChild.getElementsByTagName('input')[0].value = 'ПРОМЫВКА 40°C 20\':';
	plus();
	let Class_for_stat = ['Chem_C', 'edinic', 'noborder'];
	let Data_for_stat = ['2', '%', 'Руко-стат ASY NEW'];
	for (let i = 0; i < 3; i++){
	document.getElementById('pole').lastChild.getElementsByClassName(Class_for_stat[i])[0].value = Data_for_stat[i]
	}
}

function delthisnow() {
	console.log('del');
	let tr = event.target.parentElement;
	
	tr.parentElement.removeChild(tr)
	}

function spis_notV() {
	if (document.getElementById('foot').style.display == 'block') {
		document.getElementById('foot').style.display = 'none'
	} else {
		document.getElementById('foot').style.display = 'block'
	}
}

function split() {
	
	let tr = event.target.parentElement;
	let int1 = tr.getElementsByClassName('Chem_M');
	let int2 = tr.getElementsByClassName('pChem_M');
	if (int1[0].style.display != 'none'){
	int1[0].style.display = 'none';
	tr.getElementsByClassName('noborder')[0].style.width = '5.3cm';
	event.target.value = '|';
	for (let it = 0;it < int2.length;it++){
	//for (let it of int2){
		int2[it].style.display = 'inline'
		}
	} else {
		int1[0].style.display = 'inline';
	tr.getElementsByClassName('noborder')[0].style.width = '7cm';
	event.target.value = '/';
	for (let it = 0;it < int2.length;it++){
	//for (let it of int2){
		int2[it].style.display = 'none'
		}}
	}
//Движение списаний
function AllSpis_DOWN(Nap) {
	console.log('Rolling');
	Napr = Nap
	T = setInterval(AllSpis_DOWN1, 80)
	
}   
function AllSpis_DOWN_end() {
	clearInterval(T)
	Napr = 'none'
}

function AllSpis_DOWN1() {
	document.onmouseup = AllSpis_DOWN_end
	if (ViewSpis == true) {
		var sp_ID = 'allspis'
	} else {
		var sp_ID = 'foot'
	}
	if (document.getElementById(sp_ID).style.marginTop.length < 1) {
		document.getElementById(sp_ID).style.marginTop = '0.1cm'
	}
	let MT = ''
	for (var i = 0;i < document.getElementById(sp_ID).style.marginTop.length-2;i++){
		MT += document.getElementById(sp_ID).style.marginTop[i]
	}
	
	if (Napr == 'DOWN') {
		MT = Number(MT) + 0.2
	} 
	if (Napr == 'UP') {
		MT = Number(MT) - 0.2
	}	
	document.getElementById(sp_ID).style.marginTop = MT + 'cm'	
} 
var ScaleR = 'none';
var ST = 1;
function ScaleCall(NaP) {
	ScaleR = NaP;
	//console.log('call' + ScaleR);
	R = setInterval(ScaleAction, 80)	
}   
function Scale_end() {
	//console.log('end');
	clearInterval(R);
	ScaleR = 'none';
}

function ScaleAction() {
	//console.log('Action' + ScaleR + ST);
	document.onmouseup = Scale_end;

	if (ScaleR == 'DOWN') {
		ST -= 0.02
	} 
	if (ScaleR == 'UP') {
		ST = Number(ST) + 0.02
	}	
	if (ST < 1){ST = 1}else if(ST>1.7){ST = 1.7};
	let FTr = 1 + 1*((ST-1)/0.7*0.4)
	document.getElementById('forscale').style.transform = 'scale' + '('+ST+')'
	document.getElementById('foot').style.transform = 'scale' + '('+FTr+')'	
	if (document.getElementById('ScaleRoll').value != ST) {
		document.getElementById('ScaleRoll').value = ST
	}
	
	
} 
function ScaleRolling() {
	//console.log('Rolling');
	let val = document.getElementById('ScaleRoll').value;
	ST = val;
	ScaleAction();
}






document.getElementById("save").addEventListener("click", function() {
	let colordata = [];
	let color_head = [];
	let nodes_list = [];
	let conc_list = [];
	let conc_ind = [];
	let chem_name = [];
	let hed_date = [];
	let hed_prog = [];




	colordata[0] = color_head;
		color_head[0] = document.getElementById("mashine1").value;
		color_head[1] = document.getElementById("spoh").value;
		color_head[2] = document.getElementById("num_prg").value;
		color_head[3] = document.getElementById("numcolor").value;
		color_head[4] = document.getElementById("namecolor").value;
		color_head[5] = document.getElementById("listfl").value;
		color_head[6] = document.getElementById("water").value;
		color_head[7] = document.getElementById("Massa").value;
		color_head[8] = document.getElementById("num_prgmm").value;
		color_head[9] = document.getElementById("head_date").value;
		color_head[10] = document.getElementById("OBEMselect").value;
	colordata[1] = nodes_list;
	colordata[2] = conc_list;
	colordata[3] = conc_ind;
	colordata[4] = chem_name;


	let nodes = document.getElementById("pole").childNodes;
	

	for (let i = 0; i < nodes.length; i++) {
		let cl_nod = nodes[i].tagName;
		
		switch(cl_nod){
			case 'BR':
				nodes_list[i] = "br";
				conc_list[i] = "";
				conc_ind[i] = "";
				chem_name[i] = "";
				break;
			case 'P':
				if (nodes[i].getAttribute('class') == 'chemy'){
					nodes_list[i] = "chem";
					


				} else if (nodes[i].getAttribute('class') == 'colorant'){
					nodes_list[i] = "color";

				};
				conc_list[i] = nodes[i].getElementsByClassName('Chem_C')[0].value;
				conc_ind[i] = nodes[i].getElementsByClassName('edinic')[0].value;
				chem_name[i] = nodes[i].getElementsByClassName('noborder')[0].value;
				break;
			default:
				nodes_list[i] = nodes[i].getElementsByClassName('reg_int')[0].value;
				conc_list[i] = "";
				conc_ind[i] = "";
				chem_name[i] = "";
				break;
		
		}};
		


	


	const file = new Blob([JSON.stringify(colordata)],{type: 'application/json'});
	


	const link = document.createElement('a');
	link.setAttribute('href', URL.createObjectURL(file));

	let nameFile = document.getElementById('numcolor').value + '.json'
	if (document.getElementById('numcolor').value.length < 1){
		nameFile = 'colordata.json'
	}
	
	link.setAttribute('download', nameFile);
	link.textContent = 'DOWNLOAD DATA';
	link.click();
	/*var as = document.getElementsByTagName('aside');
	as[0].append(link);*/
	URL.revokeObjectURL(file);
	});

 //============drag'n'drop================//
	const tasksListElement = document.querySelector('#pole');
	const taskElements = tasksListElement.childNodes;

	tasksListElement.addEventListener(`dragstart`, (evt) => 
		{
 	 evt.target.classList.add(`selected`);
 	 //console.log('drandrop')
		});

	tasksListElement.addEventListener(`dragend`, (evt) =>
		{
  		evt.target.classList.remove(`selected`);
		});
	tasksListElement.addEventListener(`dragover`, (evt) => {
	  // Разрешаем сбрасывать элементы в эту область
	  evt.preventDefault();

	  // Находим перемещаемый элемент
	  const activeElement = tasksListElement.querySelector(`.selected`);
	  // Находим элемент, над которым в данный момент находится курсор
	  const currentElement = evt.target;
	  // Проверяем, что событие сработало:
	  // 1. не на том элементе, который мы перемещаем,
	  // 2. именно на элементе списка
	  const isMoveable = activeElement !== currentElement;

 	 // Если нет, прерываем выполнение функции
  	if (!isMoveable) {
  	  return;
 	 }

 	 // Находим элемент, перед которым будем вставлять
 	 const nextElement = (currentElement === activeElement.nextElementSibling) ?
   	   currentElement.nextElementSibling :
   	   currentElement;

  	// Вставляем activeElement перед nextElement
 	 tasksListElement.insertBefore(activeElement, nextElement);
		});
//============drag'n'drop================//
//=============events================//
var for_onclick = ['spis', 'alone_spis','spisNV','spisadd','spisview','ras4et','DelLAst','PlC','Pl_s','addreg','load1', 'Rucostat'];
var fnc_onclick = [Spisenie, Alone_spis,spis_notV,spis_Add, spis_View,Rasschet, delLast, plusC, plus,  addReg, loadclick,Ruco_stat];
var for_change = ['mashine1','listfl','ScaleRoll'];
var fnc_change = [ChooiseMashine,V_Water,ScaleRolling];
for (var i = 0; i < for_onclick.length; i++){
	document.getElementById(for_onclick[i]).onclick = fnc_onclick[i];
}
for (var i = 0; i < for_change.length; i++){
	document.getElementById(for_change[i]).onchange = fnc_change[i];
}
var for_setAtr = ['copytthis','delthis2','copytthis2','splitthis','delthis'];
var atr_setAtr = ['copyend()','delthisnow()','copyend()','split()','delthisnow()'];
for (var i = 0; i < for_setAtr.length; i++){
	document.getElementById(for_setAtr[i]).setAttribute('onclick',atr_setAtr[i]);
}
document.getElementById('AllSpisUp').addEventListener('mousedown',function(){AllSpis_DOWN('UP')});
document.getElementById('AllSpisDown').addEventListener('mousedown',function(){AllSpis_DOWN('DOWN')});
document.getElementById('ScaleUp').addEventListener('mousedown',function(){ScaleCall('UP')});
document.getElementById('ScaleDown').addEventListener('mousedown',function(){ScaleCall('DOWN')});
//document.getElementById('ScaleRoll').addEventListener('mousedown',function(){ScaleRolling()});
//=============events================//
