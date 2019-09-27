function tossCoin(){
    let value = Math.random();
    let result = (value > 0.5) ? 'Mặt sấp' : 'Mặt ngửa';
    console.log(value);
    console.log(result);
}