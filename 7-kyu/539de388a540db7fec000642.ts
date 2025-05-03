// Solution for the 539de388a540db7fec000642 problem at CodeWars: The Coupon Code (7 kyu)

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    return new Date(currentDate).getTime() <= new Date(expirationDate).getTime() && enteredCode === correctCode;
}
