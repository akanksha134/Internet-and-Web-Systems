var bill = 0;
var cart=[];
//var cartqty=[];

$(document).ready(function(){
  //$('#c2b'+0+'button').bind('click', function(){
  $('.cart_add').bind('click', function(){
     //alert($(this).attr('id'));
     var id = $(this).attr('value');
     addtocart(id);
  });
});

function addtocart(id){
//alert("this is the id"+id);
cart.push(id);
bill =  bill + parseInt(Bakery[id-1].price*1.18);
Bakery[id-1].qty = Bakery[id-1].qty +1;
obj = `<tr>
        <td>`+Bakery[id-1].name+`</td>
        <td>`+Bakery[id-1].price+`</td>
        <td>`+Bakery[id-1].qty+`</td></tr>`;
   //$('#Bakery').append(obj);
   $('#cart_table tbody').append(obj);
   $('#bill').html("Total Bill:"+bill);
}

function checkform(){
  var flag = true;
   var categoryName = $('#new_category_name').val();
   if(categoryName.length == 0){
     alert("Empty field");
      flag=false;
   }
   if(flag){
     add_category();
   }
}

function add_category(){
var categoryName = $('#new_category_name').val();
		var obj = `<li class="nav-item">
	    <a class="nav-link" data-toggle="tab" href="#`+categoryName.toLowerCase().replace(" ","-")+`">`+categoryName+`</a>
	  </li>`;

      $('#category-tab').append(obj);
}

function Cookies(){
	var i=1;
	for(i=0;i<Bakery.length;i++)
		{	str1 = "cakes";
		  str2 = Bakery[i].type;
			if(str1 == str2){
				$('#c'+2+'b'+i+'name').html(Bakery[i].name);
			
        $('#c'+2+'b'+i+'price').html("Price: "+parseInt((Bakery[i].price*1.18)));
      	// $('#c2b'+i+'price').append(code);

			}
		}

	}
