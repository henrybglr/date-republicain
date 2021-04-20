const date = new Date();
const hour = date.getHours();

if(hour < 12) {
    document.write('morning')
}
else if(hour >= 12 && hour < 18) {
    document.write('afternoon')
}
else {
    document.write('evening')
}