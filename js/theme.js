var activeTheme = 'dark';
const setTheme = (theme) => {
    activeTheme = theme;
    document.documentElement.className = theme;
}


var button = document.getElementById('switchTheme');
function toggleTheme() {
    if(activeTheme === 'light') {
        setTheme('dark')
        button.innerText = 'dark Mode'
    } else {
        setTheme('light')
        button.innerText = 'light Mode'
    }
};