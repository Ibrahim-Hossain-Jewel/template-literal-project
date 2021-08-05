//literal template for signup form in home work assignment
const template = `
    <h1>User registration panel</h1>
    <form>
    <input type="text" name="firstname" id="firstname" placeholder="firstname" value=""><br>
    <input type="text" name="lastname" id="lastname" placeholder="lastname" value="" ><br>
    <input type="email" name="emailaddress" id="emailaddress" placeholder="email" value="" ><br>
    <input type="password" name="password" id="password" placeholder="password" value="" ><br>
    <label for="checkbox">I agree to the Terms of Use</label>
    <input type="checkbox" name="checkbox" id="checkbox"><br>
    <input type="button"  value="registration"  onclick="registration(this.form);">
    </form>
`;
const userloginForm = document.getElementById('userloginForm');
userloginForm.innerHTML += template;