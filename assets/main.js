let count = localStorage.getItem('on_load_counter');
        
    if (count === null) {
        count = 0;
    }
    count++;
    
    localStorage.setItem("on_load_counter", count);
    
    nums = count.toString().split('').map(Number);
    document.getElementById('flex_count_visit').innerHTML = '';
    for (let i of nums) {
        document.getElementById('flex_count_visit').innerHTML += '<span class="flex_count_item">' + i + '</span>';
    }
