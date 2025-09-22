// Solution for the 563089b9b7be03472d00002b problem at CodeWars: Remove All The Marked Elements of a List (7 kyu)

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(value => !values_list.includes(value))
}