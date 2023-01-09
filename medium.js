var name = prompt("Name?")

if (name.toUpperCase()== name) { 
    console.log('shouting')
}
else if (name.toLowerCase()== name) {console.log('whispering')}
else {
    console.log('talking normally');
}