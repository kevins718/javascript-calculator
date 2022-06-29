
    let no1 = Number(prompt("Enter first  number:  "));
    const operator= prompt("Pick an operator , '+' for addition, '-' for subtraction, '*' for multiplication , '/' for division and '%' for modulus :  ");
    let no2 = prompt("Enter second number: ");
    
    let result;

    if (operator== '+'){
        result=no1+no2;
    }else if(operator== '-'){
        result=no1-no2;
    }else if (operator== '*'){
        result=no1*no2;
    }else if (operator == '/'){
        result= no1/no2;
    }else if (operator == '%'){
        result = no1%no2;
    }else{
        console.log("Invalid Operator");
    }

