    function MyFunction() {
        const information = {
            fullName : document.querySelector("#fullName").value,
            Text : document.querySelector("#text").value,
            fullName2 : document.querySelector("#fullName2").value,
            Text2 : document.querySelector("#text2").value
        }
        localStorage.setItem("name" , `${information.fullName}`);
        localStorage.setItem("text" , `${information.Text}`);
        localStorage.setItem("name" , `${information.fullName2}`);
        localStorage.setItem("text" , `${information.Text2}`);
    }