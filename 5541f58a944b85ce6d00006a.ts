// Solution for the 5541f58a944b85ce6d00006a problem in CodeWars: 'Product of consecutive Fib numbers' (5 kyu)

const lastElementsProduct = (series: number[]): number => series[series.length-2] * series[series.length-1]

export const productFib = (prod:number): [number,number,boolean] => {

    let series: number[] = [0,1]

    while(lastElementsProduct(series) < prod){
        series.push(series[series.length-1] + series[series.length-2])
    }

    return [series[series.length-2],series[series.length-1], prod === lastElementsProduct(series)]
}
