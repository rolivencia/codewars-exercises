// Solution for the 56d49587df52101de70011e4 problem in CodeWars: 'Leonardo Dicaprio and Oscars' (8 kyu)

export const leo = (oscar: number): string => {

    if(oscar > 88){
        return 'Leo got one already!'
    }

    if(oscar < 86){
        return 'When will you give Leo an Oscar?'
    }

    switch(oscar){
        case 88:
            return 'Leo finally won the oscar! Leo is happy'
        case 87:
            return 'When will you give Leo an Oscar?'
        case 86:
            return 'Not even for Wolf of wallstreet?!'
        default:
            return 'When will you give Leo an Oscar?'
    }

}
