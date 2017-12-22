import { Qualities}   from '../../imports/api/Qualities.js'
import { Meteor }  from 'meteor/meteor';

Meteor.methods({
        addQuality:function(product){
                console.log("add product meteor method called from the server", product)
                Qualities.insert({...product})

        },

        // removeTodo:function(todo){
        //         console.log("remove Todo meteor method called from the server", todo)
        //         Todos.remove({_id:todo})
        // }
        
})