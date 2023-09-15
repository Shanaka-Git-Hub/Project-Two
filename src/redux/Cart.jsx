import { createSlice, current } from '@reduxjs/toolkit';
import { itemList } from '../components/Data';

export const itemsSlice = createSlice({
  name: 'items',
  initialState:[],
  reducers: {
    saveItem: (state, action) => {
       let {id,title,image,price}=action.payload;
       let item={
        id:id,
        name:title,
        img:image,
        qty:1,
        total:price,
        unitPrice:price
       }
       let exits=state.find(e=> e.id==id);
       if(exits){
          exits.id=id;
          exits.qty+=1;
          exits.total+=price
         console.log(current(exits));
       }
       else{
         state.push(item);
       } 
    },
    incrementQty:(state,action)=>{
       let item=state.find(e=> e.id==action.payload.id);
       if(item){
        item.qty+=1;
        item.total+=item.unitPrice
       }
       return
    },
    decrementQty:(state,action)=>{
      let item=state.find(e=> e.id==action.payload.id);
      if(item){
       item.qty-=1;
       item.total-=item.unitPrice
      }
      return
   }


  }
})

export const { saveItem, incrementQty,decrementQty } = itemsSlice.actions;
export default itemsSlice.reducer;