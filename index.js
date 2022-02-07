$(document).ready(function(){
    class Calculadora {
        constructor() {
            this._operand1 = 0;
            this._operand2 = 0;
            this._operation = "";
        }
    
        setOperand1(_Operand1) {
            if (this._operand1 === 0) {
                this._operand1 = _Operand1;
            } else {
                this._operand1 = this._operand1*10 + _Operand1;
            }
            
        }
    
        setOperand2(_Operand2) {
            if (this._operand2 === 0) {
                this._operand2 = _Operand2;
            } else {
                this._operand2 = this._operand2*10 + _Operand2;
            }
            
        }
    
        setOperation(_newOperation) {
            let allowedOPerations = ["+", "-", "/", "*"];
            if( allowedOPerations.includes(_newOperation) ) {
                this._operation = _newOperation;
                return true;
            }
        }
    
        getResult() {
            let result 
            if (this._operation === "+") {
                result = this._operand1 + this._operand2;
            } else if (this._operation === "-") {
                result = this._operand1 - this._operand2;
            } else if (this._operation === "*") {
                result = this._operand1 * this._operand2;
            } else {
                result = this._operand1 / this._operand2;
            }
    
            return result;
        }
    
        clearCalculator() {
            this._operand1 = 0;
            this._operand2 = 0;
            this._operation = "";
        }
    }
    
    const calculadora1 = new Calculadora;
    let isFirstOperand = true;
    
    const calculator = {
        changeState : function() {
            if (isFirstOperand) {
                isFirstOperand = false;
            } else {
                isFirstOperand = true;
            }
            return isFirstOperand;
        },
        chooseOperand: function(number){
            if(isFirstOperand) {
                calculadora1.setOperand1(number);
            } else {
                calculadora1.setOperand2(number);
            }
            return true;
        },
        updateDisplay: function(){
            if (isFirstOperand){
                $('#display').text(calculadora1._operand1);
            } else {
                $('#display').text(calculadora1._operand2);
            }
        }
    
    };

    $('.number').click(function(event){
        let value = Number(event.target.textContent);
        calculator.chooseOperand(value);
        calculator.updateDisplay();
    })
    
    $('.operation').click(function(event){
        let operation = event.target.textContent;
        calculadora1.setOperation(operation);
        $('#display').text(operation);
        calculator.changeState();
    })
    
    $("#equal").click(function() {
        $('#display').text(calculadora1.getResult());
        calculadora1.clearCalculator();
        calculator.changeState();
    })
})

