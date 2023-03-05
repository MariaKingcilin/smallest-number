//n th smallest Number

var array=[5,6,3,8,2,7,1,9,0];
var n=parseInt(prompt("Enter your value"));
function nsmall(array,n)
{
	for(i=0;i<array.length;i++)
	{
		for(j=i+1;j<array.length;j++)
		{
			if(array[i]>array[j])
			{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	var small=array[n-1];
	return small;
}
console.log(nsmall(array,n));


//smallest number

var array=[5,6,3,8,2,7,1,9,0];
function small(array)
{
	for(i=0;i<array.length;i++)
	{
		for(j=i+1;j<array.length;j++)
		{
			if(array[i]>array[j])
			{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
		console.log(array[i]);
	}
}
console.log(small(array));