function clearForms(){$("input").each(function(a){0===a?$(this).val(""):$('input[type="checkbox"]').attr("checked",!1).checkboxradio("refresh")}),console.info("Form cleared"),getEntries(),clearSuggestion()}function showSpinner(){$.mobile.loading("show",{text:"Skickar...",textVisible:!0,theme:"a",html:""})}function hideSpinner(){$.mobile.loading("hide")}function submitForm(a){var b={input_1_1:$("#checkbox-1a:checked").val(),input_1_2:$("#checkbox-2a:checked").val(),input_1_3:$("#checkbox-3a:checked").val(),input_1_4:$("#checkbox-4a:checked").val(),input_2:$(emailField).val()},c={input_values:b};console.log(c),$.ajax({url:a,type:"POST",crossDomain:!0,data:JSON.stringify(c),beforeSend:function(){showSpinner()}}).done(function(a,b){console.log(a),200===a.status?$.mobile.changePage("#tack"):(hideSpinner(),showMessage("info","Woops! Någonting gick fel :( – <i>"+b+"</i>"))}).error(function(a,b){hideSpinner(),showMessage("info","Woops! Någonting gick fel :( – <i>"+b+"</i>")})}function getEntries(){$.ajax({url:"https://conversionista.se/gravityformsapi/forms/77/entries/?api_key=d5b81d3975&signature=eqpHiO8DfP1O0RPU0iMkIL1IAl0%3D&expires=1473790440",type:"GET",crossDomain:!0}).done(function(a){count=a.response.total_count;var b=new CountUp("count",0,count);b.start(function(){})})}function editEmail(){$(emailField).val(correctEmail),clearSuggestion(),toggleButton(!0)}function clearSuggestion(){$(statusField).html("")}function validateEmail(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)}function showMessage(a,b){console.info(b),$(statusField).html('<span class="animated shake '+a+'">'+b+"</span>")}function mailCheck(){$(emailField).mailcheck({domains:domains,secondLevelDomains:secondLevelDomains,topLevelDomains:topLevelDomains,suggested:function(a,b){correctEmail=b.full,$(statusField).html('<span class="animated shake">Menade du <a href="#" onclick="editEmail();">'+correctEmail+"</a>?</span>")},empty:function(){clearSuggestion()}})}function toggleButton(a){a===!0?$("#post").removeAttr("disabled"):$("#post").attr("disabled","disabled")}function checkForm(){$("input:checkbox").change(function(){$(this).is(":checked")?validateEmail($(emailField).val())===!0&&(console.log("unlocked"),toggleButton(!0)):toggleButton(!1)})}var count=1;window.typekitLoad("hwr8lvl");var domains=["gmail.com","aol.com","conversionista.se"],secondLevelDomains=["hotmail","gmail","conversionista"],topLevelDomains=["com","net","org","se","nu"],correctEmail,placeholder=["konvertera@mera.nu","jag.vill@optimera.nu","skriv.din@epost.nu"],rand=placeholder[Math.floor(Math.random()*placeholder.length)],emailField=$("#email-1"),statusField=$("#status");$(document.body).on("keydown","input:text, input[type=password], input[type=email]",function(a){return 13==a.keyCode?!1:void 0}),$(emailField).on("blur",function(){validateEmail($(this).val())?(toggleButton(!0),mailCheck()):""!==$(this).val()&&$(emailField).mailcheck({domains:domains,secondLevelDomains:secondLevelDomains,topLevelDomains:topLevelDomains,suggested:function(a,b){correctEmail=b.full,$(statusField).html('<span class="animated shake">Menade du <a href="#" onclick="editEmail();">'+correctEmail+"</a>?</span>")},empty:function(){showMessage("info","Oj. Vi uppfattade inte din epostadress. Testa igen."),toggleButton(!1)}})}),$(document).on("pagebeforeshow","#main",function(){clearForms()}),$(document).on("pageshow","#main",function(){$(emailField).attr("placeholder",rand).focus(),toggleButton(!1)}),$("#post").click(function(){if(validateEmail($(emailField).val())===!0){var a="https://conversionista.se/gravityformsapi/forms/77/submissions/?api_key=d5b81d3975&signature=l%2BdmVm9LUMHi4kXvm3qKVpZpvxc%3D&expires=1473790411";submitForm(a)}else toggleButton(!1),showMessage("info","Oj. Vi förstår inte vad du menar, vänligen kolla igenom dina uppgifter.")}),$("#tack").click(function(){$.mobile.changePage("#main")}),$(document).ready(function(){jQuery("h1.headline").fitText(1.2,{minFontSize:"20px",maxFontSize:"60px"}),jQuery("h4.headline").fitText(1,{minFontSize:"20px",maxFontSize:"38px"}),$(emailField).attr("placeholder",rand),getEntries(),toggleButton(!1),checkForm()});