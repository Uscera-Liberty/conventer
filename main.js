let url = 'http://api.coinlayer.com/api/live'
let input = document.querySelectorAll('input')
let select = document.querySelectorAll('select')
let rates = ''
let html = ''

async function currency(){
    let req = await fetch (url)
    if (req.ok){
        let json = await req.json()
        let arrayKey = Object.keys(json.rates)
        arrayKey.map((item)=>{
            return html += `<option value="${item}">${item}</option>` ;
        })
        select[0].innerHTML= html;
        select[1].innerHTML= html;
        let rates = json.rates
        console.log = (json.rates[select[1].value])
        
        function mini(i,j){
        input[i] = input[j] * rates[select[1].value] / rates[select[0].value]
    } 
}
input[0].addEventListener('keyup' , ()=> mini (1,0))
input[1].addEventListener('keyup' , ()=> mini (1,0))
select[0].addEventListener('keyup' , ()=> mini (1,0))
select[1].addEventListener('keyup' , ()=> mini (1,0))


    

}
