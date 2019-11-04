$(document).ready(function(){
   function genGrid(){
    var items = [
        'Car Seat',
        'Night Light',
        'High Chair',
        'Bibs',
        'Diapers',
        'Socks',
        'Mittens',
        'Plug Protectors',
        'Bubble Bath',
        'Lotion',
        'Onesie',
        'Hangers',
        'Blankets',
        'Leggings',
        'Stuffed Animals',
        'Pacifier',
        'Book',
        'Bottles',
        'Rattle',
        'Wash Cloths',
        'Baby Shampoo',
        'Monitor',
        'Toys',
        'Shoes',
        'Diaper Bag',
    ];
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
    var items = shuffle(items);
    console.log('items', items);
    var table = $('<div class="table"></div>')
    var index = 0;
    for(var i = 0; i < 5; i++){
        var row = $('<div class="row"></div>')
        for(var j = 0; j < 5; j++){
            var cell = $('<div class="cell"></div>');
            var text = $('<p></p>').text(items[index]);
            if(i === 2 && j===2) text.text('free space');
            else index++;
            cell.append(text);
            row.append(cell)
        }
        table.append(row);
    }
    var grid = $('<div class="grid"></div>').append(table);
    $('body').append(grid);
   }

   for(var k = 0; k < 30; k++){
       genGrid();
   }

    
});