// Solution for the 52a78825cdfc2cfc87000005 problem in CodeWars: Evaluate mathematical expression (2 kyu)

type Operator = '*' | '+' | '-' | '/'

// Removes parentheses from an expression
function unwrap(expression: string): string {
  if(expression[0] === '(' && expression[expression.length - 1] === ')'){
    return expression.slice(1).slice(0,-1)
  } else{
    return expression
  }
}

function operation(first: string, second: string, operator: Operator): number {
  console.log('operation:', first, operator, second)
  const firstAsNumber = parseFloat(first)
  const secondAsNumber = parseFloat(second)
  
  switch(operator){
      case '*':
        return firstAsNumber * secondAsNumber
      case '+':
        return firstAsNumber + secondAsNumber
      case '-':
        return firstAsNumber - secondAsNumber
      case '/':
        return firstAsNumber / secondAsNumber
      default:
        throw 'Operator is not supported!'
        break;
  }
}

export function calc(expression: string): number {
  // trim the white spaces and removes redundant parenthesis from original expression
  const exp = expression
                     .split('')
                     .filter(char => !!char && char !== ' ')
                     .join('')
                     .replaceAll('--', '+')
                     .replaceAll('++', '+')
                     .replaceAll('+-', '-')
                     .replaceAll('-+', '-')
  return parseFloat(solve(replaceNestedExpressions(exp)));
}

function replaceNestedExpressions(expression: string): string {  
  const firstCloseParenthesesIndex = expression.indexOf(')')
  const firstMatchOpenParenthesesIndex = expression.slice(0,firstCloseParenthesesIndex).lastIndexOf('(')
  
  if(firstCloseParenthesesIndex === -1 && firstMatchOpenParenthesesIndex === -1) {
    return solve(expression);
  }
  
  const nextWrappedExpression = expression.slice(firstMatchOpenParenthesesIndex, firstCloseParenthesesIndex + 1)
  const beforeParentheses = expression.slice(0, firstMatchOpenParenthesesIndex)
  const afterParentheses = expression.slice(firstCloseParenthesesIndex+1)
  return replaceNestedExpressions(`${beforeParentheses}${replaceNestedExpressions(unwrap(nextWrappedExpression))}${afterParentheses}`)
}

function lastFactorOperatorIndex(expression: string): number {
  if(expression.search(/[*/]/) === -1)
    return -1
  
  const lastDivision = expression.lastIndexOf('/')
  const lastMultiplication = expression.lastIndexOf('*')
  
  return lastDivision > lastMultiplication ? lastDivision : lastMultiplication
}

function negativeRightFactorNextIndex(expression: string): number {
  const symbolIndex = expression.search(/(\*-)|(\*\+)|(\/\+)|(\/\-)/)
  return symbolIndex === -1 ? -1 : symbolIndex + 2
}

function calculateNextTermIndex(expression: string): number {
  let leftChars = 0
  let slicedExpression = expression
    
  if(slicedExpression[0].search(/[+\-]/) !== -1){
    leftChars++
    slicedExpression = slicedExpression.slice(1)
  }
  
  while(negativeRightFactorNextIndex(slicedExpression) !== -1){
    leftChars += negativeRightFactorNextIndex(slicedExpression)
    slicedExpression = slicedExpression.slice(negativeRightFactorNextIndex(slicedExpression))
  }
  
  const nextTermOperatorIndex = slicedExpression.search(/[+\-]/) !== -1 ? slicedExpression.search(/[+\-]/) + leftChars : -1 
  return nextTermOperatorIndex
}

function solve(rawExpression: string): any {
  console.log(rawExpression)
  const expression = rawExpression.toString()                     
                                  .replaceAll('--', '+')
                                  .replaceAll('++', '+')
                                  .replaceAll('+-', '-')
                                  .replaceAll('-+', '-')
  const hasExtraOperands = expression.length > 1 && expression.slice(1).search(/[*/+\-]/) !== -1
  
  // If no operands, returns the calculation result
  if(!hasExtraOperands){
    return parseFloat(expression)
  }
  
  const nextTermIndex = calculateNextTermIndex(expression)
  
  if(nextTermIndex !== -1){
    const leftTerm = expression.slice(0, nextTermIndex)
    const operator = expression.slice(nextTermIndex, nextTermIndex + 1);
    const rightTerm = expression.slice(nextTermIndex + 1)
    return operation(solve(leftTerm), solve(rightTerm), operator as Operator).toString()
  }
  
  const lastFactorIndex = lastFactorOperatorIndex(expression)
  if(lastFactorIndex !== -1){
    const leftFactor = expression.slice(0, lastFactorIndex)
    const operator = expression.slice(lastFactorIndex, lastFactorIndex + 1);
    const rightFactor = expression.slice(lastFactorIndex + 1)
    console.log(leftFactor, operator, rightFactor)

    return operation(solve(leftFactor), solve(rightFactor), operator as Operator).toString()
  }
}



