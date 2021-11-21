function rangeSync(e) {
    if (e.type === 'number') {
        e.nextElementSibling.nextElementSibling.value = e.value;
    } else {
        e.previousElementSibling.previousElementSibling.value = e.value;
    }
    
}
