// let bankbalnce1=document.getElementById('bank-balance1').value
// let bankbalnce1=Number(prompt('Enter 1st balance'))
// let bankbalnce2=Number(prompt('Enter 1st balance'))
// let bankbalnce3=Number(prompt('Enter 1st balance'))
// let bankbalnce4=Number(prompt('Enter 1st balance'))
// let bankbalnce5=Number(prompt('Enter 1st balance'))


// let bankbalances=prompt("Enter blances seperated by a ','").split(',')
// for( let i=0;i<bankbalances.length;i++){//if we use for of loop it will cause change array in orignal array outside the loop
//     bankbalances[i]=Number(bankbalances[i])
//     if(bankbalances[i]>200000){
//         bankbalances[i]=bankbalances[i]+ 0.1*bankbalances[i]
//         bankbalances[i]=bankbalances[i]- 0.002*bankbalances[i]
//     }
//     else if(bankbalances[i]>100000){
//         bankbalances[i]=bankbalances[i]+ 0.05*bankbalances[i]
//         bankbalances[i]=bankbalances[i]- 0.0005*bankbalances[i]
//     }
//     else
//     {
//         bankbalances[i]=bankbalances[i]+ 0.03*bankbalances[i]
//     }
// }
// console.log(bankbalances)
/************************************************************************* */
// function CalculateInterest(){
//     let bankbalnce1=Number(document.getElementById('bank-balance1').value)
//     let bankbalnce2=Number(document.getElementById('bank-balance2').value)
//     let bankbalnce3=Number(document.getElementById('bank-balance3').value)
//     let bankbalnce4=Number(document.getElementById('bank-balance4').value)
//     let bankbalnce5=Number(document.getElementById('bank-balance5').value)

//     let bankbalances=[bankbalnce1,bankbalnce2, bankbalnce3, bankbalnce4, bankbalnce5]
    
//     let udatedBankbalance1=document.getElementById('udated-Bankbalance1')
//     let udatedBankbalance2=document.getElementById('udated-Bankbalance2')
//     let udatedBankbalance3=document.getElementById('udated-Bankbalance3')
//     let udatedBankbalance4=document.getElementById('udated-Bankbalance4')
//     let udatedBankbalance5=document.getElementById('udated-Bankbalance5')

//     for( let i=0;i<bankbalances.length;i++){//if we use for of loop it will cause change array in orignal array outside the loop
//     bankbalances[i]=Number(bankbalances[i])
//     if(bankbalances[i]>200000){
//         bankbalances[i]=bankbalances[i]+ 0.1*bankbalances[i]
//         bankbalances[i]=bankbalances[i]- 0.002*bankbalances[i]
//     }
//     else if(bankbalances[i]>100000){
//         bankbalances[i]=bankbalances[i]+ 0.05*bankbalances[i]
//         bankbalances[i]=bankbalances[i]- 0.0005*bankbalances[i]
//     }
//     else
//     {
//         bankbalances[i]=bankbalances[i]+ 0.03*bankbalances[i]
//     }
// }   
// udatedBankbalance1.value=bankbalances[0]
// udatedBankbalance2.value=bankbalances[1]
// udatedBankbalance3.value=bankbalances[2]
// udatedBankbalance4.value=bankbalances[3]
// udatedBankbalance5.value=bankbalances[4]
    
// }
/*********************************************************************** */

function CalculateInterest(){
    let inputBalanceNodes=document.getElementsByClassName('input-balance')
    let displayUpdatedBlances=document.getElementsByClassName('display-updated-balance')
    let bankbalances=[]
    for( let i=0;i<inputBalanceNodes.length;i++){//if we use for of loop it will cause change array in orignal array outside the loop
        bankbalances[i]=Number(inputBalanceNodes[i].value)
            if(bankbalances[i]>200000){
                bankbalances[i]=bankbalances[i]+ 0.1*bankbalances[i]
                bankbalances[i]=bankbalances[i]- 0.002*bankbalances[i]
            }
            else if(bankbalances[i]>100000){
                bankbalances[i]=bankbalances[i]+ 0.05*bankbalances[i]
                bankbalances[i]=bankbalances[i]- 0.0005*bankbalances[i]
            }
            else
            {
                bankbalances[i]=bankbalances[i]+ 0.03*bankbalances[i]
            }
            displayUpdatedBlances[i].value=bankbalances[i]
        }
    }   
    //     for(let i=0;i<inputBalanceNodes.length;i++){
    //         console.log(inputBalanceNodes[i].value)
    // }
    // let displayUpdatedBlances=document.getElementsByClassName('display-updated-balance')
    // for(let i=0;i<displayUpdatedBlances.length;i++){
    //     displayUpdatedBlances[i].value
    // }
    //     let bankbalnce1=Number(document.getElementById('bank-balance1').value)
    //     let bankbalnce2=Number(document.getElementById('bank-balance2').value)
    //     let bankbalnce3=Number(document.getElementById('bank-balance3').value)
    //     let bankbalnce4=Number(document.getElementById('bank-balance4').value)
    //     let bankbalnce5=Number(document.getElementById('bank-balance5').value)
    
    //     let bankbalances=[bankbalnce1,bankbalnce2, bankbalnce3, bankbalnce4, bankbalnce5]
        
    //     let udatedBankbalance1=document.getElementById('udated-Bankbalance1')
    //     let udatedBankbalance2=document.getElementById('udated-Bankbalance2')
    //     let udatedBankbalance3=document.getElementById('udated-Bankbalance3')
    //     let udatedBankbalance4=document.getElementById('udated-Bankbalance4')
    //     let udatedBankbalance5=document.getElementById('udated-Bankbalance5')
    
    //     for( let i=0;i<bankbalances.length;i++){//if we use for of loop it will cause change array in orignal array outside the loop
    //     bankbalances[i]=Number(bankbalances[i])
    //     if(bankbalances[i]>200000){
    //         bankbalances[i]=bankbalances[i]+ 0.1*bankbalances[i]
    //         bankbalances[i]=bankbalances[i]- 0.002*bankbalances[i]
    //     }
    //     else if(bankbalances[i]>100000){
    //         bankbalances[i]=bankbalances[i]+ 0.05*bankbalances[i]
    //         bankbalances[i]=bankbalances[i]- 0.0005*bankbalances[i]
    //     }
    //     else
    //     {
    //         bankbalances[i]=bankbalances[i]+ 0.03*bankbalances[i]
    //     }
    // }   
    // udatedBankbalance1.value=bankbalances[0]
    // udatedBankbalance2.value=bankbalances[1]
    // udatedBankbalance3.value=bankbalances[2]
    // udatedBankbalance4.value=bankbalances[3]
    // udatedBankbalance5.value=bankbalances[4]
        