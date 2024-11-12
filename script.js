let table=document.querySelector(".table");
       const t1=new Promise((resolve,reject)=>{
        let time = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(()=>{
          resolve(time);
        },time)
       });
      const t2=new Promise((resolve,reject)=>{
        let time = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(()=>{
          resolve(time);
        },time)
        
      });
      const t3=new Promise((resolve,reject)=>{
        let time = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(()=>{
          resolve(time);
        },time)
      });
      let tbody=document.querySelector("#output");
      tbody.innerHTML=`
      <tr id="loading">
        <td colspan="2">Loading...</td>
      </tr>
      `
      const allPromise=Promise.all([t1,t2,t3]);
      allPromise.then((result)=>{
        let tbody=document.querySelector("#output");
        tbody.innerHTML="";
        for(let i=0;i<result.length;i++){
          let trow=document.createElement('tr');
          let cell1=document.createElement('td');
          let cell2=document.createElement('td');
          cell1.textContent=`Promise ${i+1}`;
          cell2.textContent=result[i]/1000;
          trow.appendChild(cell1);
          trow.appendChild(cell2);
          tbody.append(trow);
          table.appendChild(tbody);
        }
        	  let trow=document.createElement('tr');
            let cell1=document.createElement('td');
            let cell2=document.createElement('td');
            cell1.textContent="Total";
            cell2.textContent=Math.max(...result) / 1000;
            trow.appendChild(cell1);
            trow.appendChild(cell2);
            tbody.append(trow);
            table.appendChild(tbody);
        }).catch((error)=>{
            console.log(error);
        })
    