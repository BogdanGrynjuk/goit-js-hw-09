!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');function u(e,n){return new Promise((function(t,u){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):u("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(o){if(o.preventDefault(),console.clear(),!e.value||!n.value||!t.value)return void alert("Будь ласка заповніть всі поля форми");for(var c=Number(e.value),a=1;a<=Number(t.value);a+=1)u(a,c).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c+=Number(n.value);e.value="",n.value="",t.value=""}))}();
//# sourceMappingURL=03-promises.22dda2d5.js.map