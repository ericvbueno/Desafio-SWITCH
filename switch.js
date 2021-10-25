$(document).ready(
    () => {
        $('#btnNumber').click(
            () => {
const interval = [0,1,2,3,4,5,6,7,8,9,10];
const text_number = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove','dez']

var number = parseInt($('#number').val())
console.log(number)

//function challenge () {
    var position = interval.indexOf(number);
    console.log(`OI ${position}`);

    switch(number){
        case position:
            console.log(text_number[position]);
            break;
        default: 
            console.log('Número fora do intervalo');
    }
//}
        }
        )
    }
)

//challenge();