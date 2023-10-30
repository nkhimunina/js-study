function checkCashRegister(price, cash, cid) {
  const money = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05], 
    ["DIME", 0.1], 
    ["QUARTER", 0.25], 
    ["ONE", 1], 
    ["FIVE", 5], 
    ["TEN", 10], 
    ["TWENTY", 20], 
    ["ONE HUNDRED", 100]
  ];
  
  let change = {};
  let cidSum = cid.map((elm) => elm[1]).reduce((a, b) => a + b, 0);
  let diff = cash - price;
  if (diff > cidSum) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  } else if (diff === cidSum) {
    change.status = "CLOSED";
    change.change = cid;
  } else {
    change.status = "OPEN";
    let changeRes = [];
    for (let i = cid.length-1; i >= 0; i--) {
      if (diff >= money[i][1] && cid[i][1] !== 0) {
        let changeValue = 0;
        let tmpCid = cid[i][1];
        while (tmpCid > 0 && diff >= money[i][1]) {
          changeValue += money[i][1];
          tmpCid -= money[i][1];
          diff = (diff - money[i][1]).toFixed(2);
        }
        changeRes.push([money[i][0], changeValue]);
      }
    }
    let cidResultSum = changeRes.map((elm) => elm[1]).reduce((a, b) => a + b, 0);
    if (cidResultSum < diff) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
    } else {
      change.change = changeRes;
    }
  }
  
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}