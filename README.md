Answer the questions:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById:getElementById is used for getting specific element by given id of this element,

    getElementsByClassName: getElementsByClassName is used for getting elements with same class which means at a time 
    many elements can be got by this method .On othe hand, getElementById is used for getting one unique element.

    
    querySelector / querySelectorAll: By using querySelector we can get first element of this attribute.On the other hand,
     by using querySelectorAll we can get all element of this attribute.

     
2.How do you create and insert a new element into the DOM?
 
 Ans:  We create element by using document.createElement() and insert a new element by
    using element.append();

    
3.What is Event Bubbling and how does it work?


Ans: Event Bubbling works on DOM tree.Event starts from innermost childnode and then moves upwards through
    parennode.

    work: when an event is occurs let's say click on innermost child ,the event goes upward  to it's parent then parent's parent thus it moves through the process untill it reaches the document.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a very smart technique where an event listener is added to parent element to handle event on it's children
     using event bubbling

     useful: It is useful because it helps to reduce adding multiple event listener and improves performance of code.


5.What is the difference between preventDefault() and stopPropagation() methods?

 Ans: preventDefault(): Stops default event action of browser such form submitting , following a link etc.

      stopPropagation(): Stops the event from bubbling through the DOM.
