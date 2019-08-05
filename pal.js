let names = ['bob', 'pap', 'renner', 'batata', 'aborta'];

const dotIt = names.map(element => element +'.');
const sizeIt = dotIt.map(element => element.lastIndexOf('.'));
const splitIt = names.map(element => element.split(""));
const reverse_splitIt = names.map(element => (element.split("")).reverse());

for(i = 0; i < names.length; i++){

    console.log('\n' + splitIt[i].join() + ' - ' + reverse_splitIt[i].join());

        if(splitIt[i].join() == reverse_splitIt[i].join()){
            console.log('palindromo');
        }else{
            console.log('não é um palindromo');
        }
}

console.log('\n');
/*for(i = 0; i < names.length; i++){

    let check = false;
    
    for(j = 0; j < sizeIt[i]; j++){

        let letter = names[i].substring(j, (j+1));

        let initP = 0;
        let endP = sizeIt[i];

            let initialLetter = names[i].substring(initP, initP+1);
            let finalLetter = names[i].substring((endP - 1), endP);

        let finder = names[i].search(letter);
        //console.log(letter, finder);

        if(finalLetter == initialLetter){
            check = true;
        }
    }
    
    if(check === true){
        //console.log('possivel palindromo');
    }
    else{
        //console.log('-');
    }
}*/
