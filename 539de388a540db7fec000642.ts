export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    return new Date(currentDate).getTime() <= new Date(expirationDate).getTime() && enteredCode === correctCode;
}
