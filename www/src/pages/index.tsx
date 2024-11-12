import { useState } from 'react';

interface LinkListNode {
  data: any;
  next?: LinkListNode
}

const quickSort = ()=>{

}
const mergeSort = ()=>{
  const a = [4, 2, 5, 12, 3];
  const pivot = a.length - 1;
  
}


export default function IndexPage() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div></div>
  )
}
