var setRadius = function(newRadius){
    if(newRadius<minRad)
        newRadius = minRad;
    else if (newRadius>maxRad)
        newRadius = maxRad;
    radius = newRadius;
    context.linewidth = radius*2;

    radSpan.innerHTML = radius;
}

var minRad = 0,
    maxRad = 100,
    defaultRad = 2,
    interval = 2,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');
            

decRad.addEventListener('click', function(){
    setRadius(radius-interval);
});
incRad.addEventListener('click', function(){
    setRadius(radius+interval);
});
setRadius(sefaultRad);
