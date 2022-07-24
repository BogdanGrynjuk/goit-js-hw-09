const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const submit = document.querySelector('button[type="submit"]');

submit.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.clear();

  if (!inputDelay.value || !inputStep.value || !inputAmount.value) {
    alert('Будь ласка заповніть всі поля форми');
    return;
  }
  
  let delay = Number(inputDelay.value);

  for (let position = 1; position <= Number(inputAmount.value); position += 1) {
    
    createPromise(position, delay)
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
    
    delay += Number(inputStep.value);    
  }  

  clearFormFields();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);    
  });  
}

function clearFormFields() {
  inputDelay.value = '';
  inputStep.value = '';
  inputAmount.value = '';
}


