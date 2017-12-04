'use strict';


class LinkedList{
  //new LinkedList()
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node should be instance of LinkedList');
    if(!this.next){
      this.next = node;
    }else
      this.next.append(node);
    return node;
  }

  remove(node){
    // console.log('this.next is', this.next);
    // console.log('node is', node);
    // console.log(this.next);
    if(!(node instanceof LinkedList))
      throw new TypeError('<node should be instance of LinkedList');
    if(!this.next)
      return this;
    if(this.next === node){
      this.next = this.next.next;
    }else{
      this.next.remove(node);
    }
    return this;
  }

  find(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node should be instance of LinkedList');
    if(!this.next)
      return this;
    if(this.next === node){
      return this.next;
    }else{
      this.next.find(node);
    }
    return this;
  }
}

module.exports = LinkedList;
