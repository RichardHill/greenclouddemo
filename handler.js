/**
 * Very simple Lambda which just returns a string on invocation.
 */
module.exports.handler = function(event, context) {
    context.succeed('Hello, World!');   
    console.log("The event is -: " + JSON.stringify(event));
    console.log("The context is -: " + JSON.stringify(context)); 
};