function nthroot(x, n)
   {
    try{
      var negate = n % 2 == 1 && x < 0;
      if(negate)
        x = -x;
      var possible = Math.pow(x, 1 / n);
      n = Math.pow(possible, n);
      if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
        return negate ? -possible : possible;
    }
    catch(e){console.log("error ... " + e);}
    
   }



function graphData(){
  const data = [];
  const fixed = [10,40,100,220,100,140,110,125,40,50,10];
  const intervals = 9;

  for(let i=0;i<=100;i++){
    let obj = {};
    if(i%10===0){
      obj = {
        name: i + '%',
        value: fixed[i/10],
        value2: fixed[i/10]*1.5
      };
      data.push(obj);
    }
    else{
      let band = Math.floor(i/10);
      if(band<10){
        // let dif = parseInt(fixed[band+1]) - parseInt(fixed[band]);
        // let val = Math.round(dif/intervals);
        // let cur = fixed[band] + val;
        let div =  (parseInt(fixed[band+1])/parseInt(fixed[band]));
        let val = nthroot(div,9);
        // console.log("nth root : " + val);
        let cur = fixed[band]*val;
        for(let j=0;j<intervals;j++){
          obj = {
            name: i+j+'%',
            value: Math.round(cur),
          }
          cur = fixed[band]*(Math.pow(val,j+2));
          data.push(obj);
        }
      }
      i += 8;
    }
    
  }
  // console.log(data);
  return data;

}

export default graphData;