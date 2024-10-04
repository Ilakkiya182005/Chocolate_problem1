let arr=[2,3,0,3,4,5,0,9];
let n=arr.length;
let c=0;
for(let i=0;i<n;i++){
    if(arr[i]!=0){
       arr[c]=arr[i];
       c++;
    }
}
while(c < n){
    arr[c]=0;
    c++;
}
console.log(arr);
