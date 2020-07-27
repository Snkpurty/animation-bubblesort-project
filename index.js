let block = document.getElementsByClassName('block');
let arr=[];
for(let i=700;i>=14;i=i-14)
{
    arr.push(i);
}


for(let i=0;i<arr.length;i++)
    block[i].style.height = arr[i] + "px";

function bubbleSort()
{

function foo()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve();
        },10);
    })
}
async function sort()
{
    for(let i=1;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i;j++)
        {
            block[j].style.backgroundColor = "red";
            block[j+1].style.backgroundColor = "red";
            await foo();
            if(arr[j]>arr[j+1])
                {
                    let temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            block[j].style.height = arr[j] +"px";
            block[j+1].style.height = arr[j+1] +"px";
            await foo();
            block[j].style.backgroundColor = "rgb(0, 204, 255)"
        }
        block[arr.length-i].style.backgroundColor = "green";
    }
}
sort();
}
bubbleSort();
