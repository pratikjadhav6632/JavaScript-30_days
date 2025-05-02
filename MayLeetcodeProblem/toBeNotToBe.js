
var expect = function(val) {

    return{
        toBe:(val2)=>{
            if(val !== val2){
                throw new Error("Not Equal");
            }else return true;
        },
        notToBe:(val3)=>{
            if(val === val3){
                throw new Error("Equal");
            }else return true;
        }
    }                                                                                                                   
};
