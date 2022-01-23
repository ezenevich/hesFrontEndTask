const switchDarkMode = () => {
    let theme = getElemById("theme");

    if(theme.getAttribute("href").includes("darkMode")){
        theme.href = "./styles/style.css";
    }
    else{
        theme.href = "./styles/darkMode.css";
    }
}