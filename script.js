    const utenti= ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
    const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];

function Login(){

    let inputuser = document.getElementById("Username").value;
    let inputpassword = document.getElementById("Password").value;

    if(utenti.includes(inputuser)){
        let i = utenti.indexOf(inputuser);
        if(password[i] == inputpassword){
            document.getElementById("msg").innerText = "Accesso effettuato con concesso";
            document.getElementById("msg").classList.add("alert","alert-success");
        }
    }else{
        document.getElementById("msg").innerText = "accesso non consentito";
            document.getElementById("msg").classList.add("alert", "alert-danger");
    }

}