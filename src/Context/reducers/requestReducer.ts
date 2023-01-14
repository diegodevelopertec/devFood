import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"



export const initialStateRequest=[]

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataToRequest':{
            let newData=action.payload?.data
            return [newData,...state]
               
            }

            case 'removeRequest':{
                let data=action.payload?.data
                let stateProducts=[...state]
                stateProducts=stateProducts.filter(item=>item.id !== data.id)
                return stateProducts
            }        
    }
    return state
}