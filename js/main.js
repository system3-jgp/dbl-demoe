const client = new Discord.Client();
$(document).ready(function(){

const token = "NjM1NTcwOTU2NDQ1ODEwNjk5.XazFwA.thnmaXdmqwj1DUDSAQRYuSRTWgg"

client.login(token);
});
function connect(){
client.channels.find(i => i.id==="635566400542343188").send("**<@"+$("#oid").val()+"> adlı kullanıcı <@"+$("#cid").val()+"> isimli bot ile başvuru yaptı!**")

}