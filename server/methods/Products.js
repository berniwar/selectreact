
import { Products}   from '../../imports/api/Products.js'
import { Meteor }  from 'meteor/meteor';

Meteor.methods({
        addProduct:function(product){
                console.log("add product meteor method called from the server", product)
                var productItem = Products.insert({...product},(err,done)=>{
                        console.log(err,done)
                })
                console.log(productItem)
        },

        // removeTodo:function(todo){
        //         console.log("remove Todo meteor method called from the server", todo)
        //         Todos.remove({_id:todo})
        // }
        
})