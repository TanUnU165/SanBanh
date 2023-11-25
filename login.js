function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1") {
      alert("Đăng nhập admin thành công!");
      window.location.href ="homepage.html"
    } else if(username === "1" && password === "1") {
      alert("Đăng nhập user thành công");
      window.location.href ="homepage.html"
    }else if(username === ""|| password === ""){
      alert("Không để trống mật khẩu hoặc tài khoản")
    }else{
    alert("Tài khoản hoặc mật khẩu đã sai")
      }  
    }
  

  