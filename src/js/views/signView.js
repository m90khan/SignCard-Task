import {elements} from './base';


export const signform = form => {
  const markup = `
  <div class="container col-md-4 col-md-offset-3">
    <div class="sign-card" ></div>
    <form action="/action_page.php">
        <div>
          <h1 class="text-center sign">Sign In </h1>
          <div class="social-btn text-center">
            <a href="#" class="btn btn-primary btn-lg" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="btn btn-info btn-lg" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="btn btn-danger btn-lg" title="Google"><i class="fab fa-google"></i></a>
          </div><div class="or-seperator"><b>or</b></div>
        </div>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="test@test.com" autocomplete="username" name="email" required>
      <label for="psw">Password</label>
      <input type="password" id="psw" name="psw" required placeholder="enter password" autocomplete="new-password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
      <div id="message" class="message_hide" >
        <p id="length" class="invalid"><b>8+</b> characters</p>
        <p id="letter" class="invalid"><b>lowercase</b> letter</p>
        <p id="capital" class="invalid"><b>uppercase</b> letter</p>
        <p id="number" class="invalid"><b>number</b></p>
        <p id="specialc" class="invalid"><b>special</b> character</p>
      </div>
      <input class="signup-btn" type="submit" value="Submit">
      <div class="text-center small forgot_pwd"><a href="#">Reset</a> | <a href="#">Forgot Your Password?</a></div>
  </form>
  </div>
  <div class="text-center create_ac">Don't have an account? <a href="#">Sign up</a>
 </div>

`;
elements.formData.insertAdjacentHTML('afterbegin', markup);
};
const x = window.onload;
 export const messageFocus = x => {
  const password = document.querySelector('input[type="password"]');
  password.addEventListener('focus', (event) => {
    document.getElementById("message").style.display = 'block';
  });
  password.addEventListener('blur', (event) => {
document.getElementById("message").style.display = 'none';  });
}
export const delta = () => {
elements.myInput.addEventListener('input', (e) => {
  const passwordChecker = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  const addElements = [elements.letter, elements.capital, elements.number, elements.length, elements.specialc];

   if(elements.myInput.value.match(passwordChecker)){
addElements.forEach (el => {
       el.classList.remove("invalid");
       el.classList.add("valid");
});
 }else{
   // document.getElementById("message").style.background = 'yellow';
   addElements.forEach (el => {
          el.classList.remove("valid");
          el.classList.add("invalid");
   });
 }
}
);
}
