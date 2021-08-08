//converting the login page into template literal.
const loginTemplate = `
    <h1>User login panel</h1>
    <form>
        Email Address <input type="text" name="email" id="loginemail" placeholder="Enter your E-mail Address" value=""> <br><br>
        User Passwrod <input type="password" name="password" placeholder="Enter your Password" id="loginpassword" value=""> <br>
        <input type="submit"  onclick="userlogin(this.form);">
    </form>
`;
const loginForm = document.getElementById('loginform');
loginForm.innerHTML = loginTemplate;
