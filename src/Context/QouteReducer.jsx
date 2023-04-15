const QouteReducer = (state , action) =>{
        
    switch( action.type){
   
           case "GET_QOUTE":
            return{
                ...state,
                qoute : action.payload
            }


        default :
        return state ;
    }

}

export default QouteReducer