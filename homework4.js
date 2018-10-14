const triangleStars = function(height)
{
	const j = 2 * height - 1;
	let i = 0;
	while(i < height) {
		console.log(' '.repeat(i) + '*'.repeat(j - 2 * i));
		i=i+1;
	}
};

const stringMultiply = function(string, number){
    str = "";
    while(number > 0){
      str += string;
      number--;
    }
    return str;
  };

const findMinMax = function(array, g){
	let i = 1;
	let n;
	let j=array[0];
	if (g){
		while(i<array.length){
			if (j>=array[i]){j=j;}
			else{j= array[i]}
			i++;
		}
		
	}
	else{
		while(i<array.length){
			if (j<=array[i]){j=j;}
			else{j= array[i]}
			i++;
	}
	}
	console.log(j);
};

 const forEach = function(array, f)
 {
 	        let k = 0;
            while (k<array.length){
              console.log(f(array[k]));
              k++;
            }  
          };

const sum = function(arr)
{
	let sum = 0;
	let i=0;
	while(i<arr.length){
		sum=sum+arr[i];
		i=i+1;
	}
	return(sum);
};

 const reverse= function(something){
        let x=0;
        let t="";
        let r= word.length - 1;
       
        while (x<something.length){
          t = t + something[b];
          r=r-1;
          x++;
        }
        return t;
      };

const checkerboard = function(a)
{
	const line = '* '.repeat(a);
	let i = 1;
	while(i <= a)
		console.log(' '.repeat((++i)%2) + line);
};



















