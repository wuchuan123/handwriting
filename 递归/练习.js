let arr = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 5, name: "部门5", pid: 4 },
  ];
// [
  //   {
  //     id: 1,
  //     name: "部门1",
  //     pid: 0,
  //     children: [
  //       {
  //         id: 2,
  //         name: "部门2",
  //         pid: 1,
  //         children: [],
  //       },
  //       {
  //         id: 3,
  //         name: "部门3",
  //         pid: 1,
  //         children: [
  //           {
  //             id: 4,
  //             name: "部门4",
  //             pid: 3,
  //             children: [
  //               {
  //                 id: 5,
  //                 name: "部门5",
  //                 pid: 4,
  //                 children: [],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

const arrToTree=(arr,result=[],pid)=>{
     arr.forEach(item=>{
        if(item.pid==pid){
            const newItem={...item,children:[]}
            result.push(newItem)
            arrToTree(arr,newItem.children,item.id)
        }
    })
    return result
}
console.log(arrToTree(arr,[],0))